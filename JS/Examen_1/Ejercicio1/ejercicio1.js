let getWordForm = document.getElementsByTagName('form')[0];
let searchWordForm = document.getElementsByTagName('form')[1];

let getWordInput = document.getElementsByTagName('input')[0];
let searchWordInput = document.getElementsByTagName('input')[1];

let searchedWord = document.getElementsByTagName('h2')[0];
let searchedDefinitions = document.getElementsByTagName('p')[0];

let prevButton = document.getElementsByTagName('button')[2];
let nextButton = document.getElementsByTagName('button')[3];

let index = 0;
let searchedDefinitionsArray = []

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


const getWord = async (e, url) => {
    e.preventDefault();
    const data = await getData(url);
    let definitionArray = []
    data.map((word) => {
        word.meanings.map((meaning) => {
            meaning.definitions.map((def) => {
                definitionArray.push(def.definition)
            })
        })

    })
    window.localStorage.setItem(getWordInput.value.toLowerCase().trim(), JSON.stringify(definitionArray));


    getWordForm.reset();
};

const searchWord = (e) => {
    e.preventDefault();

    let data = JSON.parse(window.localStorage.getItem(searchWordInput.value.toLowerCase().trim()));
    searchedDefinitionsArray = data;

    searchedWord.textContent = searchWordInput.value.toLowerCase().trim();
    searchedDefinitions.textContent = data[0]

    searchWordForm.reset();
}


const next = () => {
    if (index === searchedDefinitionsArray.length - 1) {
        index = 0;
    } else {
        index++;
    }
    searchedDefinitions.textContent = searchedDefinitionsArray[index];
};

const prev = () => {
    if (index === 0) {
        index = searchedDefinitionsArray.length - 1;
    } else {
        index--;
    }
    searchedDefinitions.textContent = searchedDefinitionsArray[index];
};




getWordForm.addEventListener('submit', (e) => getWord(e, `https://api.dictionaryapi.dev/api/v2/entries/en/${getWordInput.value.toLowerCase().trim()}`));
searchWordForm.addEventListener('submit', (e) => searchWord(e));

prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);