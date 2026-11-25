const squares = document.getElementsByClassName('photo');
const title = document.getElementsByTagName('h1')[0];

const spaguettis = [
    'spaghetti_aglio_e_olio.jpg',
    'spaghetti_al_pesto_genovese.jpg',
    'spaghetti_all_amatriciana.jpg',
    'spaghetti_alla_bolognese.jpg',
    'spaghetti_alla_carbonara.jpg',
    'spaghetti_alla_puttanesca.jpg'
];

const imgs = [3, 0, 5, 2, 1, 4, 3, 5, 0, 2, 4, 1];

let turned = [];
let gameOn = false;
let isInitialized = false;

const flip = (element, i) => {

    // Prevent clicking already flipped cards during the game
    if (gameOn && element.isFlipped) return;

    if (!element.isFlipped) {
        element.isFlipped = true;
        element.style.backgroundImage =
            `url("images/${spaguettis[imgs[i]]}")`;
    } else {
        element.isFlipped = false;
        element.style.backgroundImage = '';
    }

    if (gameOn && element.isFlipped) {

        turned.push({
            value: imgs[i],
            element: element
        });

        if (turned.length === 2) {

            if (turned[0].value === turned[1].value) {
                // Match
                turned = [];
            } else {

                // Show wrong pair briefly
                setTimeout(() => {

                    turned[0].element.isFlipped = false;
                    turned[0].element.style.backgroundImage = '';

                    turned[1].element.isFlipped = false;
                    turned[1].element.style.backgroundImage = '';

                    gameOver();

                }, 500);

            }
        }
    }
};

const start = () => {

    turned = [];
    gameOn = false;

    // Shuffle cards
    imgs.sort(() => Math.random() - 0.5);

    Array.from(squares).forEach((e, i) => {

        e.style.backgroundColor = 'black';
        e.style.backgroundImage = '';
        e.isFlipped = false;

        if (!isInitialized) {
            e.addEventListener('click', () => flip(e, i));
        }
    });

    isInitialized = true;

    // -------- Preview order (pairs together) --------

    let indexes = [];
    let previewImages = [];

    imgs.forEach((value, index) => {

        if (!indexes.includes(index)) {

            let second = imgs.findIndex((v, i) => i !== index && v === value);

            indexes.push(index);
            previewImages.push(value);

            indexes.push(second);
            previewImages.push(value);
        }
    });

    // -------- Show preview --------

    let counter = 0;

    let interval = setInterval(() => {

        let squareIndex = indexes[counter];

        squares[squareIndex].isFlipped = true;
        squares[squareIndex].style.backgroundImage =
            `url("images/${spaguettis[previewImages[counter]]}")`;

        counter++;

        if (counter === indexes.length) {
            clearInterval(interval);
        }

    }, 500);

    // Hide all cards
    setTimeout(() => {

        Array.from(squares).forEach(e => {
            e.isFlipped = false;
            e.style.backgroundImage = '';
        });

        gameOn = true;

    }, (indexes.length * 500) + 500);
};

const gameOver = () => {

    alert("GAME OVER");

    gameOn = false;

    Array.from(squares).forEach(e => {
        e.isFlipped = false;
        e.style.backgroundImage = '';
    });

    start();
};

title.addEventListener('click', start);