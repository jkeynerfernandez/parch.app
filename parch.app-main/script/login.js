import { UserDataModel } from "./data_base_model.js";
import { setLocalStorage } from "./local_storage.js";
const USER_DATA_MODEL = new UserDataModel();
const FORM_DATA = document.getElementById("login_form");
let USER_ID;

const validateCredentials = async function (userEmail, userPassword) {
  const request = await USER_DATA_MODEL.getUserByEmail(userEmail);
  const userData = request[0];
  const isEmailInDB = Boolean(userData); 
  if (isEmailInDB) {
    return validatePassword(userPassword, userData);
  } else {
    return false;
  }
}

const validatePassword = function(userPassword, userData) {  
  const {password} = userData;
  if (userPassword == password) {
    USER_ID = userData.id;
    return true;    
  } else {
    return false;
  } 
}

const invalidCredential = function() {
  const invalidHTML = document.getElementById("invalid_login")
  invalidHTML.style.display = 'block';
  setTimeout ( () => {
    invalidHTML.style.display = 'none';
  },5000)
}

FORM_DATA.addEventListener('submit', async (e) => {
  e.preventDefault()
  const {login_email, login_password} = FORM_DATA;
  const isValidUser = await validateCredentials(login_email.value, login_password.value)
  console.log(FORM_DATA)
  if (isValidUser) {
    setLocalStorage('userToken', USER_ID);
    window.location.href = "../index.html";
  } else {
   console.log(isValidUser)
   invalidCredential()
  }
})