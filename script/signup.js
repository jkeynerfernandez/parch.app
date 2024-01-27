let userNameValue = document.getElementById("nameText");
let userEmailValue = document.getElementById("emailText");
let userPasswordValue = document.getElementById("passwordText");

let UsergenderSelect = document.getElementById("genderSelect");
let femaleGender = document.getElementById("female");
let maleGender = document.getElementById("female");
let otherGender = document.getElementById("other");
let defaultGender = document.getElementById("default");

let invalidData1 =
  document.getElementById("invalid-feedback1"); /* name div de invalid */
let invalidData2 =
  document.getElementById("invalid-feedback2"); /* name div de invalid */
let invalidData3 =
  document.getElementById("invalid-feedback3"); /* name div de invalid */
let invalidData4 =
  document.getElementById("invalid-feedback4"); /* name div de invalid */

let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

let btnSingUp = document.getElementById("button-singUp");

var datoInvalidoFunction;
let formBoxLogin = document.getElementById("login-form-box");
let contadorValidoSingUp = 0;
var loginStyleCounter = 0;

/* REGISTER SECTION */

btnSingUp.addEventListener("click", function singUp() {
  let usuario = {
    name: "",
    email: "",
    password: "",
    gender: "",
  };

  /* si es invàlido o vacìo el dato */

  function datoInvalido() {
    if (userNameValue.value == "") {
      userNameValue.classList.add("invalid");
      invalidData1.style.display = "block";
    }
    if (userEmailValue.value == "") {
      userEmailValue.classList.add("invalid");
      invalidData2.style.display = "block";
    }
    if (userPasswordValue.value == "") {
      userPasswordValue.classList.add("invalid");
      invalidData3.style.display = "block";
    }
    if (UsergenderSelect.value == "default") {
      console.log(UsergenderSelect.value);
      UsergenderSelect.classList.add("invalid");
      invalidData4.style.display = "block";
    }
    if (UsergenderSelect.value == "default") {
      contadorValidoSingUp -= 1;
    } else {
      console.log("nada");
    }
    console.log(usuario);
  }

  /* si es vàlido el dato */

  function datoValido() {
    /* ARREGLAR EL VALIDAR EMAIL*/

    if (userNameValue.value !== "") {
      userNameValue.classList.remove("invalid");
      userNameValue.classList.add("valid");
      invalidData1.style.display = "none";
      contadorValidoSingUp = +1;
    }
    /* ARREGLAR EL VALIDAR EMAIL*/

    if (
      userEmailValue.value !== "" &&
      validarEmail.test(userEmailValue.value) == true
    ) {
      userEmailValue.classList.remove("invalid");
      userEmailValue.classList.add("valid");
      invalidData2.style.display = "none";
      contadorValidoSingUp += 1;
    } else if (
      userEmailValue.value !== "" &&
      validarEmail.test(userEmailValue.value == false)
    ) {
      userEmailValue.classList.remove("valid");
      userEmailValue.classList.add("invalid");
      invalidData2.style.display = "block";
    }

    if (validarEmail.test(userEmailValue.value == false)) {
      userEmailValue.classList.remove("valid");
      userEmailValue.classList.add("invalid");
      console.log(validarEmail.test(userEmailValue.value));
      contadorValidoSingUp += 1;
      console.log(contadorValidoSingUp);
    }

    if (userPasswordValue.value !== "") {
      userPasswordValue.classList.remove("invalid");
      userPasswordValue.classList.add("valid");
      invalidData3.style.display = "none";
      contadorValidoSingUp += 1;
      console.log(contadorValidoSingUp);
    }
    if (UsergenderSelect.value !== "default") {
      UsergenderSelect.classList.remove("invalid");
      UsergenderSelect.classList.add("valid");
      invalidData4.style.display = "none";
      contadorValidoSingUp += 1;
      console.log(contadorValidoSingUp);
    }
    console.log(contadorValidoSingUp);
  }

  console.log(defaultGender.value);

  function borrarDatosInput() {
    if (contadorValidoSingUp == 4) {
      userNameValue.value = "";
      userEmailValue.value = "";
      userPasswordValue.value = "";
      UsergenderSelect.value = defaultGender.value;
      /* FALTA QUITAR EL VALUE DEL GENERO */
      userNameValue.classList.remove("valid");
      userNameValue.classList.remove("invalid");
      userEmailValue.classList.remove("valid");
      userEmailValue.classList.remove("invalid");
      userPasswordValue.classList.remove("valid");
      userPasswordValue.classList.remove("invalid");
      UsergenderSelect.classList.remove("valid");
      UsergenderSelect.classList.remove("invalid");
      invalidData1.style.display = "none";
      invalidData2.style.display = "none";
      invalidData3.style.display = "none";
      invalidData4.style.display = "none";
      console.log(LISTA_USUARIO);
    }
  }

  datoValido();

  function enterLogin() {
    alert("Registro Exitoso!");
  }

  console.log(usuario);

  /* validar si el input no es vacìo, enviar formulario */
  if (
    userNameValue.value !== "" &&
    userEmailValue.value !== "" &&
    userPasswordValue.value !== "" &&
    UsergenderSelect.value !== "default"
  ) {
    console.log("nuevo registro");
    usuario.name = userNameValue.value;
    usuario.email = userEmailValue.value;
    usuario.password = userPasswordValue.value;
    usuario.gender = UsergenderSelect.value;
    LISTA_USUARIO.push(usuario);
    console.log(usuario, LISTA_USUARIO);
    enterLogin();
    borrarDatosInput();
  } else {
    datoInvalido();
  }

  //   sessionStorage.setItem("listaUsuarios", JSON.stringify(LISTA_USUARIO, 2));
  //   console.log(sessionStorage);
});