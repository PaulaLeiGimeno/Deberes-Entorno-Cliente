let form = document.getElementsByTagName('form')[0];
let firstModal = document.getElementsByClassName('modal')[0];
let secondModal = document.getElementsByClassName('modal')[1];
let closeModalButtons = document.getElementsByClassName('close-button');
let bigImg = document.getElementsByTagName('img')[4];
let userInput = document.getElementsByTagName('input')[0];



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


const getUser = async (e, url) => {
    e.preventDefault();
    const data = await getData(url);

    Array.from(document.getElementsByTagName('img')).map((image, i) => {
        if (i < 4) {
            image.src = data.items[i].avatar_url
        }
    })

    bigImg.src = data.items[0].avatar_url


    form.reset();
};



const openFirstModal = () => {
    firstModal.className = 'modal show-modal';

}
const openSecondModal = () => {
    secondModal.className = 'modal show-modal';
    document.getElementsByTagName('img')[6].src = bigImg.src
}
const changeBigImg = (avatarUrl) => {
    bigImg.src = avatarUrl
}


Array.from(closeModalButtons).map((button, i) => {
    button.addEventListener('click', () => {
        document.getElementsByClassName('modal')[i].className = 'modal'
    }
    )
})

Array.from(document.getElementsByTagName('img')).map((image, i) => {
    if (i < 4) {
        image.addEventListener('click', () => changeBigImg(image.src))
    }
})



form.addEventListener('submit', (e) => getUser(e, `https://api.github.com/search/users?q=${userInput.value.toLowerCase().trim()}`));
document.getElementsByTagName('h1')[0].addEventListener('click', openFirstModal)
bigImg.addEventListener('click', openSecondModal)