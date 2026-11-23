let form = document.getElementsByTagName('form')[0];
let nameInput = document.getElementsByTagName('input')[0];

let charNameGoesHere = document.getElementsByClassName('caption')[0];
let titleGoesHere = document.getElementsByClassName('title')[0];
let crawlGoesHere = document.getElementsByClassName('opening_crawl')[0];


let filmDataArray = [];
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
const getFilm = async (url) => {
    return await getData(url);

}

const getCharacter = async (e, url) => {
    e.preventDefault();
    const data = await getData(url);
    charNameGoesHere.textContent = data.results[0].name;

    let promise = data.results[0].films.map((film) => {
        return getFilm(film)
    })

    filmDataArray = await Promise.all(promise)
    titleGoesHere.textContent = filmDataArray[0].title;
    crawlGoesHere.textContent = filmDataArray[0].opening_crawl;

    let counter = 1;
    setInterval(() => {
        titleGoesHere.textContent = filmDataArray[counter].title;
        crawlGoesHere.textContent = filmDataArray[counter].opening_crawl;

        if (counter === filmDataArray.length - 1) {
            counter = -1;
        }
        counter++;
    }, 1000);


    form.reset();
};

form.addEventListener('submit', (e) => getCharacter(e, `https://swapi.dev/api/people/?search=${nameInput.value.toLowerCase().trim()}`))
