//Actividad 1 – Utilizando  map,  ubica  una  foto  distinta  en cada uno de los elementos HTML con class photo.

let photoArray = [...document.getElementsByClassName('photo')];
/* También se puede usar Array.from(photoArray)*/
photoArray.map((e, i) => {
    e.style.backgroundImage = 'url(\'./images/' + (i + 1) + '.jpg\')';
});



// Actividad 2 – Implementa  un  script  para  que  cuando  se cargue  la  página  se  realice  un  cambio  progresivo  
// en  el  valor de  la  opacidad  de  las  imágenes  al  60%.  Dicho  cambio  se producirá  de  la  siguiente  manera:  
// cada  100  milisegundos  se cambiará el valor de una imagen. De este  modo, pasados los primeros  100  milisegundos 
// sólo  la  primera  imagen  tendrá  la opacidad  al  60%.  
// Pasados  200  milisegundos,  las  imágenes cambiadas  serán  la  primera  y  la  segunda.  
// Al  transcurrir  600 milisegundos, todas las imágenes tendrán su opacidad cambiada. 

// Tras este intervalo, se producirá la operación inversa: pasados 100 milisegundos la última imagen pasará a recuperar 
// su valor inicial -100%-. Pasados otros 100 milisegundos,  la  quinta  y  sexta  imágenes  habrán  recuperado su  
// valor  inicial.  Y  así  sucesivamente  hasta  que  todas  las imágenes  hayan  recuperado  su  valor  inicial.  
// El  script  debe permitir realizar dos barridos como el descrito. Uno al cargarse la página y otro 1,8 segundos después. 

let changeOpacity = (img, opacity) => {
    img.style.opacity = opacity;
}

let imgCounter = 0;

const lowerOpacity = () => {
    let interval1 = setInterval(() => {
        changeOpacity(photoArray[imgCounter], 0.6);
        console.log('se baja la opacidad de la foto ' + imgCounter);
        imgCounter++;

        if (imgCounter === photoArray.length) {
            clearInterval(interval1);
            console.log('lowerOpacity parado');
        }
    }, 100);
}

const raiseOpacity = () => {
    let interval2 = setInterval(() => {
        imgCounter--;
        changeOpacity(photoArray[imgCounter], 1);
        console.log('se sube la opacidad de la foto ' + imgCounter);

        if (imgCounter === 0) {
            clearInterval(interval2);
            console.log('raiseOpacity parado');
        }
    }, 100);
}
// El evento load se dispara cuando la página y todas las imágenes han terminado de cargar. 
// Sin embargo, setTimeout empiezan a contar desde que el navegador lee el código, no desde que la página carga
//window.addEventListener('load', lowerOpacity);





// Actividad 3 – Implementa  un  script  para  que  3,7  segundos después de cargarse la página, las seis imágenes cambien el 
// valor de su opacidad al ‘50%’ e incrementen sus valores de ancho  y  alto  a  un  ‘105%’.  Transcurridos  4  segundos  de 
// cargarse  la  página,  la  opacidad  y  el  ancho  y  alto  de  las  seis imágenes  volverán  a  sus  valores  iniciales.  
// Transcurridos  4,4 segundos de cargarse la página, la opacidad y el ancho y alto de  las  seis  imágenes  volverán  a  
// cambiar  sus  valores  de opacidad al 50% y las dimensiones ambas al ‘105%’. 
// A los 4,8 segundos  de  cargar  la  página,  las  imágenes  mostraran  los valores iniciales.

const changeStuff = (opacity, size) => {
    photoArray.map((e) => {
        e.style.opacity = opacity;
        e.style.height = size
        e.style.width = size
    })
}

// Actividad 4 - Utilizando map(), implementa la lógica necesaria para que cuando el usuario haga click sobre cualquiera  de  las  seis  imágenes,  
// se  eliminen  todas  ellas  y  se muestre únicamente en pantalla la imagen pulsada. Esta imagen  pasará  a  ocupar  el  
// espacio  que  ocupaban  las  seis anteriores.

const makeImgBig = (index) => {
    let newImg = photoArray[index]

    document.getElementsByClassName('elementor-grid-3')[0].remove();
    let newContainer = document.createElement('div');
    //sin photo-container, el div no tiene dimensiones y no se ve aunque esté en el arbol dom
    newContainer.classList.add('photo-container');
    newContainer.appendChild(newImg)
    document.getElementsByTagName('section')[0].appendChild(newContainer);


}
photoArray.map((e, i) => {
    e.addEventListener('click', () => makeImgBig(i))
});


let doStuff = () => {
    //// Actividad 2
    lowerOpacity();
    setTimeout(raiseOpacity, 700);
    setTimeout(lowerOpacity, 1900);
    setTimeout(raiseOpacity, 2600);

    //Actividad 3
    setTimeout(() => changeStuff('0.5', '105%'), 3700);
    setTimeout(() => changeStuff('1', '100%'), 4000);
    setTimeout(() => changeStuff('0.5', '105%'), 4400);
    setTimeout(() => changeStuff('1', '100%'), 4800);


}

window.addEventListener('load', doStuff);