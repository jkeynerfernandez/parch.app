import { UserDataModel } from "./data_base_model.js";
import { setLocalStorage } from "./local_storage.js";
import { validateChain } from "./validate_email.js";
/*---------- CONTROLER ----------*/
const UserData = new UserDataModel;
const ControlerSignup = {
  init () {
    this.validForm = {}
    SignupViews.init()
  },

  checkFormValues () {
    const isValidEmail = this.validForm.email.valid;
    const isValidNickname = this.validForm.nickname.valid;
    if (isValidEmail && isValidNickname) {
      this.addNewUserDataBase()
    } else {
      SignupViews.render()
    }
  },

  async addNewUserDataBase () {
    const newUserData = {
      name : SignupViews.nameHTML.value,
      nickname : SignupViews.nameHTML.value,
      email : SignupViews.emailHTML.value,
      password : SignupViews.passwordHTML.value
    }
    const newUser = await UserData.addNewUser(newUserData);
    const userID = newUser.id;
    setLocalStorage('userToken', userID);
    window.location.href = "../index.html";
  },

  async checkEmailAddress (userEmailAddress) {
    let validateEmail = await validateChain.init(userEmailAddress);
    const message = validateEmail.toLowerCase()
    if (message == "looks good") {
      this.validForm.email = {valid : true, message : message}
    } else {
      this.validForm.email = {valid : false, message : message}
    }
  },

  async checkNicknameDB (userNickname) {
    const validNickname = await UserData.getUserByNickname(userNickname);
    const isNicknameInDB = Boolean(validNickname[0])
    let message;
    if (!isNicknameInDB) {
      message = "looks good"
      this.validForm.nickname = true
      this.validForm.nickname = {valid : true, message : message}
    }
    else {
      message = "This username is already taken"
      this.validForm.nickname = {valid : false, message : message}
    }
    return message
  }
}

/*---------- VIEWS ----------*/
const SignupViews = {
  init () {
    this.formHTML = document.getElementById("signup_form")
    this.nameHTML = document.getElementById("signup_name");
    this.emailHTML = document.getElementById("signup_email");
    this.passwordHTML = document.getElementById("signup_password");
    this.checkBoxHTML = document.getElementById("signup_checkbox");
    this.formHTML.addEventListener('submit', (e) => {
      e.preventDefault()
      ControlerSignup.checkFormValues()})
    this.checkForm()
    this.clearFormOnLoad()
  },

  render () {
    const validateElements = {
      nickname : document.getElementById("invalid_name"),
      email : document.getElementById("invalid_email"),
      password : document.getElementById("invalid_password")
    }
    const signupMessages =  ControlerSignup.validForm

    // change display of elements
    for (const key in validateElements) {
      const htmlElement = validateElements[key] 
      htmlElement.style.display = 'block';
      setTimeout (() => {
        htmlElement.style.display = 'none';
      },5000)
    }

    // add custom messages
    for (const key in signupMessages) {
      const htmlElement = validateElements[key] 
      const message = signupMessages[key]["message"]
      const validMessage = signupMessages[key]["valid"]
      htmlElement.innerText = message
      if (validMessage) {
        htmlElement.style.color = "green";
      }
    }
  },

  checkForm () {
    // email
    this.emailHTML.addEventListener('change', (e) => {
      ControlerSignup.checkEmailAddress(this.emailHTML.value)
    })

    // nickname
    this.nameHTML.addEventListener('change', (e) => {
      ControlerSignup.checkNicknameDB(this.nameHTML.value)
    }) 
  },

  getFormData () {
    const data = {
      nickname : this.nameHTML.value,
      email : this.emailHTML.value,
      password : this.passwordHTML.value 
    }
    return data
  },

  clearFormOnLoad () {
    this.emailHTML.value = "",
    this.passwordHTML.value = "",
    this.nameHTML.value = ""
  }
} 

ControlerSignup.init()