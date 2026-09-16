/*
En el archivo postres.html proporcionado, implementa un script para introducir un carrusel con las 
imágenes  de  la  carpeta  src,  de  modo  que  el  usuario  pueda recorrer las imágenes de la carpeta 
pulsando sobre 'Anterior' y ‘Siguiente’. 
*/
let cakeImgs = document.getElementsByTagName('img')[1];
let prev = document.getElementById('anterior');
let next = document.getElementById('siguiente');

let index = 0;

function showCake() {
    switch (index) {
        case 0:
            cakeImgs.src = 'src/postres/Flan con huevo.jpg'
            break;
        case 1:
            cakeImgs.src = 'src/postres/Flan con nata.jpg'
            break;
        case 2:
            cakeImgs.src = 'src/postres/Tarta de manzana.jpg'
            break;
        case 3:
            cakeImgs.src = 'src/postres/Tarta de queso.jpg'
            break;
        case 4:
            cakeImgs.src = 'src/postres/Tarta de zanahoria.jpg'
            break;
        case 5:
            cakeImgs.src = 'src/postres/Tiramisu.jpg'
            break;

    }

}
function goBack() {
    if (index == 0) {
        index = 5

    } else {
        index--
    }
    showCake();
}
function goForth() {
    if (index == 5) {
        index = 0

    } else {
        index++
    }
    showCake();
}
window.addEventListener('load', showCake);
prev.addEventListener('click', goBack);
next.addEventListener('click', goForth);




/*
En el archivo postres.html proporcionado, implementa  un  script  para  que  cuando  el  usuario  pulse  sobre 
la imagen y mientras mantenga pulsado el cursor, se muestre en  el  título  de  segundo  nivel  (h2)  
el  nombre  de  cada  postre  - utilizando para ello mousedown/mouseup-. 
*/
const title = document.getElementsByTagName('h2')[0];
let cakeName = "";

function displayCakeName() {
    switch (index) {
        case 0:
            cakeName = 'Flan con huevo'
            break;
        case 1:
            cakeName = 'Flan con nata'
            break;
        case 2:
            cakeName = 'Tarta de manzana'
            break;
        case 3:
            cakeName = 'Tarta de queso'
            break;
        case 4:
            cakeName = 'Tarta de zanahoria'
            break;
        case 5:
            cakeName = 'Tiramisu'
            break;
    }
    title.textContent = cakeName;
}
function hideCakeName() {
    title.textContent = 'Tartas'
}

cakeImgs.addEventListener('mousedown', displayCakeName)
cakeImgs.addEventListener('mouseup', hideCakeName)



/*
En  el  archivo  postres.html  proporcionado, implementa  un  script  para  que  cuando  el  usuario  deslice  el 
cursor  del  ratón  en  las  siguientes  zonas  de  la  pantalla,  se cambie  el  color  del  título  de  
primer  nivel  a  los  siguientes valores: 
 
- Horizontal: entre 0 y 500 píxels. Vertical: entre 0 y 500 píxels. Color: amarillo. 
- Horizontal:  entre  0  y  500  píxels.  Vertical:  entre  500  y  1000 píxels. Color: rojo. 
- Horizontal:  entre  500  y  1000  píxels.  Vertical:  entre  0  y  500 píxels. Color: azul. 
- Horizontal: entre 500 y 500 píxels. Vertical: entre 500 y 1000 píxels. Color: verde. 
- Resto: color blanco. 
*/
let title2 = document.getElementsByTagName('h1')[0];

function changeTitle(e) {
    if (e.clientX < 500 && e.clientY < 500) {
        title2.style.color = 'yellow';
    }
      if (e.clientX < 500 && e.clientY > 500) {
        title2.style.color = 'red';
    }
     if (e.clientX > 500 && e.clientY < 500) {
        title2.style.color = 'blue';
    }
      if (e.clientX == 500 && e.clientY > 500) {
        title2.style.color = 'green';
    }
}

document.addEventListener('mousemove', (e) => changeTitle(e))



/*
En  el  archivo  postres.html  proporcionado, implementa un script para que cuando el usuario pulse la tecla 
A,  B  o  C,  cambien  los  colores  del  fondo  del  título  de  primer nivel. 
Si se pulsa cualquier otra tecla, volverá al color original.
*/



function changeBackgroundColor(e) {
    console.log(e)
    if (e.code == 'KeyA' || e.code == 'KeyB' || e.code == 'KeyC') {
        title2.style.backgroundColor = 'black'
    } else {
        title2.style.backgroundColor = '#05A8AA'
    }


}

window.addEventListener('keydown', (e) => changeBackgroundColor(e))