import { UserFecade, EventFecade } from "./fecade_user.js";
import { ServicesDataModel, UserDataModel } from "./data_base_model.js";
// const exampleUser = new User("Jose", "jose123@gmail.com", "12345678", "none", 
// "Buenos dias mexico", "Desparchado", 2100, 510, 10, "20/10/2001", "Olimpiadas", 2, "2");
// console.log(exampleUser)
// console.log(exampleUser.name)
// exampleUser.about = "Buenos dias colombia yo soy Carlos"
// console.log(exampleUser.about)
// exampleUser.name = "maria"
// console.log(exampleUser.name)

const eventModel = new ServicesDataModel();
const list = eventModel.getEventInfo("e95b")
const userRequest = {
  // name : "Keineron Faroun de Rusia",
  // nickname : "KeinerElFaraon",
  email : "Keiner@gmail.com",
  // password : "tommy2001",
  // post_counter : 4
}
// dataModel.addNewUser(userRequest);
const exampleUser = new UserFecade("53cc");
const fecadeExample = new EventFecade("df4d")
setTimeout( () => {
  exampleUser.name = 'lasdlasldalsd'

  console.log(exampleUser.userData, "dasdasd")
  console.log(fecadeExample.userData)
  console.log(fecadeExample.userEvents)
},500)
// exampleUser.init("df4d")
// dataModel.patchUser("82aa", userRequest)