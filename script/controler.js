import { UserMediator, EventFecade } from "./fecade_user.js";
import { ServicesDataModel, UserDataModel } from "./data_base_model.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"

// reutilizacion de la data y reutilizacion de codigo
// eso minimo es un controler 

class Controler {
  init () {
    this.userToken = getLocalStorage("userToken");
    this.USER_DATA = new UserMediator(this.userToken);
  }

  getUserData () {
    return this.USER_DATA.userData
  } 
}

export {Controler}