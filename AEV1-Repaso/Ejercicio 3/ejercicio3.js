
const galleryName = document.getElementsByTagName('h1')[0]

const prevGalButton = document.getElementsByTagName('span')[0]
const nextGalButton = document.getElementsByTagName('span')[1]
const prevFolderButton = document.getElementsByTagName('span')[2]
const nextFolderButton = document.getElementsByTagName('span')[3]

document.getElementsByTagName('tr')[0].setAttribute('class', 'buttons-top')
document.getElementsByTagName('tr')[0].setAttribute('class', 'buttons-bottom')
document.getElementsByTagName('tr')[1].setAttribute('class', 'images')

const galleries = [['entrantes'], ['fruta', 'tartas'], ['alcohol', 'cafe', 'infusiones']];

let whatGallery = 0;
let whatFolder = 0;

let folderName = document.createElement('h3');
document.getElementsByTagName('td')[2].appendChild(folderName)



const changeImg = () => {
    switch (whatGallery) {
        case 0:
            galleryName.textContent = 'Entrantes';
            folderName.textContent = 'Entrantes'

            break;
        case 1:
            galleryName.textContent = 'Postres';
            if (whatFolder === 0) {
                folderName.textContent = 'Fruta'
            } else {
                folderName.textContent = 'Tartas'
            }
            break;
        case 2:
            galleryName.textContent = 'Bebidas';
            if (whatFolder === 0) {
                folderName.textContent = 'Alcohol'
            } else if (whatFolder === 1) {
                folderName.textContent = 'Cafe'
            } else {
                folderName.textContent = 'Infusiones'
            }
            break;

    }
    document.getElementsByTagName('img')[0].src = './src/' + galleries[whatGallery][whatFolder] + '/1.jpg'

}
changeImg()

const goToPrevGal = () => {
    whatFolder = 0
    if (whatGallery == 0) {
        whatGallery = 2
    } else {
        whatGallery--
    }
    changeImg()

}
const goToNextGal = () => {
    whatFolder = 0
    if (whatGallery == 2) {
        whatGallery = 0
    } else {
        whatGallery++
    }
    changeImg()
}
const goToPrevFolder = () => {

    if (whatGallery != 0) {
        if (whatFolder == 0) {
            whatFolder = (galleries[whatGallery].length - 1)
        } else {
            whatFolder--
        }
    }
    changeImg()
}
const goToNextFolder = () => {
    if (whatGallery != 0) {
        if (whatFolder == (galleries[whatGallery].length - 1)) {
            whatFolder = 0
        } else {
            whatFolder++
        }
    }
    changeImg()
}

nextFolderButton.addEventListener('click', () => goToNextFolder())
nextGalButton.addEventListener('click', () => goToNextGal())
prevFolderButton.addEventListener('click', () => goToPrevFolder())
prevGalButton.addEventListener('click', () => goToPrevGal())



const clickingOnTheSmallImg = (j) => {
    if (document.getElementsByTagName('td').length > 6) {
            document.getElementsByClassName('images')[0].remove()
    let newTr = document.createElement('tr')
    newTr.setAttribute('class', 'images')



    let newTd = document.createElement('td');
    let newImage = document.createElement('img');

    newImage.setAttribute('src', './src/' + galleries[whatGallery][whatFolder] + '/' + j + '.jpg')
    newImage.addEventListener('click', () => clickingOnTheSmallImg(j))
    newTr.appendChild(newTd);
    newTd.appendChild(newImage)

    document.getElementsByTagName('tr')[0].insertAdjacentElement('afterend', newTr)
    } else {
        showAllImages()
    }
}

const showAllImages = () => {

    document.getElementsByTagName('tr')[0].style.display = 'none';
    document.getElementsByTagName('tr')[2].style.display = 'none';

    folderName.style.display = 'none'

    document.getElementsByClassName('images')[0].remove()
    let newTr = document.createElement('tr')
    newTr.setAttribute('class', 'images')

    for (let i = 1; i < 6; i++) {
        let newTd = document.createElement('td');
        let newImage = document.createElement('img');
        newImage.setAttribute('src', ('./src/' + galleries[whatGallery][whatFolder] + '/' + i + '.jpg'))
        newTd.setAttribute('id', i)
        newTd.appendChild(newImage)
        newTr.appendChild(newTd);

        newImage.addEventListener('click', () => clickingOnTheSmallImg(i))
    }
    document.getElementsByTagName('tr')[0].insertAdjacentElement('afterend', newTr)

}







const goBack = () => {
    document.getElementsByTagName('tr')[0].style.display = 'block'
    document.getElementsByTagName('tr')[2].style.display = 'block'

    document.getElementsByClassName('images')[0].remove()
    let newTr = document.createElement('tr')
    newTr.setAttribute('class', 'images')



    let newTd = document.createElement('td');
    let newImage = document.createElement('img');

    newImage.setAttribute('src', '')
    newTr.appendChild(newTd);
    newTd.appendChild(newImage)

    document.getElementsByTagName('tr')[0].insertAdjacentElement('afterend', newTr)


    changeImg()
    document.getElementsByTagName('img')[0].addEventListener('click', () => showAllImages())
}

document.getElementsByTagName('img')[0].addEventListener('click', () => showAllImages())
galleryName.addEventListener('click', () => goBack())