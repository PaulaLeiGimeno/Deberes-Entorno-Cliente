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

let photos = document.getElementsByClassName('photo');
let photoContainers = document.getElementsByClassName('photo-container');
let changeCounter = 0;
Array.from(photos).map((e, i) => {
    e.style.backgroundImage = `url('./images/${(i + 1)}.jpg')`
    e.style.transition = '2s';
});
Array.from(photoContainers).map((e) => {
    e.style.transition = '2s';
});
document.getElementsByTagName('h1')[0].style.transition = '2s';
document.body.style.transition = '2s'

const fiveSeconsIn = () => {
    Array.from(photos).map((e, i) => {
        e.style.height = '0px';
        e.style.color = 'white';
        e.style.lineHeight = '150px'
        Array.from(photoContainers)[i].style.height = '600px';
    });
    document.getElementsByTagName('h1')[0].style.color = 'black'
}
const imageStyles = [[200, 400, 600], [150, 300, 400]]
const moreChanges = () => {
    if (changeCounter === 0) {
          document.body.style.backgroundColor = 'white'
        Array.from(photos).map((e, i) => {
            e.style.height = imageStyles[0][i] + 'px'
            e.style.lineHeight = imageStyles[1][i] + 'px'
            e.style.color = 'black';
            Array.from(photoContainers)[i].style.height = '200px';
        });
        document.getElementsByTagName('h1')[0].style.color = 'white'
        changeCounter = 1;
    } else {
        document.body.style.backgroundColor = 'black'
        fiveSeconsIn();
        changeCounter = 0
    }

}

setInterval(moreChanges, 5000);


