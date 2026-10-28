const squares = document.getElementsByClassName('photo');
const title = document.getElementsByTagName('h1')[0];
const spaguettis = ['spaghetti_aglio_e_olio.jpg', 'spaghetti_al_pesto_genovese.jpg', 'spaghetti_all_amatriciana.jpg',
    'spaghetti_alla_bolognese.jpg', 'spaghetti_alla_carbonara.jpg', 'spaghetti_alla_puttanesca.jpg']
const imgs = [3, 0, 5, 2, 1, 4, 3, 5, 0, 2, 4, 1];
let turned = [];

let gameOn = false;

const flip = (element, i) => {

    if (!element.isFlipped) {
        element.isFlipped = true;
        element.style.backgroundImage = 'url(\"images/' + spaguettis[i] + '\")';

    } else {
        element.isFlipped = false;
        element.style.backgroundImage = '';
    }

    if (gameOn == true) {

        console.log('game starts');

        if (!element.isFlipped) {
            turned.push(imgs[i])
            if (turned.length == 2) {
                if (turned[0] == turned[1]) {
                    turned = []
                } else {
                    alert('GAME OVER')
                    start();
                }
            }

        }
    }
}

const start = () => {
    turned = [];
    gameOn = false;
    // Empleamos sort() para que cada vez que inicies el juego el orden de las imagenes sea aleatorio:
    imgs.sort(() => Math.random() - 0.5);
    Array.from(squares).forEach((e, i) => {
        e.style.backgroundColor = 'black'
        e.style.backgroundImage = ''
        e.setAttribute('isFlipped', false)
        e.setAttribute('photo', i)
        e.addEventListener('click', () => flip(e, i))
    });

    // CÓDIGO NUEVO
    // En imgs tenemos las fotos que van en cada cuadrícula
    // Para poder mostrarlas por pares, he generado dos nuevos arrays.
    // El array indexes lo utilizo para crear el orden de squares a mostrar. Es decir, si en la primera square (posición 0) y en la tercera (posición 2) tenemos la misma imagen,
    // en indexes aparecerá [0, 2, ...]. De este modo tenemos la secuencia de squares a mostrar.
    // En newImages serán las imagenes a mostrar en ese orden definidos en el array indexes. Es decir, en la posición 0 y en la posición 2 tenemos que mostrar la imagen tres, en
    // este array newImages tendremos [3, 3, ...] 
    let indexes = [];
    let newImages = [];
    imgs.map(element => {
        imgs.findIndex((item, index) => {
            if (item === element) {
                let i = indexes.findIndex(value => value === index);
                if (i === -1) {
                    indexes.push(index);
                    newImages.push(item);
                }
            }
        });
    });
    // Aqui puedes comprobar por consola para que sirven estos arrays:
    console.log(imgs)
    console.log(indexes);
    console.log(newImages);

    let counter = 0;
    let interval1 = setInterval(() => {
        // He modificado el código para que se muestre según los nuevos arrays creados.
        flip(squares[indexes[counter]], newImages[counter])
        counter++;
        if (counter === imgs.length) {
            clearInterval(interval1);
        }
    }, 500);

    // TE COMENTO ESTA LÍNEA PARA QUE PUEDAS DESPUÉS SEGUIR TRABAJANDO
    //setTimeout(() => Array.from(squares).forEach((e, i) => { flip(e, i); gameOn = true; }), 6500)

}




title.addEventListener('click', () => start())


