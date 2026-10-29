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


let pokeArray = []
let nextPage = '';
let prevPage='';
let photoGoesHere = document.getElementsByClassName('photo')[0];
let titleGoesHere = document.getElementsByClassName('card-title')[0];
let triggerButton = document.getElementsByClassName('trigger')[0];
let renderMoreButton = document.getElementById('render-more')




//https://pokeapi.co/api/v2/pokemon?offset=00&limit=1351

const getPokemon = async (url) => {
    let data = await getData(url);
    console.log(data)
    nextPage=data.next
    prevPage=data.previous

    data.results.map((e) => {
        let obj = {
            "name": e.name,
            "url": e.url
        }
        console.log(obj)
        pokeArray.push(obj)
    })


}








window.addEventListener('load', getPokemon('https://pokeapi.co/api/v2/pokemon'))