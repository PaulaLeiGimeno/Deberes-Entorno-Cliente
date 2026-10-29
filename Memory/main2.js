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
        element.style.backgroundImage = 'url(\"images/' + spaguettis[imgs[i]] + '\")';

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
    Array.from(squares).forEach((e, i) => {

        e.style.backgroundColor = 'black'
        e.style.backgroundImage = ''
        e.setAttribute('isFlipped', false)
        e.setAttribute('photo', i)
        e.addEventListener('click', () => flip(e, i))
    });

    let counter = 0;
    let interval1 = setInterval(() => {
        flip(squares[counter], counter)
        counter++;
        if (counter === imgs.length) {
            clearInterval(interval1);
        }
    }, 500);

    setTimeout(() => Array.from(squares).forEach((e, i) => { flip(e, i); gameOn = true; }), 6500)

}




title.addEventListener('click', () => start())


