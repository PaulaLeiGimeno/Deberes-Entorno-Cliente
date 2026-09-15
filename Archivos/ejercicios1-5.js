/*
En el archivo index.html proporcionado, implementa un script para introducir un logo de tu elección en 
la imagen -etiqueta img, con el src vacío-.
*/

let image = document.getElementsByTagName('img')[0];



image.src = 'https://i.pinimg.com/736x/a8/d1/9b/a8d19bfb6d5172adc87d65908c69137a.jpg'



/*
En el archivo index.html proporcionado, implementa un script para introducir una imagen de fondo de 
tu elección al div cuya clase es header (<div class=”header”>). 
*/

let headerDiv = document.getElementsByClassName('header')[0];
headerDiv.style.backgroundImage = "url('https://casapepemataro.com/wp-content/uploads/slider/cache/1d77a850b220f57ac4c8317d000b01a8/22-pepe.jpg')";

/*
En el archivo index.html proporcionado, implementa un script para que cuando el usuario pase el 
cursor del ratón sobre el título de primer nivel (h1), el contenido del título (Casa Pepe) se cambie 
por otro de tú elección (Ejemplo: Tu bar para almorzar). 
*/
let title = document.getElementsByTagName('h1')[0];
function changeTitle() {
    this.textContent = 'Tu bar para almorzar';
}
title.addEventListener('mouseover', changeTitle)


/*
En el archivo index.html proporcionado, implementa un script para que cuando se cargue la aplicación 
se oculten los contenidos incluidos bajo la clase "nutrition”. A continuación, implementa la lógica necesaria 
para que cuando el  usuario  haga  click  sobre  el  logo  que  has  introducido  en  el 
Ejercicio 1, se muestren los  elementos incluidos bajo la  clase "nutrition”.
*/

let nutrition = document.getElementsByClassName('nutrition')[0];
function hideNutrition() {
    //esto elimina el contenido, chatgpt dice que mejor es nutrition.style.display = 'none' y nutrition.style.display = 'block';
    // document.addEventListener('DOMContentLoaded', function)
    //no es this porque que se quiere cambiar nutrition y no window
    nutrition.innerHTML = '';
    console.log('hide nutrition')
}

function showNutrition() {
    //no es this porque que se quiere cambiar nutrition y no image
    nutrition.innerHTML = `
        <li>
            <span class="category">
                <a href="almuerzos.html">ALMUERZOS</a>
            </span>
        </li>
        <li>
            <span class="category">
                <a href="postres.html">POSTRES</a>
            </span>
        </li>
    `;
    console.log('show nutrition')
}

image = document.getElementsByTagName('img')[0];

window.addEventListener('load', hideNutrition);
image.addEventListener('click', showNutrition);






/*
En el archivo index.html proporcionado, implementa un script para que cuando el usuario haga click se 
realicen los siguientes cambios sobre los párrafos: 

-Primer párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 20px. 
-Segundo  párrafo:  la  fuente  –tipo  de  letra-  cambia  de color, pasa a negrita y el tamaño cambia a 30px. 
-Tercer párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 40px. 
-Cuarto párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 50px.
*/



function changeStyle(pNumber) {
    let newSize = '16px';
    switch (pNumber) {
        case 0:
            newSize = '20px'
            break;
        case 1:
            newSize = '30px'
            break;
        case 2:
            newSize = '40px'
            break;
        case 3:
            newSize = '50px'
            break;
    }

    let paragraph = document.getElementsByTagName('p')[pNumber];
    console.log('change style of paragraph ' + (pNumber+1))

    paragraph.style.color = '#05A8AA';
    paragraph.style.fontWeight = 'bold';
    paragraph.style.fontSize = newSize;

}

document.getElementsByTagName('p')[0].addEventListener('click', () => changeStyle(0));
document.getElementsByTagName('p')[1].addEventListener('click', () => changeStyle(1));
document.getElementsByTagName('p')[2].addEventListener('click', () => changeStyle(2));
document.getElementsByTagName('p')[3].addEventListener('click', () => changeStyle(3));


