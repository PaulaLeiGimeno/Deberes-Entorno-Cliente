

let nextPage = '';
let prevPage = '';
let array = [];
let favCharArray = []




let card = document.getElementsByClassName('card')[1]
let modal = document.getElementsByClassName('modal')[0];
let favCharInput = document.getElementsByClassName('input')[0];
let favCharButton = document.getElementsByClassName('send')[0];
let form = document.getElementsByTagName('form')[0]
let favModal = document.getElementsByClassName('modal')[1];
let header = document.getElementsByClassName('header')[0];

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        const audio = new Audio('Sad_Trombone.mp3');
        audio.play();
    }
}

let getCharacter = async (url) => {
    let data = await getData(url)

    nextPage = data.info.next
    prevPage = data.info.prev


    data.results.map(async characterData => {
        let promise = characterData.episode.map((chara) => {
            return getData(chara)
        })
        let chapters = await Promise.all(promise)

        let obj = {
            "name": characterData.name,
            "img": characterData.image,
            "episodes": chapters
        }

        array.push(obj)
        createCard(obj);


    })



}

const showModal = (obj) => {
    modal.className = 'modal show-modal';
    if (document.getElementsByTagName('p').length > 0) {
        Array.from(document.getElementsByTagName('p')).map((p) => {
            p.remove();
        })
    }
    obj.episodes.map((chapter) => {
        let p = document.createElement('p');
        p.style.color = 'black'
        p.textContent = `${chapter.episode}: ${chapter.name}`;
        card.appendChild(p);
    })
}

const createFavContainer = (imgSrc, tagText) => {
    let favImg = document.createElement('img');
    let tag = document.createElement('span');
    let container = document.createElement('div');

    container.setAttribute('class', 'characterContainer')
    tag.setAttribute('class', 'tag')

    container.appendChild(favImg)
    container.appendChild(tag)

    container.addEventListener('click',()=> removeCharacterFromFavs(tagText))

    document.getElementsByClassName('modal-content')[1].appendChild(container)

    favImg.src = imgSrc;
    tag.textContent = tagText;
}


const removeCharacterFromFavs=(name)=>{
    window.localStorage.removeItem(name)
    showFavModal()

}
const getOneCharacter = async (url, e) => {
    e.preventDefault();

    let data = await getData(url);
    createFavContainer(data.results[0].image, data.results[0].name)

    let obj = {
        'imgSrc': data.results[0].image,
        'tagText': data.results[0].name
    }

    window.localStorage.setItem(data.results[0].name, JSON.stringify(obj));

}

const showFavModal = () => {
    if (document.getElementsByClassName('characterContainer').length > 0) {
        Array.from(document.getElementsByClassName('characterContainer')).map((container) => {
            container.remove();
        })
    }

    favModal.className = 'modal show-modal';

    for (let i = 0; i < localStorage.length; i++) {

        let data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        createFavContainer(data.imgSrc, data.tagText);
    }
}

const createCard = (obj) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card')

    let photo = document.createElement('div');
    photo.setAttribute('class', 'photo')

    photo.style.backgroundImage = `url(${obj.img})`
    photo.style.backgroundRepeat = 'no-repeat';

    let footer = document.createElement('div');
    footer.setAttribute('class', 'footer')

    let titles = document.createElement('div');
    titles.setAttribute('class', 'titles')

    let bigger = document.createElement('div');
    bigger.setAttribute('class', 'bigger')

    let trigger = document.createElement('div');
    trigger.setAttribute('class', 'trigger')
    trigger.textContent = 'AMPLIAR'
    trigger.addEventListener('click', () => showModal(obj))

    let title = document.createElement('h2');
    title.setAttribute('class', 'card-title')
    title.textContent = obj.name



    document.getElementsByClassName('grid')[0].appendChild(card)
    card.appendChild(photo)
    card.appendChild(footer)
    footer.appendChild(titles)
    titles.appendChild(title)
    footer.appendChild(bigger)
    bigger.appendChild(trigger)
}


document.getElementsByClassName('close-button')[0].addEventListener('click', function () {
    modal.className = 'modal';
});
document.getElementsByClassName('close-button')[1].addEventListener('click', function () {
    favModal.className = 'modal';
});

if (document.getElementsByClassName('card').length > 0) {
    document.getElementsByClassName('card')[0].remove()
}


getCharacter('https://rickandmortyapi.com/api/character');
form.addEventListener('submit', (e) => getOneCharacter(`https://rickandmortyapi.com/api/character/?name=${favCharInput.value}`, e))
header.addEventListener('click', showFavModal)