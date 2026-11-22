/*
Cuando el usuario introduzca el nombre de un capítulo de Rick and Morty en el formulario, se borren los datos del 
formulario y se realice una petición GET HTTP a la API The Rick and Morty API 
Implementa la lógica necesaria para generar dinámicamente una card como la existente para cada uno de los personajes 
que aparecen en dicho capítulo, de modo que se añadan al contenido de la aplicación. En cada card se mostrará la 
imagen del personaje y el nombre. (3 puntos). 
*/

let form = document.getElementsByTagName('form')[0];
let episodeInput = document.getElementsByTagName('input')[0];
let characterArray = []
let page = document.getElementById('page')

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


const getEpisode = async (url) => {
    const data = await getData(url);
    let promise = data.results[0].characters.map((epi) => {
        return getCharacter(epi)
    })
    characterArray = await Promise.all(promise)

    characterArray.map((character) => {
        createCard(character)
    })

}
const getCharacter = async (url) => {
    return await getData(url)
}
/*
<div class="photo">
            <div class="image-container">
                <img
                    src="https://wallpapers.com/images/featured/imagenes-de-rick-and-morty-b3e2pq02sb2fuvy3.jpg">
            </div>
            <span class="caption">Nombre</span>
</div>
*/

const createCard = (obj) => {
    console.log(obj)

    let divPhoto = document.createElement('div');
    divPhoto.setAttribute('class', 'photo');

    let divImgContainer = document.createElement('div');
    divImgContainer.setAttribute('class', 'image-container')

    let spanCaption = document.createElement('span');
    spanCaption.setAttribute('class', 'caption')
    spanCaption.textContent = obj.name;

    let img = document.createElement('img');
    img.src = obj.image;


    divImgContainer.appendChild(img)
    divImgContainer.appendChild(spanCaption)
    divPhoto.appendChild(divImgContainer)
    page.appendChild(divPhoto)


}



const validateForm = (e, url) => {
    e.preventDefault()
    getEpisode(url)

    if (document.getElementsByClassName('photo').length > 0) {
        Array.from(document.getElementsByClassName('photo')).map((e) => {
            e.remove();
        })
    }



    form.reset()

}
document.getElementsByClassName('photo')[0].remove();

form.addEventListener('submit', (e) => validateForm(e, `https://rickandmortyapi.com/api/episode/?name=${episodeInput.value}`))