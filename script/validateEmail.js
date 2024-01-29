import { UserDataModel } from "./data_base_model.js";
const UserData = new UserDataModel();

const validateChain = {
  async init (userEmailAddress) {
    const isValidEmail = await this.validateEmailValue(userEmailAddress);
    return isValidEmail;
  },

  async validateEmailValue (userEmailAddress) {
    const isValidEmail = validateEmail(userEmailAddress)  
    let message;
    if (isValidEmail) {
      message = await this.validateInDataBase(userEmailAddress) 
      console.log(message)
      return message;
    }
    else {
      message = "Invalid email address"
      return message;
    }
  },

  async validateInDataBase (userEmailAddress) {
    const isEmailTaken = await validateEmailDataBase(userEmailAddress);
    let message;
    if (isEmailTaken) {
      message = "Email already taken";
      return message;
    }
    else {
      message = "Looks good";
      return message;
    }
  }
}
const validateEmail = (userEmailAddress) => {
  const emailValidation = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const isValidEmail = emailValidation.test(userEmailAddress)
  return isValidEmail
}
const validateEmailDataBase = async (userEmailAddress) => {
  const isEmailTaken = await UserData.getUserByEmail(userEmailAddress)
  return Boolean(isEmailTaken.length)
}

export { validateChain }