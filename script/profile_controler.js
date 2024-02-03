import { ServicesDataModel, UserDataModel } from "./data_base_model.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"
import { ProfileView } from "./profile_view.js";
import { PointsCalculator, rolObject} from "./point_calculator.js";

const DataModel = new UserDataModel;
const ServiceModel = new ServicesDataModel;
const Controler = {
  async init () {
    this.userToken = getLocalStorage("userToken");
    this.userData = await DataModel.getUserByID(this.userToken);
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

export {Controler}