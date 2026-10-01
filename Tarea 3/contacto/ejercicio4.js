/*
Implementa un script donde generes un formulario  de  manera  dinámica  con  los  siguientes  campos: 
‘Nombre’,  ‘Primer  apellido’,  ‘Segundo  apellido’,  ‘DNI’.  

Se deberá comprobar que el usuario introduce datos correctos en cada  campo  del  formulario. 
De  lo  contrario  saltará  una  alerta indicando qué datos son erróneos. Nota: sírvete de los estilos 
ya definidos en el archivo contacto.css. 
*/

const appendFormHere = document.getElementsByTagName('div')[0];
const textRegex = /^[a-zA-Z]+$/;
const phoneRegex = /^[0-9]{9}$/i;
let errorAlert = [];

const form = document.createElement('form');
appendFormHere.insertAdjacentElement('afterend', form);

let inputsArray = ['Nombre', 'Primer apellido', 'Segundo apellido', 'Num. Tel'];

for (let i = 0; i < inputsArray.length; i++) {
    let newInput = document.createElement('input');
    let newDiv = document.createElement('div');

    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', inputsArray[i])
    newInput.setAttribute('id', i)
    newInput.setAttribute('class', 'input')

    form.appendChild(newDiv)
    newDiv.appendChild(newInput)
}

let sendInput = document.createElement('input');
sendInput.setAttribute('type', 'submit');
sendInput.setAttribute('value', 'Enviar');

sendInput.style.marginTop = '30px';
sendInput.style.color = '#05A8AA';
sendInput.style.fontSize = '20px';

form.appendChild(sendInput)

let checkIfEmpty = () => {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].value.trim().length === 0) {
            errorAlert.push('Error en ' + inputsArray[i] + ": Está vacío");
        }
    }
}

let checkPhone = () => {
    let phoneInput = document.getElementById('3');
    if (phoneInput.value.length > 0 && !phoneRegex.test(phoneInput.value)) {
        errorAlert.push('Error en el número de teléfono: Formato incorrecto');
    }
}

let checkNames = () => {
    let namesInput = document.getElementsByTagName('input');
    for (let i = 0; i < 3; i++) {
        if (namesInput[i].value.length > 0 && !textRegex.test(namesInput[i].value)) {
            errorAlert.push('Error en ' + inputsArray[i] + ": Has puesto un carácter no permitido");
        }
    }
}

let validateForm = (event) => {
    event.preventDefault();


    errorAlert = [];

    checkIfEmpty();
    checkNames();
    checkPhone();


    if (errorAlert.length === 0) {
        alert('Datos correctos');
        form.reset();
    } else {
        alert(errorAlert.join('\n'));
    }
}
form.addEventListener('submit', (event) => validateForm(event))

