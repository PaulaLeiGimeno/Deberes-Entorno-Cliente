let wordInput = document.getElementsByName('word-search')[0];
let wordButton = document.getElementsByName('word-btn')[0];
let prevButton = document.getElementsByName('synonym-prev')[0];
let nextButton = document.getElementsByName('synonym-next')[0];
let index = 0;

let synonymArray = []
let consultedWords = []

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}




const getWord = async (url) => {
    synonymArray = []
    index = 0;
    let data = await getData(url);
    
    data.map((word) => {
        word.meanings.map((meaning) => {
            meaning.synonyms.map((synonym) => {
                synonymArray.push(synonym)
            })
        })
    })

    consultedWords.push(data[0].word)

    document.getElementById('synonym-word').textContent = data[0].word
    document.getElementById('synonym-text').textContent = synonymArray[index].toString(', ');
    document.getElementById('words-history').textContent = consultedWords.toString(', ')
}





const next = () => {
    if (index === synonymArray.length - 1) {
        index = 0;
    } else {
        index++;
    }

    document.getElementById('synonym-text').textContent = synonymArray[index];
};

const prev = () => {
    if (index === 0) {
        index = synonymArray.length - 1;
    } else {
        index--;
    }

    document.getElementById('synonym-text').textContent = synonymArray[index];
};


prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);


wordButton.addEventListener('click', () => getWord(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`))