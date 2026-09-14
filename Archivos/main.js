/*
En el archivo index.html proporcionado, implementa un script para introducir un logo de tu elección en 
la imagen -etiqueta img, con el src vacío-.
*/

let image = document.getElementsByTagName('img')[0];



image.src = 'src/postres/Tiramisu.jpg'



/*
En el archivo index.html proporcionado, implementa un script para introducir una imagen de fondo de 
tu elección al div cuya clase es header (<div class=”header”>). 
*/

let headerDiv = document.getElementsByClassName('header')[0];
headerDiv.style.backgroundImage = "url('src/postres/Tiramisu.jpg')";

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

let nutrition = getElementsByClassName('nutrition')[0];
function hideNutrition() {
    this.innerHTML = `<p>hola</p>`;
}
function showNutrition() {
    this.innerHTML = `<li>
                            <span class="category">
                                <a href="almuerzos.html">ALMUERZOS</a>
                            </span>
                            </li>
                            <li>
                            <span class="category">
                                <a href="postres.html">POSTRES</a>
                            </span>
                            </li>`
}

image = document.getElementsByTagName('img')[0];

nutrition.addEventListener('load', hideNutrition);
image.addEventListener('click', showNutrition)
/*
En el archivo index.html proporcionado, implementa un script para que cuando el usuario haga click se 
realicen los siguientes cambios sobre los párrafos: 

-Primer párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 20px. 
-Segundo  párrafo:  la  fuente  –tipo  de  letra-  cambia  de color, pasa a negrita y el tamaño cambia a 30px. 
-Tercer párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 40px. 
-Cuarto párrafo: la fuente –tipo de letra- cambia de color, pasa a negrita y el tamaño cambia a 50px.
*/


function changeSize(pNumber) {

    switch (pNumber) {
        case 0:
            return '20px'
        case 1:
            return '30px'
        case 2:
            return '40px'
        case 3:
            return '50px'
    }
    console.log('cambiar tamaño funciona')
}
function changeStyle(pNumber) {
    let paragraph = document.getElementsByTagName('p')[pNumber];

    paragraph.style.color = '#05A8AA'
    paragraph.style.fontWeight = 'bold'
    paragraph.style.fontSize = changeSize(pNumber)
    console.log('cambiar estilo funciona')

}

document.getElementsByTagName('p')[0].addEventListener('click', changeStyle(0))
document.getElementsByTagName('p')[1].addEventListener('click', changeStyle(1))
document.getElementsByTagName('p')[2].addEventListener('click', changeStyle(2))
document.getElementsByTagName('p')[3].addEventListener('click', changeStyle(3))



/*
En  el  archivo  almuerzos.html  proporcionado, implementa un script para que cuando se cargue la aplicación, 
la tabla con las imágenes aparezca oculta al usuario. Al hacer el usuario doble click sobre el título 'Almuerzos', 
se mostrará la tabla. Si vuelve a hacer doble click, se volverá a ocultar. Y así sucesivamente.
*/

let isTableShowing = false;


/*
En  el  archivo  almuerzos.html  proporcionado, implementa  un  script  para  que  cuando  el  usuario  
pase  el cursor por  encima  de cualquiera  de las imágenes  de la tabla, ésta cambie su opacidad a la mitad. 
Si hace click sobre dicha imagen, saltará una pantalla modal con el nombre del bocadillo  y  un  enlace 
que  llevará  a  una  URL  con  información sobre  él  mismo.  Los  nombres  de  los  bocadillos  son:  Chivito, 
Blanco  y  negro,  Brascada,  Almussafes,  Tortilla  de  patatas, Calamares en alioli.
*/