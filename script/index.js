let sectionContainerContent= document.getElementById("section-container-content");
let boxContainerCarrouselEvents=document.getElementById("box-container-carrousel-events");
let containerBoxPostHappening =document.getElementById("container-box-post-happening")//contenedor para lo que está pasando ahora 
let boxContainerFree= document.getElementById("box-container-free");

let systemDay=1;
let systemMounth=2;
let systemYear=2024;

let systemHour=1400;





function sscrollLeft() {
    console.log("algo");
    const container = document.querySelector('.container-box-post-happening');
    container.scrollBy({ left: -400, behavior: 'smooth' });
}

function scrollRight() {
    console.log("algo 2");

    const container = document.querySelector('.container-box-post-happening');
    container.scrollBy({ left: 100, behavior: 'smooth' });
}

 

let buttonLeft = document.createElement("button");
    buttonLeft.classList.add("buttonPass");
    buttonLeft.setAttribute("type","button");
    buttonLeft.setAttribute("id","buttonLeft");
    buttonLeft.setAttribute("onclick","sscrollLeft()");
    buttonLeft.innerText="<"
    containerBoxPostHappening.appendChild(buttonLeft);

 


let promesa = fetch("http://localhost:3000/services")
.then(response =>{
    return response.json()
}).then(data =>{
    
  data.forEach(function (elemento) {
    console.log(elemento.name)

    let date= elemento.day;//día exacto del evento
    let newDate= date.split("/");//arreglo separado por /
    let day= parseInt(newDate[0]);
    let mounth=parseInt(newDate[1]);
    let year=parseInt(newDate[2]);

    let hour= elemento.hour;//hora del evento 


    if (day==systemDay && mounth==systemMounth && year==systemYear){
      if (hour>=systemHour){
         //its happenig RightNow////
        // Crear el contenedor de ejemplo de publicación
        let boxPostHappeningExample = document.createElement('div');
        boxPostHappeningExample.classList.add('box-post-happening-example');

        // Crear la imagen
        let img = document.createElement('img');
        img.src = elemento.img;
        img.alt = '';

        // Crear el contenedor de información de la publicación
        let boxContainerPostInfo = document.createElement('div');
        boxContainerPostInfo.classList.add('box-container-post-info');

        // Crear la parte superior de la información de la publicación
        let topPostInfo = document.createElement('div');
        topPostInfo.classList.add('top-post-info');

        // Crear la parte izquierda de la información de la publicación
        // traer la base de datos del usuario  con IDcreator en la base de datos del evento 
        let promesaUsuario= fetch(`http://localhost:3000/users/${elemento.creatorID}`)
          .then(response =>{
            return response.json()
          })
          .then(dataUsuario =>{
            let boxLeftPostInfo = document.createElement('div');
            boxLeftPostInfo.classList.add('box-left-post-info');
    
            let profileImg = document.createElement('img');
            profileImg.src = dataUsuario.profile_photo;
            profileImg.alt = 'Profile photo of owner event';
    
            let boxOwnerEventInfo = document.createElement('div');
            boxOwnerEventInfo.classList.add('box-owner-event-info');
    
            let ownerUsername = document.createElement('h4');
            ownerUsername.textContent = `@${dataUsuario.name}`;
    
            let followersCount = document.createElement('p');
            followersCount.textContent = `${dataUsuario.follower_counter} followers`;
    
            boxOwnerEventInfo.appendChild(ownerUsername);
            boxOwnerEventInfo.appendChild(followersCount);
    
            boxLeftPostInfo.appendChild(profileImg);
            boxLeftPostInfo.appendChild(boxOwnerEventInfo);
            // Agregar las partes de la información de la publicación al contenedor principal
            topPostInfo.appendChild(boxLeftPostInfo);
            topPostInfo.appendChild(boxMidPostInfo);
            topPostInfo.appendChild(boxRightPostInfo);
            boxPostHappeningExample.appendChild(boxLeftPostInfo)

          })
           
           
      
       

        // Crear la parte central de la información de la publicación
        let boxMidPostInfo = document.createElement('div');
        boxMidPostInfo.classList.add('box-mid-post-info');

        let slashIcon = document.createElement('i');
        slashIcon.classList.add('fa-solid', 'fa-slash');

        boxMidPostInfo.appendChild(slashIcon);

        // Crear la parte derecha de la información de la publicación
        let boxRightPostInfo = document.createElement('div');
        boxRightPostInfo.classList.add('box-right-post-info');

        let boxEventInfo = document.createElement('div');
        boxEventInfo.classList.add('box-event-info');

        let eventType = document.createElement('p');
        eventType.textContent = 'Event';

        let category = document.createElement('p');
        category.textContent = elemento.category;

        let hashtags = document.createElement('span');
        hashtags.textContent = '#music, #street, #atnight';

        boxEventInfo.appendChild(eventType);
        boxEventInfo.appendChild(slashIcon.cloneNode(true));
        boxEventInfo.appendChild(category);
        boxEventInfo.appendChild(hashtags);

        boxRightPostInfo.appendChild(boxEventInfo);

       

        // Crear la descripción de la publicación
        let botPostDescription = document.createElement('div');
        botPostDescription.classList.add('bot-post-description');

        let descriptionText = document.createElement('p');
        descriptionText.textContent = elemento.description;

        botPostDescription.appendChild(descriptionText);

        // Crear las reacciones de la publicación
        let boxPostReactions = document.createElement('div');
        boxPostReactions.classList.add('box-post-reactions');

        let likesLink = document.createElement('a');
        likesLink.href = '#';
        likesLink.textContent = ` ${elemento.likes} likes`;//likes



        let commentsLink = document.createElement('a');
        commentsLink.href = '#';
        commentsLink.textContent = ` ${elemento.comments} comments`;//comments

        boxPostReactions.appendChild(likesLink);
        boxPostReactions.appendChild(commentsLink);

        // Agregar todos los elementos al contenedor principal
        

        boxPostHappeningExample.appendChild(img);
        boxPostHappeningExample.appendChild(boxContainerPostInfo);
        boxPostHappeningExample.appendChild(botPostDescription);
        boxPostHappeningExample.appendChild(boxPostReactions);

      // containerBoxPostHappening.appendChild(containerArrowsCarrousel);
        containerBoxPostHappening.appendChild(boxPostHappeningExample);

      }

    }else if (year>=systemYear){
      if(mounth>=systemMounth){
        if (day>=systemDay){
          if (hour>=systemHour) {
            //almost happening////
                // Crear el elemento div principal
            const boxCarrouselEvent = document.createElement('div');
            boxCarrouselEvent.classList.add('box-carrousel-event');

            // Crear la etiqueta img y configurar atributos src y alt
            const img = document.createElement('img');
            img.src = elemento.img;
            img.alt = 'img-event';

            // Crear el div para la descripción del evento
            const boxDescriptionEventCarrousel = document.createElement('div');
            boxDescriptionEventCarrousel.classList.add('box-description-event-carrousel');

            // Crear el título h4 con spans y texto
            const h4 = document.createElement('h4');
            const span1 = document.createElement('span');
            span1.innerText = elemento.location;
            const span2 = document.createElement('span');
            span2.innerText = elemento.price;
            h4.appendChild(span1);
            h4.appendChild(document.createTextNode(' | Entrance to '));
            h4.appendChild(span2);

            // Agregar el título al div de descripción del evento
            boxDescriptionEventCarrousel.appendChild(h4);

            // Crear el div para la parte central de la descripción
            const boxMidDescription = document.createElement('div');
            boxMidDescription.classList.add('box-mid-description');

            // Crear el div para la distancia al evento
            const distanceBox = document.createElement('div');
            distanceBox.classList.add('disantance-box');

            // Crear el icono de ubicación
            const locationDotIcon = document.createElement('i');
            locationDotIcon.classList.add('fa-solid', 'fa-location-dot');

            // Crear el párrafo para la distancia al evento
            const distanceFromEvent = document.createElement('p');
            distanceFromEvent.classList.add('distance-from-event');
            distanceFromEvent.innerText = `${elemento.location} from you!`;

            // Agregar el icono y el párrafo al div de distancia
            distanceBox.appendChild(locationDotIcon);
            distanceBox.appendChild(distanceFromEvent);

            // Crear el div para la información del evento
            const infoEvent = document.createElement('div');
            infoEvent.classList.add('info-event');

            // Crear el párrafo para la fecha del evento
            const dateEvent = document.createElement('p');
            dateEvent.classList.add('date-event');
            dateEvent.innerText = elemento.day;

            // Crear el párrafo para la hora del evento
            const hourEvent = document.createElement('p');
            hourEvent.classList.add('hour-event');
            hourEvent.innerText = '7:00 a.m to 6:00 pm.';

            // Agregar los párrafos de fecha y hora al div de información del evento
            infoEvent.appendChild(dateEvent);
            infoEvent.appendChild(hourEvent);

            // Crear el div para el botón "parchar"
            const boxBtnParch = document.createElement('div');
            boxBtnParch.classList.add('box-btn-parch');

            // Crear el botón "parchar"
            const button = document.createElement('button');
            button.innerText = 'parchar';

            // Agregar el botón al div de botones
            boxBtnParch.appendChild(button);

            // Agregar todos los elementos al div principal "box-carrousel-event"
            boxMidDescription.appendChild(distanceBox);
            boxMidDescription.appendChild(infoEvent);
            boxMidDescription.appendChild(boxBtnParch);

            boxCarrouselEvent.appendChild(img);
            boxCarrouselEvent.appendChild(boxDescriptionEventCarrousel);
            boxCarrouselEvent.appendChild(boxMidDescription);

            boxContainerCarrouselEvents.appendChild(boxCarrouselEvent);


            
          }
        }
      }
    }


 
  
         
        
        
    });
    
 let buttonRight = document.createElement("button");
 buttonRight.classList.add("buttonPass");
 buttonRight.setAttribute("type","button");
 buttonRight.setAttribute("id","buttonRight");
 buttonRight.setAttribute("onclick","scrollRight()")
 buttonRight.innerText=">"
 containerBoxPostHappening.appendChild(buttonRight);
})
//////////////////////FREE EVENTS /////////////7777//////

