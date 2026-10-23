/*
 Realizar un script para que al pulsar sobre el botón “Añadir monumento”
del siguiente formulario, se guarde en el navegador el nombre del
monumento, el país donde está ubicado y una URL donde se encuentra una imagen del
monumento.
En el buscador de monumentos al escribir el nombre del documento y pulsar “Mostrar
datos”, se añadirán debajo el nombre y el país del monumento. Al pulsar “Borrar
monumento” se borrará el registro del monumento y, al pulsar ”Borrar todos”, se
borrarán todos los datos guardados en el navegador.
*/

let monumentInput = document.getElementsByName('monument')[0];
let countryInput = document.getElementsByName('country')[0];
let photoInput = document.getElementsByName('photo')[0];

let monumentForm = document.getElementsByTagName('form')[2];


const saveMonument = (e) => {
    e.preventDefault();

    let obj = {
        'name': monumentInput.value,
        'country': countryInput.value,
        'photo': photoInput.value
    }

    window.localStorage.setItem(monumentInput.value, JSON.stringify(obj))

}
monumentForm.addEventListener('submit', (e) => saveMonument(e))

let geMonumentInput = document.getElementsByName('get_data')[2];
let getMonumentButton = document.getElementsByName('button_get_data')[2];


let monumentTitle = document.getElementsByName('monument_title')[0];
let monumentCountry = document.getElementsByName('monument_country')[0];
let monumentImg = document.getElementById('image');


const searchMonument = () => {


    if (window.localStorage.getItem(geMonumentInput.value)) {
        let monumentToSearch = JSON.parse(window.localStorage.getItem(geMonumentInput.value));




        monumentTitle.textContent = monumentToSearch.name
        monumentCountry.textContent = monumentToSearch.country
        monumentImg.src = monumentToSearch.photo


    } else {
        alert('Ese monumento no ha sido registrado')
    }



}

getMonumentButton.addEventListener('click', searchMonument)



let deleteMonumentButton = document.getElementsByName('button_delete_item')[2];
let deleteAllMonumentsButton = document.getElementsByName('button_delete_all')[2];

const deleteMonument = () => {
    if (window.localStorage.getItem(geMonumentInput.value)) {
        window.localStorage.removeItem(geMonumentInput.value);

        monumentTitle.textContent = '';
        monumentCountry.textContent = '';
        monumentImg.src = 'https://dbdzm869oupei.cloudfront.net/img/quadres/preview/40446.png'

        alert('Monumento borrado')
    } else {
        alert('Monumento no encontrado')
    }
}

deleteMonumentButton.addEventListener('click', deleteMonument)
deleteAllMonumentsButton.addEventListener('click', deleteAll)



