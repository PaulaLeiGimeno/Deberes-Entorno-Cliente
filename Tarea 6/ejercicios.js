import {getData} from "./services/services.js";

/*
Implementa las instrucciones necesarias para que al pulsar sobre el botón de abajo
se renderice la imagen que devuelve la petición GET en la pantalla del navegador. 
Cada vez que se pulse sobre Button, se mostrará una nueva imagen -solo se mostrará una imagen-.
*/


const catButton = document.getElementsByName('cat')[0];

const changeImg = (data) => {
    if (document.getElementsByName('oneCat').length > 0) {
        document.getElementsByName('oneCat')[0].remove();
    }
    let oneCat = document.createElement('img')

    oneCat.setAttribute('src', data.url)
    oneCat.style.height = '300px'


    let newDiv = document.createElement('div')
    newDiv.setAttribute('name', 'oneCat')
    newDiv.style.marginTop = '20px'
    catButton.insertAdjacentElement('afterend', newDiv)
    newDiv.appendChild(oneCat)

}

const getOneCat = async (url) => {
    let data = await getData(url);
    changeImg(data[0])
}

catButton.addEventListener('click', () => getOneCat('https://api.thecatapi.com/v1/images/search?limit=1'))

/*
Partiendo del ejercicio anterior, realiza los ajustes necesarios para que al pulsar
sobre el botón, se rendericen ahora diez imágenes distintas.
*/

const catsButton = document.getElementsByName('cats')[0];

const changeManyImgs = (data) => {


    if (document.getElementsByName('manyCats').length > 0) {
        document.getElementsByName('manyCats')[0].remove()
    }
    let newDiv = document.createElement('div')
    newDiv.setAttribute('name', 'manyCats');
    catsButton.insertAdjacentElement('afterend', newDiv)
    data.map((e) => {
        let newImg = document.createElement('img');
        newImg.setAttribute('src', e.url);
        newImg.style.height = '300px';
        console.log(e.url);
        newDiv.appendChild(newImg);

    })


}


const getManyCats = async (url) => {
    let data = await getData(url);
    changeManyImgs(data)
}

catsButton.addEventListener('click', () => getManyCats('https://api.thecatapi.com/v1/images/search?limit=10'));


/*
A partir de este ejercicio trabajaremos en la API pública de GitHub, que permite
realizar búsquedas entre los perfiles de sus usuarios. 
Implementa la lógica necesaria para que se realice una petición a esta API pública con
el término JavaScript y muestra por consola los resultados de la primera posición del
array de perfiles que devuelve.
Después, si lo crees conveniente, descarga BRUNO y utilízalo para ver cómo se
visualizan los resultados de realizar la misma petición.

Sobre la misma API de GitHub y a partir de los resultados del término de búsqueda
anterior (JavaScript), renderiza ahora la imagen del avatar del primer
resultado del array de perfiles que devuelve la petición.
*/


const oneProfileButton = document.getElementsByName('profiles')[0];

const showFirstProfile = (userData) => {

    if (document.getElementsByName('profileDiv').length > 0) {
        document.getElementsByName('profileDiv')[0].remove();
    }

    let pfp = userData.avatar_url;

    let newDiv = document.createElement('div');
    newDiv.setAttribute('name', 'profileDiv')
    let newImg = document.createElement('img');
    newImg.setAttribute('src', pfp);
    newDiv.appendChild(newImg);

    oneProfileButton.insertAdjacentElement('afterend', newDiv)
}


const getOneProfile = async (url) => {
    let data = await getData(url);
    console.log(data.items[0])
    showFirstProfile(data.items[0])

}

oneProfileButton.addEventListener('click', () => getOneProfile('https://api.github.com/search/users?q=JavaScript'));

/*
Sobre la misma API de GitHub, realiza ahora una petición con el término de
búsqueda ‘David’ y renderiza la imagen del avatar, el login y el id del primer
usuario del array que devuelve la respuesta.
*/


const davidProfileButton = document.getElementsByName('profiles')[1];

const showDavidProfile = (userData) => {

    if (document.getElementsByName('profileDiv').length > 0) {
        document.getElementsByName('profileDiv')[0].remove();
    }

    let davidPfp = userData.avatar_url;
    let davidLogin = userData.login;
    let davidID = userData.id;

    let davidDiv = document.createElement('div');
    davidDiv.setAttribute('name', 'profileDiv');

    let davidInfo = document.createElement('p')
    davidInfo.textContent = 'Login: ' + davidLogin + ' | ID: ' + davidID;


    let newImg = document.createElement('img');
    newImg.setAttribute('src', davidPfp);


    davidDiv.appendChild(newImg);
    davidDiv.appendChild(davidInfo);


    davidProfileButton.insertAdjacentElement('afterend', davidDiv)
}


const getDavidProfile = async (url) => {
    let data = await getData(url);
    console.log(data.items[0])
    showDavidProfile(data.items[0])

}

davidProfileButton.addEventListener('click', () => getDavidProfile('https://api.github.com/search/users?q=David'));

/*
Sobre la misma API de GitHub, guarda ahora en un array todos los resultados de 
la petición GET con la búsqueda ‘David’. A partir del formulario siguiente, 
Crea un formulario para poder mostrar por pantalla la imagen del avatar, id y 
login del número de posición del array que se introduzca por pantalla.
*/

const form = document.getElementsByTagName('form')[0]


const showProfiles = (data) => {
    if (document.getElementsByName('user_div').length > 0) {
        document.getElementsByName('user_div')[0].remove();
    }
    let newDiv = document.createElement('div');
    newDiv.setAttribute('name', 'user_div');

    let newImg = document.createElement('img');
    newImg.setAttribute('src', data.avatar_url);

    let newP = document.createElement('p');
    newP.textContent = 'Login: ' + data.login + ' | ID: ' + data.id;

    newDiv.appendChild(newImg);
    newDiv.appendChild(newP);

    form.insertAdjacentElement('afterend', newDiv)

}

const getProfiles = async (e) => {
    e.preventDefault();

    let userPos = document.getElementsByName('position')[0].value
    let name = document.getElementsByName('search_term')[0].value;

    let url = `https://api.github.com/search/users?q=${name}`;
    console.log(url)
    let data = await getData(url);
    console.log(data.items[userPos])

    if (data.items.length >= userPos) {
        showProfiles(data.items[userPos])
    } else {
        alert('No existe un usuario en esa posición')
    }

}


form.addEventListener('click', (e) => getProfiles(e));