let promesaFree = fetch("http://localhost:3000/services")
.then(response =>{
  return response.json()
})
.then(data =>{
  data.forEach(function (freeEvent){
    console.log(freeEvent)

    if (freeEvent.price=="free") {
      // crear el elemento div para boxes-free-events CONTENEDOR QUE DA ESTILOS EN EL CSS
      let boxesFreeEventsDiv = document.createElement("div");
      boxesFreeEventsDiv.className = "boxes-free-events";

      // Crear el elemento div para cada elemnto 
      let topBoxesFreeDiv = document.createElement("div");
      topBoxesFreeDiv.className = "top-boxes-free";

      // Crear el contenido de la información de la izquierda IMAGENES E INSIGNIAS
      let topBoxesLeftDiv = document.createElement("div");
      topBoxesLeftDiv.className = "top-boxes-left";
      let imgLeft = document.createElement("img");
      imgLeft.src = freeEvent.img;
      imgLeft.alt = "event image";
      topBoxesLeftDiv.appendChild(imgLeft);

      let boxInsignesEventDiv = document.createElement("div");
      boxInsignesEventDiv.className = "box-insignes-event";

      let insignia1 = createInsignia("./assets/img/insignia1.png", "1attend to 6 events in the same month");
      let insignia2 = createInsignia("./assets/img/insignia2.png", "2 attend to 6 events in the same month");
      let insignia3 = createInsignia("./assets/img/insignia3.png", "3ttend to 6 events in the same month");
      let insignia4 = createInsignia("./assets/img/insignia4.png", "4ttend to 6 events in the same month");
      let insignia5 = createInsignia("./assets/img/insignia5.png", "5ttend to 6 events in the same month");

      boxInsignesEventDiv.appendChild(insignia1);
      boxInsignesEventDiv.appendChild(insignia2);
      boxInsignesEventDiv.appendChild(insignia3);
      boxInsignesEventDiv.appendChild(insignia4);
      boxInsignesEventDiv.appendChild(insignia5);
      topBoxesLeftDiv.appendChild(boxInsignesEventDiv);
      topBoxesFreeDiv.appendChild(topBoxesLeftDiv);

      // Crear el elemento div para la sección top-boxes-right
      let topBoxesRightDiv = document.createElement("div");
      topBoxesRightDiv.className = "top-boxes-right";

      // Crear el elemento div con la clase box-logo-top-boxes y sus contenidos
      let boxLogoTopBoxesDiv = document.createElement("div");
      boxLogoTopBoxesDiv.className = "box-logo-top-boxes";

      let logoImg = document.createElement("img");//LOGO DE LA EMPRESA
      logoImg.src = "assets/img/confama-logo.png";
      logoImg.alt = "logo of the event creator";
      boxLogoTopBoxesDiv.appendChild(logoImg);

      let confamaLink = document.createElement("a");
      confamaLink.href = "#UrlCuentaCreadoraEvento";//URL CUENTA CREADOR DEL EVENTO 
      confamaLink.innerText = "@Confama"; //REEMPLAZAR POR ID USUARIO ****************************
      boxLogoTopBoxesDiv.appendChild(confamaLink);

      topBoxesRightDiv.appendChild(boxLogoTopBoxesDiv);

      // Crear el elemento div con la clase box-places-top-boxes y sus contenidos
      let boxPlacesTopBoxesDiv = document.createElement("div");
      boxPlacesTopBoxesDiv.className = "box-places-top-boxes";

      let h6Places = document.createElement("h6");
      h6Places.innerText = "places";
      boxPlacesTopBoxesDiv.appendChild(h6Places);

      let pPlaces = document.createElement("p");
      pPlaces.innerText = "45 left to 700";
      boxPlacesTopBoxesDiv.appendChild(pPlaces);

      topBoxesRightDiv.appendChild(boxPlacesTopBoxesDiv);

      // Crear el elemento div con la clase box-repute-top-boxes y sus contenidos
      let boxReputeTopBoxesDiv = document.createElement("div");
      boxReputeTopBoxesDiv.className = "box-repute-top-boxes";

      let h6Reputation = document.createElement("h6");
      h6Reputation.innerText = "reputation";
      boxReputeTopBoxesDiv.appendChild(h6Reputation);

      let pReputation = document.createElement("p");
      pReputation.innerText = "9.6/10";
      boxReputeTopBoxesDiv.appendChild(pReputation);

      topBoxesRightDiv.appendChild(boxReputeTopBoxesDiv);

      // Crear el elemento div con la clase box-price-top-boxes y sus contenidos
      let boxPriceTopBoxesDiv = document.createElement("div");
      boxPriceTopBoxesDiv.className = "box-price-top-boxes";

      let h6Price = document.createElement("h6");
      h6Price.innerText = "price";
      boxPriceTopBoxesDiv.appendChild(h6Price);

      let pPrice = document.createElement("p");
      pPrice.innerText = freeEvent.price;
      boxPriceTopBoxesDiv.appendChild(pPrice);

      topBoxesRightDiv.appendChild(boxPriceTopBoxesDiv);

      // Agregar la sección top-boxes-right al cuerpo del documento
      document.body.appendChild(topBoxesRightDiv);

  //////////////////////////////////////////////////////
      // Crear el elemento div para la sección bot-boxes-free
      let botBoxesFreeDiv = document.createElement("div");
      botBoxesFreeDiv.className = "bot-boxes-free";

     
      let h4 = document.createElement("h4");
      h4.innerText = "Entrance to ";
      let spanPlaceEvent = document.createElement("span");
      spanPlaceEvent.className = "place-event";
      spanPlaceEvent.innerText = freeEvent.location;
      h4.appendChild(spanPlaceEvent);
      botBoxesFreeDiv.appendChild(h4);

      // Crear el elemento div con la clase box-location-boxes-free 
      let boxLocationBoxesFreeDiv = document.createElement("div");
      boxLocationBoxesFreeDiv.className = "box-location-boxes-free";

      let iLocationDot = document.createElement("i");
      iLocationDot.className = "fa-solid fa-location-dot";
      boxLocationBoxesFreeDiv.appendChild(iLocationDot);

      let p1 = document.createElement("p");
      p1.innerText = "1h 25 from you";
      boxLocationBoxesFreeDiv.appendChild(p1);

      let p2 = document.createElement("p");
      p2.className = "date-event";
      p2.innerText = freeEvent.day;//día
      boxLocationBoxesFreeDiv.appendChild(p2);

      let p3 = document.createElement("p");
      p3.innerText = freeEvent.hour;//hora
      boxLocationBoxesFreeDiv.appendChild(p3);

      botBoxesFreeDiv.appendChild(boxLocationBoxesFreeDiv);

      // Crear el elemento p con la clase description-event-more-options y su contenido
      let pDescriptionEventMoreOptions = document.createElement("p");
      pDescriptionEventMoreOptions.className = "description-event-more-options";
      pDescriptionEventMoreOptions.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat error eum dolores aperiam architecto, commodi, neque earum animi consequatur est odit temporibus, optio quo omnis eligendi";
      botBoxesFreeDiv.appendChild(pDescriptionEventMoreOptions);

      // Crear el elemento div con la clase box-description-event-more y sus contenidos
      let boxDescriptionEventMoreDiv = document.createElement("div");
      boxDescriptionEventMoreDiv.className = "box-description-event-more";

      let bInclude = document.createElement("b");
      bInclude.innerText = "Include:";
      boxDescriptionEventMoreDiv.appendChild(bInclude);

      let spanInclude = document.createElement("span");
      spanInclude.innerText = "Entrance";
      boxDescriptionEventMoreDiv.appendChild(spanInclude);

      let boxContainerActionsEventDiv = document.createElement("div");
      boxContainerActionsEventDiv.className = "box-container-actions-event";

      let iBookmark = document.createElement("i");
      iBookmark.className = "fa-regular fa-bookmark";
      boxContainerActionsEventDiv.appendChild(iBookmark);

      let iShare = document.createElement("i");
      iShare.className = "fa-solid fa-share";
      boxContainerActionsEventDiv.appendChild(iShare);

      boxDescriptionEventMoreDiv.appendChild(boxContainerActionsEventDiv);

      let boxBtnParchMoreRecemendationsDiv = document.createElement("div");
      boxBtnParchMoreRecemendationsDiv.className = "box-btn-parch-more-recemendations";

      let buttonParch = document.createElement("button");
      buttonParch.className = "parch-btn";
      buttonParch.innerText = "parch";
      boxBtnParchMoreRecemendationsDiv.appendChild(buttonParch);

      let spanParchBtnBackground = document.createElement("span");
      spanParchBtnBackground.className = "parch-btn-background";
      boxBtnParchMoreRecemendationsDiv.appendChild(spanParchBtnBackground);

      boxDescriptionEventMoreDiv.appendChild(boxBtnParchMoreRecemendationsDiv);

      botBoxesFreeDiv.appendChild(boxDescriptionEventMoreDiv);

    



  ////////////////////////////////////////////////////

      boxContainerFree.appendChild(boxesFreeEventsDiv)
      boxesFreeEventsDiv.appendChild(topBoxesFreeDiv);
      topBoxesFreeDiv.appendChild(topBoxesRightDiv);
      boxesFreeEventsDiv.appendChild(botBoxesFreeDiv);

      
    }
    



  })
})






//////////////////



// Función para crear las insignias
function createInsignia(imgSrc, description) {
    let insignia = document.createElement("a");
    insignia.className = "boxes-insigne";
    
    let img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "insigne event";
    insignia.appendChild(img);
    
    let descriptionDiv = document.createElement("div");
    descriptionDiv.className = "boxes-insigne-description";
    
    let p = document.createElement("p");
    p.innerText = description;
    descriptionDiv.appendChild(p);
    
    insignia.appendChild(descriptionDiv);
    
    return insignia;
}
