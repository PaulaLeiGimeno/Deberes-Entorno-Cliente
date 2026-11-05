/*
Cinco segundos después de  cargarse la página  se realicen los siguientes cambios: 
-Las tres imágenes pasarán a tener un alto de 0px.  
-El elemento con la class photo-container pasará a 600px. 
-El  color  de  los  textos  ubicados  sobre  las  imágenes  pasará  a ser blanco. 
-El color del título de primer nivel (h1) pasará a ser negro. 
 
Cada 5000 milisegundos, los cambios anteriores oscilarán con los siguientes, creando un bucle de repetición: 
 
-Las  tres  imágenes  pasarán  a  tener  los  siguientes  altos:  la primera 200px, la segunda 400px y la tercera 600px.  
-Las tres imágenes pasarán a tener los siguientes line-height: la primera 150px, la segunda 300px y la tercera 400px.  
-El elemento con la class photo-container pasará a 200px. 
-El  color  de  los  textos  ubicados  sobre  las  imágenes  pasará  a ser negro. 
-El color del título de primer nivel (h1) pasará a ser blanco. 
 
El  color  del  fondo  de  pantalla  oscilará  entre  blanco  y  negro  y se  aplicará  un  valor  a  la  propiedad  CSS  
transition  de  2s  para todos los elementos animados
*/


let imgDivs = Array.from(document.getElementsByClassName('photo'));
let photoContainers = Array.from(document.getElementsByClassName('photo-container'));
let h1 = document.getElementsByTagName('h1')[0]
imgDivs.map((img, i) => {
    img.style.backgroundImage = `url(./images/${i + 1}.jpg)`;
    img.style.transition = '2s'
})
photoContainers.map(container => {
    container.style.transition = '2s';
});

h1.style.transition = '2s';
document.body.style.transition = '2s';

const fiveSeconsIn = () => {
    imgDivs.map((img, i) => {
        img.style.height = '0px';
        photoContainers[i].style.height = '600px';
        img.style.color = 'white';

    })
    h1.style.color = 'black'
    document.body.style.backgroundColor = 'white'
}

const everyFiveSeconds = () => {
    let heights = ['200px', '400px', '600px']
    let lineHeights = ['150px', '300px', '400px']
    imgDivs.map((img, i) => {
        img.style.height = heights[i];
        img.style.lineHeight = lineHeights[i];
        photoContainers[i].style.height = '200px';
        img.style.color = 'black';

    })
    h1.style.color = 'white'
    document.body.style.backgroundColor = 'black'
}
let counter = 1;

let interval = setInterval(() => {

    counter++;
    if (counter % 2 == 0) {
        fiveSeconsIn()
    } else {
        everyFiveSeconds()
    }

}, 2500); 