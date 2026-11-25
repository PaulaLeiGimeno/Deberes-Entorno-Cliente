
let getPokemonForm = document.getElementsByTagName('form')[0];
let getPokemonInput = document.getElementsByTagName('input')[0];


let searchPokemonForm = document.getElementsByTagName('form')[1];
let searchPokemonInput = document.getElementsByTagName('input')[1];

let pokemonData = [];

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


const getPokemons = async (e, url) => {
    e.preventDefault();

    const data = await getData(url);
    let newArray = [
        data.sprites.front_default,
        data.sprites.back_default,
        data.sprites.front_shiny,
        data.sprites.back_shiny
    ];

    window.localStorage.setItem(data.name, JSON.stringify(newArray));

    getPokemonForm.reset();

};
for (let i = 0; i < 4; i++) {
    document.getElementsByTagName('img')[i].addEventListener('click', () => changeBigImg(i))
}

const changeBigImg = (i) => {
    document.getElementsByTagName('img')[4].src = pokemonData[i]
}

const searchPokemons = (e) => {
    e.preventDefault();
    pokemonData = JSON.parse(window.localStorage.getItem(searchPokemonInput.value.trim().toLowerCase()));
    console.log(pokemonData)

    pokemonData.map((pokemonSprite, i) => {
        document.getElementsByTagName('img')[i].src = pokemonSprite;
    })
    document.getElementsByTagName('img')[1].src = pokemonData[0];
    searchPokemonForm.reset();
}




getPokemonForm.addEventListener('submit', (e) => getPokemons(e, `https://pokeapi.co/api/v2/pokemon/${getPokemonInput.value.trim().toLowerCase()}`))
searchPokemonForm.addEventListener('submit', (e) => searchPokemons(e))