let filmImgs = document.getElementsByClassName('photo')
let modal = document.getElementsByClassName('modal')[0];

let prevButton = document.getElementsByTagName('button')[0];
let nextButton = document.getElementsByTagName('button')[1];


let index = 0;
let characterArrays = []





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

const getCharacter = async (url) => {
    let data = await getData(url)
    return data.name
}

const getFilm = async (url) => {
    characterArrays = []
    const data = await getData(url);
    let promise = data.characters.map((char) => {
        return getCharacter(char)
    })
    characterArrays = await Promise.all(promise)


    document.getElementsByTagName('h1')[1].textContent = data.title;
    document.getElementsByTagName('h2')[0].textContent = data.director;
    document.getElementsByTagName('h3')[0].textContent = data.release_date;
    document.getElementsByTagName('h4')[0].textContent = characterArrays[0];

};
const showModalScreen = (i) => {
    modal.className = 'modal show-modal';
    getFilm(`https://swapi.dev/api/films/${i + 1}`)
    index = 0;
}

const next = () => {

    if (index === characterArrays.length - 1) {
        index = 0;
    } else {
        index++;
    }

    document.getElementsByTagName('h4')[0].textContent = characterArrays[index];

}
const prev = () => {
    if (index === 0) {
        index = characterArrays.length - 1;
    } else {
        index--;
    }

    document.getElementsByTagName('h4')[0].textContent = characterArrays[index];
};



Array.from(filmImgs).map((photo, i) => {
    photo.addEventListener('click', () => showModalScreen(i))
})
document.getElementsByClassName('close-button')[0].addEventListener('click', function () {
    modal.className = 'modal';
});


prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);