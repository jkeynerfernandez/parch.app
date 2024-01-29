import { UserDataModel } from "./data_base_model.js";
import { setLocalStorage } from "./local_storage.js";
import { validateChain } from "./validateEmail.js";
/*---------- CONTROLER ----------*/
const UserData = new UserDataModel;
const ControlerSignup = {
  init () {
    this.validForm = {}
    SignupViews.init()
  },

  async addNewUserDataBase () {
    const newUserData = {
      name : SignupViews.nameHTML.value,
      nickname : SignupViews.nameHTML.value,
      email : SignupViews.emailHTML.value,
      password : SignupViews.passwordHTML.value
    }
    console.log(newUserData)
    const newUser = await UserData.addNewUser(newUserData);
    console.log(newUser)
    const userID = newUser.id;
    console.log(userID)
    setLocalStorage('userToken', userID);
    window.location.href = "/index.html";
  },

  checkFormValues () {
    const emailAddres = ".1joseLuis@gmail.com"
    const isValidEmail = this.validForm.email.valid;
    const isValidNickname = this.validForm.nickname.valid;
    console.log(this.validForm)
    if (isValidEmail && isValidNickname) {
      console.log("hello")
      this.addNewUserDataBase()
    } else {
      console.log("falas")
      SignupViews.render()
    }
    console.log(isValidEmail, isValidNickname)
  },

  async checkEmailAddress (userEmailAddress) {
    let validateEmail = await validateChain.init(userEmailAddress);
    const message = validateEmail.toLowerCase()
    if (message == "looks good") {
      this.validForm.email = {valid : true, message : message}
    } else {
      this.validForm.email = {valid : false, message : message}
    }
    console.log(message)
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
    // this.render()
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
// V
// let UsergenderSelect = document.getElementById("genderSelect");
// let femaleGender = document.getElementById("female");
// let maleGender = document.getElementById("female");
// let otherGender = document.getElementById("other");
// let defaultGender = document.getElementById("default");

// let invalidData1 =
//   document.getElementById("invalid-feedback1"); /* name div de invalid */
// let invalidData2 =
//   document.getElementById("invalid-feedback2"); /* name div de invalid */
// let invalidData3 =
//   document.getElementById("invalid-feedback3"); /* name div de invalid */
// let invalidData4 =
//   document.getElementById("invalid-feedback4"); /* name div de invalid */


// let btnSingUp = document.getElementById("button-singUp");

// var datoInvalidoFunction;
// let formBoxLogin = document.getElementById("login-form-box");
// let contadorValidoSingUp = 0;
// var loginStyleCounter = 0;

// /* REGISTER SECTION */

// btnSingUp.addEventListener("click", function singUp() {
//   let usuario = {
//     name: "",
//     email: "",
//     password: "",
//     gender: "",
//   };

//   /* si es invàlido o vacìo el dato */

//   function datoInvalido() {
//     if (userNameValue.value == "") {
//       userNameValue.classList.add("invalid");
//       invalidData1.style.display = "block";
//     }
//     if (userEmailValue.value == "") {
//       userEmailValue.classList.add("invalid");
//       invalidData2.style.display = "block";
//     }
//     if (userPasswordValue.value == "") {
//       userPasswordValue.classList.add("invalid");
//       invalidData3.style.display = "block";
//     }
//     if (UsergenderSelect.value == "default") {
//       console.log(UsergenderSelect.value);
//       UsergenderSelect.classList.add("invalid");
//       invalidData4.style.display = "block";
//     }
//     if (UsergenderSelect.value == "default") {
//       contadorValidoSingUp -= 1;
//     } else {
//       console.log("nada");
//     }
//     console.log(usuario);
//   }

//   /* si es vàlido el dato */

//   function datoValido() {
//     /* ARREGLAR EL VALIDAR EMAIL*/

//     if (userNameValue.value !== "") {
//       userNameValue.classList.remove("invalid");
//       userNameValue.classList.add("valid");
//       invalidData1.style.display = "none";
//       contadorValidoSingUp = +1;
//     }
//     /* ARREGLAR EL VALIDAR EMAIL*/

//     if (
//       userEmailValue.value !== "" &&
//       validarEmail.test(userEmailValue.value) == true
//     ) {
//       userEmailValue.classList.remove("invalid");
//       userEmailValue.classList.add("valid");
//       invalidData2.style.display = "none";
//       contadorValidoSingUp += 1;
//     } else if (
//       userEmailValue.value !== "" &&
//       validarEmail.test(userEmailValue.value == false)
//     ) {
//       userEmailValue.classList.remove("valid");
//       userEmailValue.classList.add("invalid");
//       invalidData2.style.display = "block";
//     }

//     if (validarEmail.test(userEmailValue.value == false)) {
//       userEmailValue.classList.remove("valid");
//       userEmailValue.classList.add("invalid");
//       console.log(validarEmail.test(userEmailValue.value));
//       contadorValidoSingUp += 1;
//       console.log(contadorValidoSingUp);
//     }

//     if (userPasswordValue.value !== "") {
//       userPasswordValue.classList.remove("invalid");
//       userPasswordValue.classList.add("valid");
//       invalidData3.style.display = "none";
//       contadorValidoSingUp += 1;
//       console.log(contadorValidoSingUp);
//     }
//     if (UsergenderSelect.value !== "default") {
//       UsergenderSelect.classList.remove("invalid");
//       UsergenderSelect.classList.add("valid");
//       invalidData4.style.display = "none";
//       contadorValidoSingUp += 1;
//       console.log(contadorValidoSingUp);
//     }
//     console.log(contadorValidoSingUp);
//   }

//   console.log(defaultGender.value);

//   function borrarDatosInput() {
//     if (contadorValidoSingUp == 4) {
//       userNameValue.value = "";
//       userEmailValue.value = "";
//       userPasswordValue.value = "";
//       UsergenderSelect.value = defaultGender.value;
//       /* FALTA QUITAR EL VALUE DEL GENERO */
//       userNameValue.classList.remove("valid");
//       userNameValue.classList.remove("invalid");
//       userEmailValue.classList.remove("valid");
//       userEmailValue.classList.remove("invalid");
//       userPasswordValue.classList.remove("valid");
//       userPasswordValue.classList.remove("invalid");
//       UsergenderSelect.classList.remove("valid");
//       UsergenderSelect.classList.remove("invalid");
//       invalidData1.style.display = "none";
//       invalidData2.style.display = "none";
//       invalidData3.style.display = "none";
//       invalidData4.style.display = "none";
//       console.log(LISTA_USUARIO);
//     }
//   }

//   datoValido();

//   function enterLogin() {
//     alert("Registro Exitoso!");
//   }

//   console.log(usuario);

//   /* validar si el input no es vacìo, enviar formulario */
//   if (
//     userNameValue.value !== "" &&
//     userEmailValue.value !== "" &&
//     userPasswordValue.value !== "" &&
//     UsergenderSelect.value !== "default"
//   ) {
//     console.log("nuevo registro");
//     usuario.name = userNameValue.value;
//     usuario.email = userEmailValue.value;
//     usuario.password = userPasswordValue.value;
//     usuario.gender = UsergenderSelect.value;
//     LISTA_USUARIO.push(usuario);
//     console.log(usuario, LISTA_USUARIO);
//     enterLogin();
//     borrarDatosInput();
//   } else {
//     datoInvalido();
//   }

//   //   sessionStorage.setItem("listaUsuarios", JSON.stringify(LISTA_USUARIO, 2));
//   //   console.log(sessionStorage);
// });