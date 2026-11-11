const addPokemonForm = document.getElementsByTagName('form')[0];
const searchPokemonForm = document.getElementsByTagName('form')[1];
const addPokemonInput = document.getElementsByTagName('input')[0];
const searchPokemonInput = document.getElementsByTagName('input')[1];
const images = document.getElementsByTagName('img');

// Función genérica para obtener datos
const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

// Obtener datos desde PokeAPI y guardarlos en LocalStorage
const getPokemonsFromAPI = async (url, e) => {
    e.preventDefault();
    const pokemonName = addPokemonInput.value.trim().toLowerCase();
    
    if (!pokemonName) return;

    const data = await getData(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    if (data) {
        const obj = {
            "front_default": data.sprites.front_default,
            "back_default": data.sprites.back_default,
            "front_shiny": data.sprites.front_shiny,
            "back_shiny": data.sprites.back_shiny,
        };
        window.localStorage.setItem(data.name, JSON.stringify(obj));
        alert(`¡${data.name.toUpperCase()} guardado en LocalStorage!`);
        addPokemonForm.reset();
    } else {
        alert('No se encontró el Pokémon en la API');
    }
};

// Cambiar la imagen principal
const changeBigImg = (source) => {
    images[4].src = source;
};

// Obtener datos guardados en LocalStorage y renderizarlos
const getPokemonsFromLocalStorage = (name, e) => {
    e.preventDefault();
    const searchName = name.trim().toLowerCase();
    const pokemonData = JSON.parse(window.localStorage.getItem(searchName));

    if (pokemonData) {
        const spriteArray = [
            pokemonData.front_default, 
            pokemonData.back_default, 
            pokemonData.front_shiny, 
            pokemonData.back_shiny, 
            pokemonData.front_default
        ];

        Array.from(images).forEach((image, i) => {
            if (spriteArray[i]) {
                image.src = spriteArray[i];
            }
        });

        for (let i = 0; i < 4; i++) {
            // Se usa onclick en lugar de addEventListener para reemplazar el handler anterior y evitar duplicados
            images[i].onclick = () => changeBigImg(spriteArray[i]);
        }
    } else {
        alert('No hay un Pokémon con ese nombre guardado');
    }
    searchPokemonForm.reset();
};

addPokemonForm.addEventListener('submit', (e) => getPokemonsFromAPI('', e));
searchPokemonForm.addEventListener('submit', (e) => getPokemonsFromLocalStorage(searchPokemonInput.value, e));