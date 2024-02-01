let sectionContainerContent= document.getElementById("section-container-content")





let promesa = fetch("http://localhost:3000/services")
.then(response =>{
    return response.json()
}).then(data =>{
  data.forEach(function (elemento) {
    console.log(elemento.name)
  // Crear el contenedor principal
  var containerBoxPostHappening = document.createElement('div');
  containerBoxPostHappening.classList.add('container-box-post-happening');


  // Crear el contenedor de flechas del carrusel
  var containerArrowsCarrousel = document.createElement('div');
  containerArrowsCarrousel.classList.add('container-arrows-carrousel');

  // Crear los botones de flechas
  var buttonPrev = document.createElement('button');
  buttonPrev.textContent = '<';

  var buttonNext = document.createElement('button');
  buttonNext.textContent = '>';

  // Agregar los botones al contenedor de flechas
  containerArrowsCarrousel.appendChild(buttonPrev);
  containerArrowsCarrousel.appendChild(buttonNext);

  // Crear el contenedor de ejemplo de publicación
  var boxPostHappeningExample = document.createElement('div');
  boxPostHappeningExample.classList.add('box-post-happening-example');

  // Crear la imagen
  var img = document.createElement('img');
  img.src = 'imgs/peñol';
  img.alt = '';

  // Crear el contenedor de información de la publicación
  var boxContainerPostInfo = document.createElement('div');
  boxContainerPostInfo.classList.add('box-container-post-info');

  // Crear la parte superior de la información de la publicación
  var topPostInfo = document.createElement('div');
  topPostInfo.classList.add('top-post-info');

  // Crear la parte izquierda de la información de la publicación
  var boxLeftPostInfo = document.createElement('div');
  boxLeftPostInfo.classList.add('box-left-post-info');

  var profileImg = document.createElement('img');
  profileImg.src = 'imgs/profile_example1';
  profileImg.alt = 'Profile photo of owner event';

  var boxOwnerEventInfo = document.createElement('div');
  boxOwnerEventInfo.classList.add('box-owner-event-info');

  var ownerUsername = document.createElement('h4');
  ownerUsername.textContent = '@DavidHalfamn19';

  var followersCount = document.createElement('p');
  followersCount.textContent = '2.341 followers';

  boxOwnerEventInfo.appendChild(ownerUsername);
  boxOwnerEventInfo.appendChild(followersCount);

  boxLeftPostInfo.appendChild(profileImg);
  boxLeftPostInfo.appendChild(boxOwnerEventInfo);

  // Crear la parte central de la información de la publicación
  var boxMidPostInfo = document.createElement('div');
  boxMidPostInfo.classList.add('box-mid-post-info');

  var slashIcon = document.createElement('i');
  slashIcon.classList.add('fa-solid', 'fa-slash');

  boxMidPostInfo.appendChild(slashIcon);

  // Crear la parte derecha de la información de la publicación
  var boxRightPostInfo = document.createElement('div');
  boxRightPostInfo.classList.add('box-right-post-info');

  var boxEventInfo = document.createElement('div');
  boxEventInfo.classList.add('box-event-info');

  var eventType = document.createElement('p');
  eventType.textContent = 'Event';

  var musicType = document.createElement('p');
  musicType.textContent = 'Music';

  var hashtags = document.createElement('span');
  hashtags.textContent = '#music, #street, #atnight';

  boxEventInfo.appendChild(eventType);
  boxEventInfo.appendChild(slashIcon.cloneNode(true));
  boxEventInfo.appendChild(musicType);
  boxEventInfo.appendChild(hashtags);

  boxRightPostInfo.appendChild(boxEventInfo);

  // Agregar las partes de la información de la publicación al contenedor principal
  topPostInfo.appendChild(boxLeftPostInfo);
  topPostInfo.appendChild(boxMidPostInfo);
  topPostInfo.appendChild(boxRightPostInfo);

  // Crear la descripción de la publicación
  var botPostDescription = document.createElement('div');
  botPostDescription.classList.add('bot-post-description');

  var descriptionText = document.createElement('p');
  descriptionText.textContent = elemento.description;

  botPostDescription.appendChild(descriptionText);

  // Crear las reacciones de la publicación
  var boxPostReactions = document.createElement('div');
  boxPostReactions.classList.add('box-post-reactions');

  var likesLink = document.createElement('a');
  likesLink.href = '#';
  likesLink.textContent = '123 likes';

  var videosLink = document.createElement('a');
  videosLink.href = '#';
  videosLink.textContent = '3 videos';

  var commentsLink = document.createElement('a');
  commentsLink.href = '#';
  commentsLink.textContent = '8 comments';

  boxPostReactions.appendChild(likesLink);
  boxPostReactions.appendChild(videosLink);
  boxPostReactions.appendChild(commentsLink);

  // Agregar todos los elementos al contenedor principal
  sectionContainerContent.appendChild(containerBoxPostHappening)

  boxPostHappeningExample.appendChild(img);
  boxPostHappeningExample.appendChild(boxContainerPostInfo);
  boxPostHappeningExample.appendChild(botPostDescription);
  boxPostHappeningExample.appendChild(boxPostReactions);

  containerBoxPostHappening.appendChild(containerArrowsCarrousel);
  containerBoxPostHappening.appendChild(boxPostHappeningExample);




    /////////////////////////////////77
      
     
        
        
    });
})
