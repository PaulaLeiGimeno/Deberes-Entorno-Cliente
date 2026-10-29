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
        console.log(error)
    }
}

//EJERCICIO 1
let pokeNameInput = document.getElementsByName('pokemon-search')[0];
let pokeButton = document.getElementsByName('one')[0];
let pokeSprites = [];
let pokeCounter = 0;
let pokeImg = document.getElementById('pokemon-sprite');
let prevPokeButton = document.getElementsByName('previous')[0];
let nextPokeButton = document.getElementsByName('next')[0];

const getPokemonImgs = async (url) => {
    if (pokeNameInput.value == '') {
        alert('Introduce el nombre del pokemon')
    } else {

        let data = await getData(url);
        pokeSprites = [data.sprites.front_default,
        data.sprites.back_default,
        data.sprites.front_shiny,
        data.sprites.back_shiny];
        pokeImg.src = pokeSprites[pokeCounter];
        console.log(data.sprites)


    }
}

const pokePrev = () => {
    if (pokeCounter == 0) {
        pokeCounter = pokeSprites.length - 1
    } else {
        pokeCounter--
    }
    pokeImg.src = pokeSprites[pokeCounter];
}
const pokeNext = () => {
    if (pokeCounter == pokeSprites.length - 1) {
        pokeCounter = 0
    } else {
        pokeCounter++
    }
    pokeImg.src = pokeSprites[pokeCounter];
}



pokeButton.addEventListener('click', () => getPokemonImgs(`https://pokeapi.co/api/v2/pokemon/${pokeNameInput.value}`))
nextPokeButton.addEventListener('click', pokeNext)
prevPokeButton.addEventListener('click', pokePrev)



//EJERCICIO 2
let rickLocationInput = document.getElementsByName('location-search')[0];
let rickButton = document.getElementsByName('two')[0];

let locationName = document.getElementById('location-name');
let locationDimension = document.getElementById('location-dimension')
let rickCharImg = document.getElementById('character-img');
let rickCharName = document.getElementById('character-name');


let prevLocButton = document.getElementsByName('previous-location')[0];
let nextLocButton = document.getElementsByName('next-location')[0];
let prevCharButton = document.getElementsByName('previous-character')[0];
let nextCharButton = document.getElementsByName('next-character')[0];


let rickLocationCounter = 0;
let rickCharacterCounter = 0;
let rickLocationArray = []
let rickCharArray = []

const getRickLocations = async (url) => {
    rickCharImg.src = '';
    locationName.textContent = '';
    locationDimension.textContent = '';
    rickLocationArray = []
    if (rickLocationInput.value == '') {
        alert('Introduce el nombre de la localización')
    } else {
        let data = await getData(url);
        data.results.map((e) => {
            let obj = {
                "name": e.name,
                "dimension": e.dimension,
                "characters": e.residents
            }
            rickLocationArray.push(obj)
        })

        locationName.textContent = rickLocationArray[rickLocationCounter].name;
        locationDimension.textContent = rickLocationArray[rickLocationCounter].dimension;

        //PROMESAS
        promiseCharacters()


    }
}

const promiseCharacters = async () => {
    rickCharArray = [];
    rickCharacterCounter = 0;

    let promise = rickLocationArray[rickLocationCounter].characters.map((e) => {
        return getRickCharacters(e)
    })

    await Promise.all(promise);
    console.log(rickCharArray[rickCharacterCounter])

    if (rickCharArray.length > 0) {
        updateCharacters();
    } else {
        rickCharImg.src = '';
        rickCharName.textContent = 'Sin residentes';
    }

}

const updateCharacters = () => {
    rickCharImg.src = rickCharArray[rickCharacterCounter].charImg
    rickCharName.textContent = rickCharArray[rickCharacterCounter].charName;
}

const changeStuff = () => {
    locationName.textContent = rickLocationArray[rickLocationCounter].name;
    locationDimension.textContent = rickLocationArray[rickLocationCounter].dimension;
    promiseCharacters()

}

const getRickCharacters = async (url) => {
    let data = await getData(url);
    let obj = {
        "charName": data.name,
        "charImg": data.image
    }
    rickCharArray.push(obj)

}


const rickLocPrev = () => {
    if (rickLocationCounter == 0) {
        rickLocationCounter = rickLocationArray.length - 1
    } else {
        rickLocationCounter--
    }
    changeStuff();


}
const rickLocNext = () => {
    if (rickLocationCounter == rickLocationArray.length - 1) {
        rickLocationCounter = 0
    } else {
        rickLocationCounter++
    }
    changeStuff();

}



const rickCharPrev = () => {
    if (rickCharacterCounter == 0) {
        rickCharacterCounter = rickCharArray.length - 1
    } else {
        rickCharacterCounter--
    }
    changeStuff();


}
const rickCharNext = () => {
    if (rickCharacterCounter == rickCharArray.length - 1) {
        rickCharacterCounter = 0
    } else {
        rickCharacterCounter++
    }
    changeStuff();
}


rickButton.addEventListener('click', () => getRickLocations(`https://rickandmortyapi.com/api/location/?name=${rickLocationInput.value}`));
prevLocButton.addEventListener('click', rickLocPrev)
nextLocButton.addEventListener('click', rickLocNext)


prevCharButton.addEventListener('click', rickCharPrev)
nextCharButton.addEventListener('click', rickCharNext)

//EJERCICIO 3

let wordInput = document.getElementsByName('word-search')[0];
let wordButton = document.getElementsByName('three')[0];

const getWordsWordsWords = async (url) => {
    if (wordInput.value == '') {
        alert('Introduce una palabra en inglés')
    } else {

        let data = await getData(url);
        console.log('Word: ' + data[0].word)
        data[0].meanings.map((e) => {
            e.definitions.map((f) => {
                console.log('Synonims: ' + f.synonyms)
                f.synonyms.map((g) => {
                    console.log(g)
                })
            })
        })

    }
}

wordButton.addEventListener('click', () => getWordsWordsWords(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`))

//EJERCICIO 4

//EJERCICIO 5

//EJERCICIO 6

let allPokemon