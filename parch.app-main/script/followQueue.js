import { ServicesDataModel, UserDataModel } from "./data_base_model.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"
const UserData = new UserDataModel;
const data = {
  init () {
    console.log('dasd')
  },

  getUserData (userID) {
    this.data = UserData.getUserByID(userID)
  }
}