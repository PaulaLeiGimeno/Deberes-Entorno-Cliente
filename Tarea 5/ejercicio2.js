//Realiza un script para que cuando se busque un usuario guardado en el navegador, el
// color de estas letras pase a ser del color guardado para ese usuario.

const form2 = document.getElementsByTagName('form')[1];


const colors = ['firstOption', 'lightgrey', 'green', 'beige', 'yellow', 'salmon', 'red']
const setTextColor = (e) => {
    e.preventDefault();

    let nameInput = document.getElementsByName('name')[1].value;
    let dniInput = document.getElementsByName('dni')[1].value
    let colorsSelect = document.getElementsByTagName('select')[0].value;
    let obj = {
        'name': nameInput,
        'dni': dniInput,
        'color': colors[colorsSelect]
    }
    window.localStorage.setItem(dniInput, JSON.stringify(obj))
    form2.reset()
}

form2.addEventListener('submit', (e) => setTextColor(e));


const searchDniInput = document.getElementsByName('get_data')[1];
const searchDniButton = document.getElementsByName('button_get_data')[1]
const changeColorOfThis = document.getElementById('paragraph');


const changeColor = () => {

    if (window.localStorage.getItem(searchDniInput.value)) {
        let obj = JSON.parse(window.localStorage.getItem(searchDniInput.value));
        changeColorOfThis.style.color = obj.color;

    } else {
        alert('Usuario no encontrado')
    }


}
searchDniButton.addEventListener('click', changeColor)

let deleteInput = document.getElementsByName('delete_item')[1].value;
const deleteAnotherOne = () => {
    if (window.localStorage.getItem(deleteInput)) {
        window.localStorage.getItem(deleteInput);
    } else {
        alert('Usuario no encontrado')
    }
}

deleteOneButtons[0].addEventListener('click', deleteAnotherOne)
deleteAllButtons[1].addEventListener('click', deleteAll)