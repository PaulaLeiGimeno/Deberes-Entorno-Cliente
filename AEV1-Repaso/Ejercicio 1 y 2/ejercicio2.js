const main = document.getElementsByTagName('main')[0]

let divModal = document.createElement('div');
divModal.setAttribute('class', 'modal');
divModal.style.backgroundColor = 'white';
divModal.style.width = '30%';
divModal.style.height = '10%';


let closeButton = document.createElement('span');
closeButton.setAttribute('class', 'close-button');
closeButton.textContent = 'x';

let form = document.createElement('form');


let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('name', 'Nombre');
input.setAttribute('placeholder', 'Nombre');
input.style.color = 'black';

let submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('name', 'Enviar');

divModal.appendChild(closeButton);
divModal.appendChild(form);
form.appendChild(input);
form.appendChild(submitButton);
main.appendChild(divModal);

const validateForm = (e) => {
    e.preventDefault();
    let regex = /^[a-zA-Z]+$/
    if (!regex.test(input.value)) {
        alert('Has introducido un caracter no permitido')
    } else {
        if (input.value == 'Frutas' || input.value == 'frutas') {
            fruitOrVeggie.textContent = 'Frutas'
            checkFruitOrVeggie();
            closeModalScreen()
        } else if (input.value == 'Verduras' || input.value == 'verduras') {
            fruitOrVeggie.textContent = 'Verduras'
            checkFruitOrVeggie();
            closeModalScreen()
        } else {
            alert('Tiene que ser Frutas o Verduras')
        }
    }

}




const showModalScreen = () => {
    divModal.className = 'modal show-modal'
}
const closeModalScreen = () => {
    divModal.className = 'modal'
}
fruitOrVeggie.addEventListener('click', showModalScreen)
closeButton.addEventListener('click', closeModalScreen)
form.addEventListener('submit', (e) => validateForm(e))