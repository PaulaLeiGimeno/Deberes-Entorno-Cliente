let addPokemonForm = document.getElementsByTagName('form')[0];
let searchPokemonForm = document.getElementsByTagName('form')[1];

let addPokemonInput = document.getElementsByTagName('input')[0];
let searchPokemonInput = document.getElementsByTagName('input')[1];

let images = document.getElementsByTagName('img')

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

const getPokemonsFromAPI = async (url, e) => {
    e.preventDefault()


    let data = await getData(url);

    let obj = {
        "front_default": data.sprites.front_default,
        "back_default": data.sprites.back_default,
        "front_shiny": data.sprites.front_shiny,
        "back_shiny": data.sprites.back_shiny,
    }
    window.localStorage.setItem(data.name, JSON.stringify(obj));

    addPokemonForm.reset();
}

const changeBigImg = (source) => {
    images[4].src = source;
}


const getPokemonsFromLocalStorage = (name, e) => {
    e.preventDefault()
    let pokemonData = JSON.parse(window.localStorage.getItem(name));

    if (window.localStorage.getItem(name)) {
        let spriteArray = [pokemonData.front_default, pokemonData.back_default, pokemonData.front_shiny, pokemonData.back_shiny, pokemonData.front_default]
        Array.from(images).map((image, i) => {
            image.src = spriteArray[i]
        })

        for (let i = 0; i < 4; i++) {
            images[i].addEventListener('click', () => changeBigImg(spriteArray[i]))

        }
    } else {
        alert('No hay un pokemon con ese nombre guardado')
    }
    searchPokemonForm.reset();

}





addPokemonForm.addEventListener('submit', (e) => getPokemonsFromAPI(`https://pokeapi.co/api/v2/pokemon/${addPokemonInput.value}`, e));
searchPokemonForm.addEventListener('submit', (e) => getPokemonsFromLocalStorage(searchPokemonInput.value, e));

