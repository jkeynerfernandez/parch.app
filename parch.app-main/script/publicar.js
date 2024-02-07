import { ServicesDataModel } from "./data_base_model.js";
const ServiceModel = new ServicesDataModel
console.log("se conevtó");


let name = document.getElementById("title-publicar-input");//titulo del eventosnyo nuevo
let description = document.getElementById("description-text-inpyt");

let categoryEvent  = document.getElementById("category-event");
let place = document.getElementById("place-publicar"); //lugar del evento
let dateAndHour = document.getElementById("time-post-input"); //fecha y hora 


///costo
let numberCost = document.getElementById("vol");//costo
let coin       = document.getElementById("select-coin-publicar");//tipoDeMoneda
let free       = document.getElementById("free-checkbox-input");//si no tiene costo

//button crear
let buttonCreate= document.getElementById("btn-post-publicar");

buttonCreate.addEventListener("click",function crearEvento(){
    let fechayhora=dateAndHour.value.split("-")//año,mes,dia
    let year=fechayhora[0];
    let mounth=fechayhora[1];
    let dayandhour=fechayhora[2].split("T"); //arreglo que contiene día y hora
    let day=dayandhour[0];
    let hourWhitDoublePoint=dayandhour[1].split(":");
    let hour= hourWhitDoublePoint[0];
    let minut=hourWhitDoublePoint[1];

    let userRequest={
        name:name.value,
        description:description.value,
        category:categoryEvent.value,
        location:place.value,
        day:`${day}/${mounth}/${year}`,
        hour:`${hour}${minut}`,
        price:numberCost.value

    }
    console.log(dateAndHour.value);
    console.log("algo");
    ServiceModel.addNewEvent("53cc",userRequest);
});