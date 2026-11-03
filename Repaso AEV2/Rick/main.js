

let nextPage = '';
let prevPage = '';
let array = [];



let tag = document.getElementsByClassName('tag')[0];
let card = document.getElementsByClassName('card')[0]
let modal = document.getElementsByClassName('modal')[0];
let favCharInput = document.getElementsByClassName('input')[0];
let favCharButton = document.getElementsByClassName('send')[0];
let form = document.getElementsByTagName('form')[0]
let favImg = document.getElementsByTagName('img')[0];
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
    console.log(data.results.episode)

    await Promise.all(
        data.results.map(async (characterData) => {


        let promise = characterData.episode.map((chara) => {
            return getData(chara)
        })

        let obj = {
            "name": characterData.name,
            "img": characterData.image,
            "episodes": rick
        }

        array.push(obj)
        createCard(obj);


    })
    )

}

const showModal = (obj) => {
    modal.className = 'modal show-modal';

    obj.episodes.map((chapter) => {
        let tag = document.createElement('span');
        tag.setAttribute('class', 'tag');
        tag.textContent = `${chapter.episode}: ${chapter.name}`;
        card.appendChild(tag);
    })
}

const getOneCharacter = async (url, e) => {
    e.preventDefault();
    let data = await getData(url);

    console.log(data.results)
    favImg.src = data.results[0].image;

    console.log(data.results[0].name);
    tag.textContent = data.results[0].name

}

const showFavModal = () => {
    favModal.className = 'modal show-modal';

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


//getCharacter('https://rickandmortyapi.com/api/character');
form.addEventListener('submit', (e) => getOneCharacter(`https://rickandmortyapi.com/api/character/?name=${favCharInput.value}`, e))
header.addEventListener('click', showFavModal)