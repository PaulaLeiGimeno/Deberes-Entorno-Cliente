/*
 En  el  archivo  almuerzos.html  proporcionado, implementa un script para que cuando se cargue 
la aplicación, la tabla con las imágenes aparezca oculta al usuario. Al hacer el usuario doble click sobre el 
título 'Almuerzos', se mostrará la tabla. Si vuelve a hacer doble click, se volverá a ocultar. Y así sucesivamente. 
*/

const foodTable = document.getElementsByTagName('table')[0];
const title = document.getElementsByClassName('header')[0];
let isTableShowing = 'block'

function showAndHide() {
    if (isTableShowing === 'none') {
        isTableShowing = 'block';
        foodTable.style.display = isTableShowing;
    } else {
        isTableShowing = 'none';
        foodTable.style.display = isTableShowing;
    }
}

window.addEventListener('load', showAndHide)
title.addEventListener('dblclick', showAndHide)




/*
En  el  archivo  almuerzos.html  proporcionado, implementa  un  script  para  que  cuando  el  
usuario  pase  el cursor por  encima  de cualquiera  de las imágenes  de la tabla, ésta cambie su opacidad a la mitad. 
Si hace click sobre dicha imagen, saltará una pantalla modal con el nombre del bocadillo  y  un  enlace  que  
llevará  a  una  URL  con  información sobre  él  mismo.  
Los  nombres  de  los  bocadillos  son:  Chivito, Blanco  y  negro,  Brascada,  Almussafes,  Tortilla  de  patatas, 
Calamares en alioli.
*/

let images = document.getElementsByTagName('img');
let modal = document.getElementsByClassName('modal')[0];


function lowerOpacity() {
    this.style.opacity = '0.5';
}
function raiseOpacity() {
    this.style.opacity = '1'
}

function raiseModal(i) {
    modal.className = 'modal show-modal';
    let sandwichModal = document.getElementsByTagName('h1')[1]
    switch (i) {
        case 1:
            sandwichModal.innerHTML = '<h1> <a href="https://es.wikipedia.org/wiki/Chivito">Chivito</a></h1>';
            break;
        case 2:
            sandwichModal.innerHTML = '<h1> <a href="https://es.wikipedia.org/wiki/Blanco_y_negro_(bocadillo)">Blanco  y  negro</a></h1>';
            break;
        case 3:
            sandwichModal.innerHTML = '<h1> <a href="https://ca.wikipedia.org/wiki/Brascada">Brascada</a></h1>';
            break;
        case 4:
            sandwichModal.innerHTML = '<h1> <a href="https://es.wikipedia.org/wiki/Almusafes_(bocadillo)">Almussafes</a></h1>';
            break;
        case 5:
            sandwichModal.innerHTML = '<h1> <a href="https://es.wikipedia.org/wiki/Bocadillo_de_tortilla_de_patatas">Tortilla  de  patatas</a></h1>';
            break;
        case 6:
            sandwichModal.innerHTML = '<h1> <a href="https://es.wikipedia.org/wiki/Bocadillo_de_calamares">Calamares en alioli</a></h1>';
            break;
    }


}
function closeModal() {
    modal.className = 'modal';
}




for (let i = 1; i < images.length; i++) {
    images[i].addEventListener('mouseover', lowerOpacity)
    images[i].addEventListener('mouseout', raiseOpacity)
    images[i].addEventListener('click', () => raiseModal(i))
}
//El elemento .close-button debe asignarse fuera del bucle.
document.getElementsByClassName('close-button')[0].addEventListener('click', closeModal);