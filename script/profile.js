// import { UserMediator, EventFecade } from "./fecade_user.js";
// import { ServicesDataModel, UserDataModel } from "./data_base_model.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"
import { Controler } from "./controler.js";
const userToken = getLocalStorage("userToken");
const USER_DATA = new Controler(userToken);
// reutilizacion de la data y reutilizacion de codigo
// eso minimo es un controler 
setTimeout( () => {
  console.log(USER_DATA);
},400)