


const fruitOrVeggie = document.getElementsByTagName('h1')[0];
const categories = document.getElementsByTagName('p');
const nameFood = document.getElementsByTagName('h2')[0];
const carrouselImg = document.getElementsByTagName('img')[0];
const prevButton = document.getElementsByTagName('button')[0];
const nextButton = document.getElementsByTagName('button')[1];

let names = [];
let photoArray = [];
let counter = 1;
let currentImageFood = '';

const checkFruitOrVeggie = () => {
    if (fruitOrVeggie.textContent == 'Frutas') {
        names = ['Naranja', 'Fresa', 'Melón  blanco', 'Sandía', 'Melocotón']
        photoArray = ['frutas/orange', 'frutas/strawberry', 'frutas/melon', 'frutas/watermelon', 'frutas/peach']

    } else {
        names = ['Cebolla  dulce', 'Cebolla morada', 'Tomate  cherry', 'Tomate  raf', 'Tomate rosa'];
        photoArray = ['verduras/cebolla_dulce', 'verduras/cebolla_morada', 'verduras/tomate_cherry', 'verduras/tomate_raf', 'verduras/tomate_rosa']
    }
    for (let i = 0; i < names.length; i++) {
        categories[i].textContent = names[i]

    }
    if(carrouselImg.src.length>0){
        carrouselImg.src=''
    }
    
}

checkFruitOrVeggie();


document.getElementsByClassName('vignette')[0].remove();
const mouseOver = (i) => {
    categories[i].style.opacity = '1'


    let newVignete = document.createElement('div');
    newVignete.setAttribute('class', 'vignette');
    let newVigneteImg = document.createElement('img');
    newVignete.appendChild(newVigneteImg);
    newVigneteImg.setAttribute('src', './images/' + photoArray[i] + '/1.jpg');
    newVigneteImg.style.opacity = '0.5'
    categories[i].appendChild(newVignete)


    nameFood.textContent = names[i]
    carrouselImg.src = './images/' + photoArray[i] + '/' + counter + '.jpg';
    currentImageFood = photoArray[i]

};
const mouseOut = () => {
    for (let i = 0; i < names.length; i++) {
        categories[i].style.opacity = '0.5'
    }
    if (document.getElementsByClassName('vignette').length > 0) {
        document.getElementsByClassName('vignette')[0].remove();
    }


};

for (let i = 0; i < names.length; i++) {
    categories[i].addEventListener('mouseover', () => mouseOver(i))
    categories[i].addEventListener('mouseout', () => mouseOut())
}

const prevImage = () => {
    if (counter == 1) {
        counter = 4
    } else {
        counter--
    }
    carrouselImg.src = './images/' + photoArray[i] + '/' + counter + '.jpg';

}
const nextImage = () => {
    if (counter == 4) {
        counter = 1
    } else {
        counter++
    }
    carrouselImg.src = './images/' + currentImageFood + '/' + counter + '.jpg';
}



prevButton.addEventListener('click', () => prevImage())
nextButton.addEventListener('click', () => nextImage())

