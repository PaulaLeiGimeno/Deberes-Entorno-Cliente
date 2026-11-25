/*
Cuando el usuario introduzca el nombre de una película de Star Wars en el formulario, se borren los datos del 
formulario y se realice una petición GET HTTP a la SWAPI - The Star Wars API.
Implementa la lógica necesaria para que en la card existente se muestre la información correspondiente a la 
propiedad opening_crawl de la respuesta. La información se mostrará de modo que cada letra se irá escribiendo 
cada 2 milisegundos. (3 puntos). 
*/

let form = document.getElementsByTagName('form')[0];
let filmInput = document.getElementsByTagName('input')[0];
let putOpeningCrawlHere = document.getElementsByTagName('span')[0];
let openingCrawl = '';


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
    openingCrawl = '';
    const data = await getData(url);
    openingCrawl = data.results[0].opening_crawl;
    showOpeningCrawl()
};


const showOpeningCrawl = () => {
    let counter = 0;
    let newString = ''
    let interval = setInterval(() => {

        if (counter === openingCrawl.length) {
            clearInterval(interval);
        }

        newString = newString + openingCrawl.charAt(counter)
        putOpeningCrawlHere.textContent = newString;
        counter++;

    }, 2);

}


const validateForm = (e) => {
    e.preventDefault();
    getFilm(`https://swapi.dev/api/films/?search=${filmInput.value}`)

    form.reset()

}

form.addEventListener('submit', (e) => validateForm(e))




