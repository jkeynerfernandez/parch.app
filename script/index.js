import { UserMediator, EventFecade } from "./fecade_user.js";
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
  name : "Salida Moscu en Roma", 
  description : "Comida callejeta y salida pa Manrique",
  category : "Traveling in the city",
  location : "medellin",
  day : "22/10/2001",
  hour : "2100",
  price : "cerveza por persona",
}
// dataModel.addNewUser(userRequest);
const currentUser = "df4d";
const exampleUser = new UserMediator(currentUser);
const fecadeExample = new EventFecade(currentUser, "1e14")
setTimeout( () => {
  // exampleUser.email = "jesusRamiroLondono@gmail.co/*  */m" 
  // exampleUser.addEvent(userRequest)
  // fecadeExample.location = "Cali - Tolima"
  // fecadeExample.price = 3000
  // fecadeExample.deleteEvent()
  const data = fecadeExample.description
  // exampleUser.
  console.log(exampleUser.userData, "dasdasd")
  console.log(exampleUser.getEventList(), 'jojo')
  console.log(fecadeExample.userEvents)
},500)
// exampleUser.init("df4d")
// dataModel.patchUser("82aa", userRequest)