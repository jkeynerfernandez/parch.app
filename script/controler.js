import { UserMediator, EventFecade } from "./fecade_user.js";
import { ServicesDataModel, UserDataModel } from "./data_base_model.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"
import { ProfileView } from "./profile_view.js";
import { PointsCalculator, rolObject} from "./point_calculator.js";
// reutilizacion de la data y reutilizacion de codigo
// eso minimo es un controler 

const DataModel = new UserDataModel;
const ServiceModel = new ServicesDataModel;
const Controler = {
  async init () {
    this.userToken = getLocalStorage("userToken");
    // this.userData = new UserMediator(this.userToken);
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

// const result = progressBarCalculator(1200, 120);
// const result2 = calculatePointsNextLevel(1200, 250);
// const result3 = levelType(1100, rolObject)
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

// Controler.init()
export {Controler}