
const photos = document.getElementsByClassName('photo')
const closeButton = document.getElementsByClassName('close-button')[0]
const modal = document.getElementsByClassName('modal')[0];
const buttons = document.getElementsByTagName('button')

let moviesData = []
let characterCounter = 0;
let characterArray = []
let movieIndex = 0;



const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    }
    catch (error) {
        console.log(error);
    }
}

const getFilms = async (url) => {
    let data = await getData(url);

    data.results.map((movie) => {
        let obj = {
            'title': movie.title,
            'director': movie.director,
            'release_date': movie.release_date,
            'characters': movie.characters,
        }
        moviesData.push(obj)

    })


}

const getCharacters = async (url) => {
    let data = await getData(url);
    characterArray.push(data.name)


}


const openModalScreen = (i) => {
    modal.className = 'modal show-modal';
    characterArray = [];
    characterCounter = 0;


    Promise.all(moviesData[i].characters.map((character) => {
        getCharacters(character)
    }))



    document.getElementsByTagName('h1')[1].textContent = moviesData[i].title;
    document.getElementsByTagName('h2')[0].textContent = moviesData[i].director;
    document.getElementsByTagName('h3')[0].textContent = moviesData[i].release_date;
    document.getElementsByTagName('h4')[0].textContent = characterArray[characterCounter];
}

const closeModalScreen = () => {
    modal.className = 'modal'

}

Array.from(photos).map((photo, i) => {
    photo.addEventListener('click', () => openModalScreen(i))
    movieIndex = i
})
closeButton.addEventListener('click', closeModalScreen)





const next = () => {
    if (characterCounter === characterArray.length - 1) {
        characterCounter = 0
    } else {
        characterCounter++
    }
    document.getElementsByTagName('h4')[0].textContent = characterArray[characterCounter]
}
const prev = () => {
    if (characterCounter === 0) {
        characterCounter = characterArray.length - 1
    } else {
        characterCounter--;
    }
    document.getElementsByTagName('h4')[0].textContent = characterArray[characterCounter]
}

buttons[0].addEventListener('click', () => prev())
buttons[1].addEventListener('click', () => next())

getFilms('https://swapi.dev/api/films')