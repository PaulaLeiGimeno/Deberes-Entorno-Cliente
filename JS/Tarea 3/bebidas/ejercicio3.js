/*
Actividad 3 – Completa el script anterior para que al pulsar sobre cualquiera de las cinco imágenes de cada categoría, 
la imagen seleccionada se muestre debajo del espacio que ocupan las cinco imágenes. 
*/


let bigImage = document.createElement('img');
let table = document.getElementsByTagName('table')[0];
table.insertAdjacentElement('afterend', bigImage);

bigImage.src = images[0].src
bigImage.style.width = '200px';
bigImage.style.height = '200px';
bigImage.style.justifyContent = 'center';
bigImage.style.display = 'none';

function showBigImage(i) {
    let images = document.getElementsByTagName('img');
    bigImage.src = images[i].src;
    bigImage.style.display = 'inline'
}

function doTheImagesExist() {
    let images = document.getElementsByTagName('img'); 
    if (images.length > 1) {
        for (let index = 1; index < images.length; index++) {
            images[index].addEventListener('click', () => showBigImage(index));
        }
    }
}




