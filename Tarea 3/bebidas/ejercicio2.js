/*
Actividad 2 – Implementa un script que permita que al pulsar sobre las imágenes implementadas en el script anterior, 
éstas se eliminen y sean reemplazadas por las cinco imágenes correspondientes a cada apartado, incluidas en la 
carpeta src proporcionada -hay 5 imágenes para cada categoría: café, infusiones y alcohol-. 
*/



function showImages(i) {

    let folder;
    switch (i) {
        case 0:
            folder = 'cafe'
            break;
        case 1:
            folder = 'alcohol'
            break;
        case 2:
            folder = 'infusiones'
            break;
    }
    document.getElementsByTagName('tr')[0].remove();
    document.getElementsByTagName('tbody')[0].appendChild(document.createElement('tr'))
    for (let i = 1; i < 6; i++) {
        let newTd = document.createElement('td')
        document.getElementsByTagName('tr')[0].appendChild(newTd)

        let newImg = document.createElement('img');
        newTd.appendChild(newImg)
        newImg.src = 'src/' + folder + '/' + i + '.jpg';
        newImg.setAttribute('type', 'list')
    }
    doTheImagesExist()
}
for (let index = 0; index < 3; index++) {
    document.getElementsByTagName('td')[index].addEventListener('click', () => showImages(index))

}

