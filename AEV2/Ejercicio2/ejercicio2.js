const photos = document.getElementsByClassName('photo');
const closeButton = document.getElementsByClassName('close-button')[0];
const modal = document.getElementsByClassName('modal')[0];
const buttons = document.getElementsByTagName('button');

let moviesData = [];
let characterCounter = 0;
let characterArray = [];

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Error al realizar la petición:', error);
    }
    return null;
};

// Carga las películas iniciales
const getFilms = async (url) => {
    const data = await getData(url);
    if (data && data.results) {
        moviesData = data.results.map((movie) => ({
            'title': movie.title,
            'director': movie.director,
            'release_date': movie.release_date,
            'characters': movie.characters,
        }));
        
        // Asignar los eventos a los pósters una vez obtenidos los datos
        Array.from(photos).forEach((photo, i) => {
            photo.addEventListener('click', () => openModalScreen(i));
        });
    }
};

// Obtiene el nombre del personaje por URL
const getCharacterName = async (url) => {
    const data = await getData(url);
    return data ? data.name : 'Desconocido';
};

// Abre la ventana modal cargando personajes en orden correcto
const openModalScreen = async (i) => {
    if (!moviesData[i]) return;

    modal.className = 'modal show-modal';
    characterArray = [];
    characterCounter = 0;
    
    document.getElementsByTagName('h1')[1].textContent = moviesData[i].title;
    document.getElementsByTagName('h2')[0].textContent = `Director: ${moviesData[i].director}`;
    document.getElementsByTagName('h3')[0].textContent = `Estreno: ${moviesData[i].release_date}`;
    document.getElementsByTagName('h4')[0].textContent = 'Cargando personajes...';

    // Esperar a que se resuelvan todas las promesas de los personajes
    characterArray = await Promise.all(
        moviesData[i].characters.map((charUrl) => getCharacterName(charUrl))
    );

    if (characterArray.length > 0) {
        document.getElementsByTagName('h4')[0].textContent = characterArray[characterCounter];
    }
};

const closeModalScreen = () => {
    modal.className = 'modal';
};

closeButton.addEventListener('click', closeModalScreen);

const next = () => {
    if (characterArray.length === 0) return;
    if (characterCounter === characterArray.length - 1) {
        characterCounter = 0;
    } else {
        characterCounter++;
    }
    document.getElementsByTagName('h4')[0].textContent = characterArray[characterCounter];
};

const prev = () => {
    if (characterArray.length === 0) return;
    if (characterCounter === 0) {
        characterCounter = characterArray.length - 1;
    } else {
        characterCounter--;
    }
    document.getElementsByTagName('h4')[0].textContent = characterArray[characterCounter];
};

buttons[0].addEventListener('click', prev);
buttons[1].addEventListener('click', next);

// Inicializar la carga de las películas
getFilms('https://swapi.dev/api/films');