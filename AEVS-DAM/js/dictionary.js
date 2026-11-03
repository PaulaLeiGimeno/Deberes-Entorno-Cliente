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


let wordInput = document.getElementsByName('word-search')[0];
let wordButton = document.getElementsByName('word-btn')[0];

const getWord = async (url) => {
    let data = await getData(url);
    console.log(data)
}

wordButton.addEventListener('click', ()=>getWord(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`))