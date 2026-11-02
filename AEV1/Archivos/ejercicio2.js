const menuOptions = document.getElementsByTagName('li');
const title = document.getElementsByTagName('h1')[0];
const paragraphs = document.getElementsByTagName('p');
const divWithButtons = document.getElementsByTagName('div')[0];

const buildingFolder = ['hemisferic', 'museu', 'oceanografic', 'palau', 'umbracle'];
let isPShowing = true;
let currentFolder = 0;

const titleMouseOver = () => {
    title.style.background = 'url(./imagenes/' + buildingFolder[currentFolder] + '/2.jpg) no-repeat'
}
const titleMouseOut = () => {
    title.style.background = 'url(./imagenes/' + buildingFolder[currentFolder] + '/1.jpg) no-repeat'
}
const clickMenu = (i) => {
    title.style.background = 'url(./imagenes/' + buildingFolder[i] + '/1.jpg) no-repeat'
    currentFolder = i
    title.addEventListener('mouseover', titleMouseOver)
    title.addEventListener('mouseout', titleMouseOut)
}
const showOrHideP = () => {
    if (isPShowing === false) {
        paragraphs[0].style.display = 'block'
        divWithButtons.style.display = 'block'
        isPShowing = true;
    } else {
        paragraphs[0].style.display = 'none'
        divWithButtons.style.display = 'none'
        isPShowing = false;
    }

}

showOrHideP();

for (let i = 1; i < paragraphs.length; i++) {
    paragraphs[i].style.display = 'none';
}

paragraphs[0].textContent = 'La Ciudad de las Artes y las Ciencias es un complejo arquitectónico, cultural y de entretenimiento.';


for (let i = 0; i < buildingFolder.length; i++) {
    menuOptions[i].addEventListener('click', () => clickMenu(i))
}

title.addEventListener('click', showOrHideP)



