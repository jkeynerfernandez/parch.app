let sectionContainerContent= document.getElementById("section-container-content");
let boxContainerCarrouselEvents=document.getElementById("box-container-carrousel-events");

let systemDay=1;
let systemMounth=2;
let systemYear=2024;

let systemHour=1400;



 // Crear el contenedor principal
 let containerBoxPostHappening = document.createElement('div');
 containerBoxPostHappening.classList.add('container-box-post-happening');
 sectionContainerContent.appendChild(containerBoxPostHappening);

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
          if (hour>systemHour) {
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
            span1.textContent = elemento.location;
            const span2 = document.createElement('span');
            span2.textContent = elemento.price;
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
            distanceFromEvent.textContent = `${elemento.location} from you!`;

            // Agregar el icono y el párrafo al div de distancia
            distanceBox.appendChild(locationDotIcon);
            distanceBox.appendChild(distanceFromEvent);

            // Crear el div para la información del evento
            const infoEvent = document.createElement('div');
            infoEvent.classList.add('info-event');

            // Crear el párrafo para la fecha del evento
            const dateEvent = document.createElement('p');
            dateEvent.classList.add('date-event');
            dateEvent.textContent = elemento.day;

            // Crear el párrafo para la hora del evento
            const hourEvent = document.createElement('p');
            hourEvent.classList.add('hour-event');
            hourEvent.textContent = '7:00 a.m to 6:00 pm.';

            // Agregar los párrafos de fecha y hora al div de información del evento
            infoEvent.appendChild(dateEvent);
            infoEvent.appendChild(hourEvent);

            // Crear el div para el botón "parchar"
            const boxBtnParch = document.createElement('div');
            boxBtnParch.classList.add('box-btn-parch');

            // Crear el botón "parchar"
            const button = document.createElement('button');
            button.textContent = 'parchar';

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
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////almost happening///////////////////////////////////
//////////////////////////////////////////////////////////////////////


