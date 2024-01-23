import { Usuario as User } from "./user_class.js";
import { DataModel } from "./data_base_model.js";
const exampleUser = new User("Jose", "jose123@gmail.com", "12345678", "none", 
"Buenos dias mexico", "Desparchado", 2100, 510, 10, "20/10/2001", "Olimpiadas", 2, "2");
// console.log(exampleUser)
// console.log(exampleUser.name)
// exampleUser.about = "Buenos dias colombia yo soy Carlos"
// console.log(exampleUser.about)
// exampleUser.name = "maria"
// console.log(exampleUser.name)

const dataModel = new DataModel;
dataModel.getUserByEmail("exampleUser@email.com")