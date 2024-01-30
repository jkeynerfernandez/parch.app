import { ServicesDataModel, UserDataModel } from "./data_base_model.js";
import { PointsCalculator, rolObject} from "./point_calculator.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"
/*---------- CONTROLER ----------*/
const DataModel = new UserDataModel;
const ServiceModel = new ServicesDataModel;
const Controler = {
  async init (userToken) {
    this.userToken = userToken;
    this.userData = await DataModel.getUserByNickname(this.userToken);
    console.log(this.userData)
    // get user data from array
    this.userData = this.userData[0]
    const rolData = this.estadisticCalculation() 
    // extends userData with rol data object
    this.userData = {
      ...this.userData,
      ...rolData
    }
    ProfileView.init()
    return this.userData
  },

  getUserData () {
    return this.userData;
  },

  estadisticCalculation () {
    const currentPoints = this.userData.level_points;
    const CalculatePoints = new PointsCalculator(currentPoints, rolObject);
    const object = {
      progress_bar : CalculatePoints.progressBar,
      next_level_points : CalculatePoints.nextLevelPoints,
      rol_type : CalculatePoints.rolType
    }
    return object
  }
}

/*---------- VIEWS ----------*/
const ProfileView = {
  init () {
    this.nickName = document.getElementById("user_nickname");
    this.parcheCounter = document.getElementById("parche_counter");
    this.postCounter = document.getElementById("post_counter");
    this.credibilityCounter = document.getElementById("credibility_counter");
    console.log(this.nickName)
    // this.level = document.getElementById("levelHTML"); // Should change to roltype
    // this.parchePoints = document.getElementById("parche_points");
    // this.progressBar = document.getElementById("progress_bar");
    // this.pointsNextLevel = document.getElementById("points_next_level");
    this.render()
  },

  render () {
    const userData = Controler.getUserData();
    const {nickname, parche_counter, post_counter, credibility, level, parche_points, 
    progress_bar, next_level_points, rol_type} = userData;     
    this.nickName.innerText = `@${nickname}`
    this.parcheCounter.innerText = parche_counter;
    this.postCounter.innerText = post_counter;
    this.credibilityCounter.innerText = credibility;
    // this.level.innerText = level; //should change to rol_type 
    // this.parchePoints.innerText = parche_points;
    // this.progressBar.style.width = `${progress_bar}%`;
    // console.log(typeof(progress_bar))
    // this.pointsNextLevel.innerText = `${next_level_points} points to next level`;
  }
}

const userToken = getLocalStorage("suggestionProfile")
document.addEventListener("DOMContentLoaded", Controler.init(userToken));
