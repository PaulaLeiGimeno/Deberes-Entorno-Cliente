/*
Tarea: Crear un script para que cuando el usuario introduzca el nombre de un personaje de Rick and Morty en el 
primer formulario, se borren los datos del formulario y se realice una petición GET HTTP a la API REST pública 
The Rick and Morty API 

Implementa la lógica necesaria para guardar en el almacenamiento local del navegador el nombre, las fotos y los
episodios en los que aparece el primero de los personajes que devuelve la respuesta de la petición realizada. 
Cuando el usuario consulte el nombre de uno de los personajes mediante el segundo formulario, aparecerá el nombre
y la foto de dicho personaje, así como la lista de todos los capítulos en los que ha aparecido dicho personaje. 

Nota: se entenderá que el usuario insertará un nombre de personaje correcto. La pantalla modal deberá poderse 
cerrar para efectuar más búsquedas.  Nota: emplear funciones de orden superior sobre arrays. (4 puntos). 
*/

//https://rickandmortyapi.com/api/character/?name=rick

let getCharacterForm = document.getElementsByTagName('form')[0];
let getCharacterInput = document.getElementsByTagName('input')[0];
let searchCharacterForm = document.getElementsByTagName('form')[1];
let searchCharacterInput = document.getElementsByTagName('input')[1];

let modal = document.getElementsByClassName('modal')[0];
let modalImg = document.getElementsByTagName('img')[0];
let modalTag = document.getElementsByClassName('tag')[0];
let modalEpisodes = document.getElementsByTagName('h4')[0];

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

const getEpisodes = async (url) => {
    data = await getData(url);
    let epi = data.episode + ' : ' + data.name
    return epi;
}

const getCharacters = async (e, url) => {
    e.preventDefault();
    const data = await getData(url);

    let promise = data.results[0].episode.map((epi) => {
        return getEpisodes(epi)
    })

    let obj = {
        "name": data.results[0].name,
        "image": data.results[0].image,
        "episode": await Promise.all(promise)
    }

    window.localStorage.setItem(getCharacterInput.value.toLowerCase().trim(), JSON.stringify(obj));

    getCharacterForm.reset();

};

const searchCharacters = (e, char) => {
    e.preventDefault();
    let character = JSON.parse(window.localStorage.getItem(char));
    modal.className = 'modal show-modal';

    if (document.getElementsByTagName('p').length > 0) {
        Array.from(document.getElementsByTagName('p')).map((p) => {
            p.remove
        })
    }

    modalImg.src = character.image;
    modalTag.textContent = character.name;

    character.episode.map((epi) => {
        let newP = document.createElement('p');
        newP.textContent = epi;
        modalEpisodes.appendChild(newP)
    })

    searchCharacterForm.reset();



}
document.getElementsByClassName('close-button')[0].addEventListener('click', () => {
    modal.className = 'modal';
});


getCharacterForm.addEventListener('submit', (e) => getCharacters(e, `https://rickandmortyapi.com/api/character/?name=${getCharacterInput.value.toLowerCase().trim()}`))
searchCharacterForm.addEventListener('submit', (e) => searchCharacters(e, searchCharacterInput.value.toLowerCase().trim()));

