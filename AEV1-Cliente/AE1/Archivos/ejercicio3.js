const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

const paragraphTextContent = [
    'La Ciudad de las Artes y las Ciencias es un complejo arquitectónico, cultural y de entretenimiento.',
    'Está ubicada al final del viejo cauce del río Turia.',
    'Fue diseñada por Santiago Calatrava y Félix Candela.',
    'Alberto Domingo y Carlos Lázaro diseñaron la estructura de las cubiertas del L\'Oceanografic.'
];
let counter = 0;

const nextParagraph = () => {
    if (counter === paragraphTextContent.length - 1) {
        counter = 0
    } else {
        counter++
    }
    paragraphs[0].textContent = paragraphTextContent[counter];
}
const prevParagraph = () => {
    if (counter === 0) {
        counter = paragraphTextContent.length - 1;
    } else {
        counter--
    }
    paragraphs[0].textContent = paragraphTextContent[counter];
}

prevButton.addEventListener('click', prevParagraph);
nextButton.addEventListener('click', nextParagraph);
