const photos = document.getElementsByClassName('photo');
const modal = document.getElementsByClassName('modal')[0];
const film = document.getElementsByTagName('h1')[1];
const director = document.getElementsByTagName('h2')[0];
const releaseDate = document.getElementsByTagName('h3')[0];
const character = document.getElementsByTagName('h4')[0];
const closeButton = document.getElementsByClassName('close-button')[0];
const buttons = document.getElementsByTagName('button');
let current = 0;
let characters = [];


const getData = async(url) => {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            return data;
        }
    } catch(error) {
        console.log(error);
    }
}

const showFilm = async (index) => {
    const data = await getData('https://swapi.dev/api/films/');
    modal.className = 'modal show-modal';

    film.textContent = data.results[index].title;
    director.textContent = data.results[index].director;
    releaseDate.textContent = data.results[index].release_date;
    
    characters = data.results[index].characters;
    const characterData = await getData(data.results[index].characters[0]);

    character.textContent = characterData.name;
}

const closeModal = () => {
    modal.className = 'modal';
}

const changeCharacter = async (position) => {
    current += position;
    if(current < 0) current = characters.length - 1;
    if(current > characters.length - 1) current = 0;

    const characterData = await getData(characters[current]);

    character.textContent = characterData.name;
}


Array.from(photos).map((photo, i) => {
    photo.addEventListener('click', () => showFilm(i));
});
closeButton.addEventListener('click', () => closeModal());
buttons[0].addEventListener('click', () => changeCharacter(-1));
buttons[1].addEventListener('click', () => changeCharacter(1));