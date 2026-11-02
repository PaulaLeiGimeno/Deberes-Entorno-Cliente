let pokeArray = []
let nextPage = '';
let prevPage = '';

let renderMoreButton = document.getElementById('render-more');


const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        const audio = new Audio('Sad_Trombone.mp3');
        audio.play();
    }
}





document.getElementsByClassName('card')[0].remove();

const getAllPokemon = async (url) => {
    pokeArray = []
    let data = await getData(url);
    nextPage = data.next;
    prevPage = data.previous;

    let pokemonArray = Promise.all(data.results.map((e) => {
        return getData(e.url);
    }));
    (await pokemonArray).map((e) => {
        let obj = {
            "name": e.name,
            "fd": e.sprites.front_default,
            "bd": e.sprites.back_default,
            "fs": e.sprites.front_shiny,
            "bs": e.sprites.back_shiny
        }

        pokeArray.push(obj)
    })

    for (let i = 0; i < 3; i++) {
        createCard(pokeArray[i])
        console.log(pokeArray[i].name)
    }

}
const createCard = (pokeObj) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card')

    let photo = document.createElement('div');
    photo.setAttribute('class', 'photo')

    photo.style.backgroundImage = `url(${pokeObj.fs})`

    let footer = document.createElement('div');
    footer.setAttribute('class', 'footer')

    let titles = document.createElement('div');
    titles.setAttribute('class', 'titles')

    let bigger = document.createElement('div');
    bigger.setAttribute('class', 'bigger')

    let trigger = document.createElement('div');
    trigger.setAttribute('class', 'trigger')
    trigger.textContent = 'AMPLIAR'
    trigger.addEventListener('click', () => showModal(pokeObj))

    let title = document.createElement('h2');
    title.setAttribute('class', 'card-title')
    title.textContent = pokeObj.name



    document.getElementsByClassName('grid')[0].appendChild(card)
    card.appendChild(photo)
    card.appendChild(footer)
    footer.appendChild(titles)
    titles.appendChild(title)
    footer.appendChild(bigger)
    bigger.appendChild(trigger)
}


let renderMore = () => {

    if (document.getElementsByTagName('button')[0].textContent == 'MOSTRAR MÁS') {
        Array.from(document.getElementsByClassName('card')).map((e) => {
            e.remove()
        })


        pokeArray.map((e) => {
            createCard(e)
        })

        document.getElementsByTagName('button')[0].textContent = 'SIGUIENTE'
    } else {
        Array.from(document.getElementsByClassName('card')).map((e) => {
            e.remove()
        })
        getAllPokemon(nextPage)
        document.getElementsByTagName('button')[0].textContent = 'MOSTRAR MÁS'
    }

}




window.addEventListener('load', () => getAllPokemon('https://pokeapi.co/api/v2/pokemon'))
renderMoreButton.addEventListener('click', renderMore)

//modal

let modal = document.getElementsByClassName('modal')[0];
let modalImg = document.getElementsByTagName('img')[0];
let modalName = document.getElementsByClassName('tag')[0]

let carouselCounter = 0;


document.getElementsByClassName('close-button')[0].addEventListener('click', function () {
    modal.className = 'modal';
});
let spriteArray = []

const showModal = (obj) => {
    carouselCounter = 0;

    spriteArray = [obj.fd, obj.bd, obj.fs, obj.bs]
    modal.className = 'modal show-modal'
    modalName.textContent = obj.name;
    modalImg.src = spriteArray[carouselCounter]
}



const nextSpriteModal = () => {

    if (carouselCounter == 3) {
        carouselCounter = 0
    } else {
        carouselCounter++
    }

    modalImg.src = spriteArray[carouselCounter]
}
const prevSpriteModal = () => {
    if (carouselCounter == 0) {
        carouselCounter = 3
    } else {
        carouselCounter--
    }

    modalImg.src = spriteArray[carouselCounter]
}

let prevModalButton = document.getElementsByTagName('button')[1];
let nextModalButton = document.getElementsByTagName('button')[2];

prevModalButton.addEventListener('click', prevSpriteModal);
nextModalButton.addEventListener('click', nextSpriteModal);


//fav modal

let favModal = document.getElementsByClassName('modal')[1];
let favForm = document.getElementsByTagName('form')[0];
let pokeNameInput = document.getElementsByTagName('input')[0];
let favModalImg = document.getElementsByTagName('img')[1];
let favModalName = document.getElementsByClassName('tag')[1]


const showFavModal = () => {

    favModal.className = 'modal show-modal'
}
document.getElementsByClassName('close-button')[1].addEventListener('click', function () {
    favModal.className = 'modal';
});

document.getElementsByClassName('header')[0].addEventListener('click', showFavModal)

const getOnePokemon = async (url) => {
    let data = await getData(url);
    console.log(data)
    favModalImg.src=data.sprites.front_default
    favModalName.textContent=data.name


}

const searchPokemon = (e) => {
    e.preventDefault();

    getOnePokemon(`https://pokeapi.co/api/v2/pokemon/${pokeNameInput.value}`)




}


favForm.addEventListener('submit', (e) => searchPokemon(e))