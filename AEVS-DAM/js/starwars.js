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


let sWInput = document.getElementsByName('sw-search')[0];
let sWButton = document.getElementsByName('sw-btn')[0];

let sWCharacterArray = []
let sWCharacterCounter = 0;

const getSWCharacters = async (url) => {
    let data = await getData(url);
    data.results.map((character) => {
        let obj = {
            //nombre del personaje, su altura, su masa y las películas en las que aparece.
            'name': character.name,
            'height': character.height,
            'mass': character.mass,
            'films': character.films
        }
        sWCharacterArray.push(obj)
    })

    showInfo(data.results[0])

}



const showInfo = async (obj) => {

    if (document.getElementById('sw-character-info') && document.getElementById('sw-film-info')) {

        document.getElementById('sw-character-info').remove();
        document.getElementById('sw-film-info').remove();

    }
    let charDiv = document.createElement('div');
    charDiv.setAttribute('id', 'sw-character-info')
    document.getElementsByTagName('h3')[0].appendChild(charDiv)


    let charName = document.createElement('p');
    charName.textContent = obj.name;

    let charHeight = document.createElement('p');
    charHeight.textContent = obj.height;

    let charMass = document.createElement('p');
    charMass.textContent = obj.mass;

    charDiv.appendChild(charName)
    charDiv.appendChild(charHeight)
    charDiv.appendChild(charMass)

    let promise = obj.films.map((film) => {
        return getData(film)
    })

    let movies = await Promise.all(promise);

    let movieDiv = document.createElement('div');
    movieDiv.setAttribute('id', 'sw-film-info')
    document.getElementsByTagName('h3')[1].appendChild(movieDiv)

    movies.map((movie) => {
        let movieName = document.createElement('p');
        movieName.textContent = movie.title;

        let opening = document.createElement('p');
        opening.textContent = movie.opening_crawl;

        movieDiv.appendChild(movieName);
        movieDiv.appendChild(opening)
    })


}




const next = () => {
    if (sWCharacterCounter === sWCharacterArray.length - 1) {
        sWCharacterCounter = 0
    } else {
        sWCharacterCounter++
    }
    showInfo(sWCharacterArray[sWCharacterCounter])

}
const prev = () => {
    if (sWCharacterCounter === 0) {
        sWCharacterCounter = sWCharacterArray.length - 1
    } else {
        sWCharacterCounter--;
    }
    showInfo(sWCharacterArray[sWCharacterCounter])
}


sWButton.addEventListener('click', () => getSWCharacters(`https://swapi.dev/api/people/?name=${sWInput.value}`))
document.getElementsByName('sw-prev')[0].addEventListener('click', prev)
document.getElementsByName('sw-next')[0].addEventListener('click', next)