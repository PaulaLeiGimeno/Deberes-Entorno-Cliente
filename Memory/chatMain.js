const squares = document.getElementsByClassName('photo');
const title = document.getElementsByTagName('h1')[0];
const spaguettis = ['spaghetti_aglio_e_olio.jpg', 'spaghetti_al_pesto_genovese.jpg', 'spaghetti_all_amatriciana.jpg',
    'spaghetti_alla_bolognese.jpg', 'spaghetti_alla_carbonara.jpg', 'spaghetti_alla_puttanesca.jpg']
const imgs = [3, 0, 5, 2, 1, 4, 3, 5, 0, 2, 4, 1];
let turned = [];
let gameOn = false;
let isInitialized = false; // Prevents adding multiple event listeners

const flip = (element, i) => {
    // If the game is on and the card is already flipped, do nothing
    if (gameOn && element.isFlipped) return;

    // Toggle visual and state
    if (!element.isFlipped) {
        element.isFlipped = true;
        element.style.backgroundImage = 'url("images/' + spaguettis[imgs[i]] + '")';
    } else {
        element.isFlipped = false;
        element.style.backgroundImage = '';
    }

    // Game Logic
    if (gameOn) {
        // Since we just flipped it face UP, element.isFlipped is now true
        if (element.isFlipped) {
            turned.push(imgs[i]);
            
            if (turned.length == 2) {
                if (turned[0] == turned[1]) {
                    // Match found!
                    turned = [];
                } else {
                    // No match -> Game Over
                    gameOver();
                }
            }
        }
    }
}

const start = () => {
    turned = []; // Reset array just in case
    
    Array.from(squares).forEach((e, i) => {
        e.style.backgroundColor = 'black';
        e.isFlipped = false; // Use JS property, not setAttribute
        
        // Only add listeners the very first time start() is called
        if (!isInitialized) {
            e.addEventListener('click', () => flip(e, i));
        }
    });
    
    isInitialized = true; 

    let counter = 0;
    let interval1 = setInterval(() => {
        flip(squares[counter], counter)
        counter++;
        if (counter === imgs.length) {
            clearInterval(interval1);
        }
    }, 500);

    setTimeout(() => {
        Array.from(squares).forEach((e, i) => { 
            // Turn them all back face down
            e.isFlipped = false;
            e.style.backgroundImage = '';
        }); 
        gameOn = true; 
    }, 6500);
}

const gameOver = () => {
    // Small timeout so the user sees the wrong card before the alert blocks the screen
    setTimeout(() => {
        alert('GAME OVER');
        gameOn = false;
        
        Array.from(squares).forEach((e) => {
            e.isFlipped = false;
            e.style.backgroundImage = '';
        });
        
        start();
    }, 100); 
}

title.addEventListener('click', () => start());