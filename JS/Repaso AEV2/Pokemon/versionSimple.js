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
if (document.getElementsByClassName('card').length > 0) {
    document.getElementsByClassName('card')[0].remove()
}


let getPokemons = async (url) => {
    let data = await getData(url);
    let promise = data.results.map((pokemon) => {
        return getData(pokemon.url)
    })

    let pokemons = await Promise.all(promise);

    pokemons.map((pokemon) => {
        let obj = {
            'name': pokemon.name,
            'front_default': pokemon.sprites.front_default,
            'back_default': pokemon.sprites.back_default,
            'front_shiny': pokemon.sprites.front_shiny,
            'back_shiny': pokemon.sprites.back_shiny,
        }
        createCard(obj)

    })

}

const createCard = (obj) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card')

    let photo = document.createElement('div');
    photo.setAttribute('class', 'photo')

    photo.style.backgroundImage = `url(${obj.front_default})`

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

window.addEventListener('load', () => getPokemons('https://pokeapi.co/api/v2/pokemon'))