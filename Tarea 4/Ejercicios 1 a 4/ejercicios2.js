
Array.from(document.getElementsByClassName('photo')).map((e, i) => {
    e.style.backgroundImage = 'url(\'./images/' + (i + 1) + '.jpg\')';
});

let photos = Array.from(document.getElementsByClassName('photo'));

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

let repeat = 0

const changeOpacity = () => {
    let counter = 0;

    let interval1 = setInterval(() => {
        photos[counter].style.opacity = 0.6;
        counter++;

        if (counter === photos.length) {
            clearInterval(interval1);

            let interval2 = setInterval(() => {
                counter--;
                photos[counter].style.opacity = 1;

                if (counter === 0) {
                    clearInterval(interval2);
                    repeat++
                    if (repeat < 2) {
                        setTimeout(changeOpacity, 1800);

                    }

                }
            }, 100);
        }
    }, 100);
};

changeOpacity();

// Actividad 3 – Implementa  un  script  para  que  3,7  segundos después de cargarse la página, las seis imágenes cambien el 
// valor de su opacidad al ‘50%’ e incrementen sus valores de ancho  y  alto  a  un  ‘105%’.  Transcurridos  4  segundos  de 
// cargarse  la  página,  la  opacidad  y  el  ancho  y  alto  de  las  seis imágenes  volverán  a  sus  valores  iniciales.  
// Transcurridos  4,4 segundos de cargarse la página, la opacidad y el ancho y alto de  las  seis  imágenes  volverán  a  
// cambiar  sus  valores  de opacidad al 50% y las dimensiones ambas al ‘105%’. 
// A los 4,8 segundos  de  cargar  la  página,  las  imágenes  mostraran  los valores iniciales.

const lowerOpacity = () => {
    photos.map((photo) => {
        photo.style.opacity = 0.5;
        photo.style.height = '105%';
        photo.style.width = '105%';
    });


}
const raiseOpacity = () => {
    photos.map((photo) => {
        photo.style.opacity = 1;
        photo.style.height = '100%';
        photo.style.width = '100%';
    });
}

setTimeout(lowerOpacity, 3700)
setTimeout(raiseOpacity, 4000)
setTimeout(lowerOpacity, 4400)
setTimeout(raiseOpacity, 4800)


// Actividad 4 - Utilizando map(), implementa la lógica necesaria para que cuando el usuario haga click sobre cualquiera  de  las  seis  imágenes,  
// se  eliminen  todas  ellas  y  se muestre únicamente en pantalla la imagen pulsada. Esta imagen  pasará  a  ocupar  el  
// espacio  que  ocupaban  las  seis anteriores.


let container = document.getElementsByClassName('elementor-grid-3')[0]

const makeImgBig = (i) => {

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    container.remove();

    let newContainer = document.createElement('div');

    newContainer.style.height = height + 'px';
    newContainer.style.width = width+'px';
    newContainer.style.backgroundSize = 'cover';
    newContainer.style.backgroundImage = 'url(\'./images/' + (i + 1) + '.jpg\')';


    document.getElementsByTagName('section')[1].appendChild(newContainer)

}


photos.map((photo, i) => {
    photo.addEventListener('click', () => makeImgBig(i))
})