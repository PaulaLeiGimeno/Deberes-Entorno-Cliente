const form = document.getElementsByTagName('form');
const input = document.getElementsByTagName('input');
const images = document.getElementsByTagName('img');
let photos = [];


const getData = async (searchTerm) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

const setPokemonInLocalStorage = async (e) => {
    e.preventDefault();
    let pokemon = input[0].value;
    let data = await getData(pokemon);

    let pokemonImages = [data.sprites.front_default, data.sprites.back_default, data.sprites.front_shiny, data.sprites.back_shiny];

    localStorage.setItem(data.name, JSON.stringify(pokemonImages));

    form[0].reset();
}

const getPokemonFromLocalStorage = (e) => {
    e.preventDefault();

    let data = localStorage.getItem(input[1].value);
    photos = JSON.parse(data);
    photos.map((pokemonImage, index) => {
        images[index].src = pokemonImage;
    });

    images[images.length - 1].src = photos[0];

    form[1].reset();
}

const showImages = (index) => {
    images[images.length - 1].src = photos[index];
}


form[0].addEventListener('submit', (e) => setPokemonInLocalStorage(e));
form[1].addEventListener('submit', (e) => getPokemonFromLocalStorage(e));
for(let i = 0; i < images.length - 1; i++) {
    images[i].addEventListener('click', () => showImages(i));
}

    /*
Array.from(images).map((image, index) => {
    if(index < images.length - 1) image.addEventListener('click', () => showImages());
})
    */