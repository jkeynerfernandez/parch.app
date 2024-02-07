let btnExplore = document.getElementsByClassName('box-hamburger-menu');

function desplegarMenu (){
    console.log("asasd");
    let boxLeftMenu = document.getElementById('box-left-side')
    boxLeftMenu.style.display = 'flex';

    let containerBoxesEvent = document.getElementById('container-boxes-event')
    containerBoxesEvent.style.width = '60%';

    document.getElementsByClassName('box-carrousel-event')
    containerBoxesEvent.style.width = '90%';

}

function esconderMenu (){
    console.log("asasd");
    let boxLeftMenu = document.getElementById('box-left-side')
    boxLeftMenu.style.display = 'none';

    let containerBoxesEvent = document.getElementById('container-boxes-event')
    containerBoxesEvent.style.width = '100%';

    document.getElementsByClassName('box-carrousel-event')
    containerBoxesEvent.style.width = '40%';

}