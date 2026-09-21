/*
Implementa un script ‘ejercicio3.js’ que permita validar el formulario del archivo ejercicio3.html de  modo que 
compruebes que al pulsar sobre ‘enviar’, todos los campos del formulario contengan información correcta.

Si en un campo del formulario no se introduce ningún dato o se introduce un dato incorrecto, se cambiará el color 
de ese campo a rojo. Si todos los campos del formulario son correctos, introduce en el último párrafo  del  archivo 
HTML  la  reseña  y  el  resto  de  los  datos introducidos por el usuario.  
*/
let form = document.getElementsByTagName('form')[0]
let reviewAndData = document.getElementsByTagName('p')[1]

let inputs = document.getElementsByTagName('input');
let calificacioneishon = document.getElementsByTagName('select')[0];
let review = document.getElementsByTagName('textarea')[0]
let notAClanker = document.getElementsByTagName('input')[7];
let submit = document.getElementsByTagName('input')[8];
let moviesAWeek = document.getElementsByName('frequency');

let nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
let yearRegex = /^[0-9]+$/;
let movieNameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/;

let isCorrect = true;
let category = '';
let movieFrequency = '';
let alermsg = '';


function isWrong(e) {
    isCorrect = false;
    e.style.backgroundColor = 'red';
}
function resetEverything() {
    isCorrect = true;
    alermsg = ''
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = 'white';
    }
    calificacioneishon.style.backgroundColor = 'white';
    review.style.backgroundColor = 'white';
}

function everythingFilled() {

    for (let i = 0; i < inputs.length - 2; i++) {
        if (inputs[i].value.trim() == "") {
            isWrong(inputs[i]);
            alermsg = 'Rellena todos los campos\n';
        }
    }
    if (calificacioneishon.value == '') {
        isWrong(calificacioneishon);
        alermsg = alermsg + 'Selecciona una calificación\n'
    }
    if (review.value == '') {
        isWrong(review);
        alermsg = alermsg + 'Escribe tu reseña \n'
    }
    if (!notAClanker.checked) {
        isWrong(notAClanker);
        alermsg = alermsg + 'NO BOTS ALLOWED \n'
    }
}
function regexTesting() {
    if (nameRegex.test(inputs[0].value) == false) {
        isWrong(inputs[0])
        alermsg = alermsg + 'Estás usando caracteres prohibidos en tu nickname\n'
    }
    if (movieNameRegex.test(inputs[1].value) == false) {
        isWrong(inputs[1])
        alermsg = alermsg + 'Estás usando caracteres prohibidos en el nombre de la película\n'
    }
    if (yearRegex.test(inputs[2].value) == false) {
        isWrong(inputs[2])
        alermsg = alermsg + 'Estás usando caracteres prohibidos en el año\n'
    }
    if (nameRegex.test(inputs[3].value) == false) {
        isWrong(inputs[3])
        alermsg = alermsg + 'Estás usando caracteres prohibidos en el nombre del director\n'
    }
    if (nameRegex.test(review.value) == false) {
        isWrong(inputs[0])
        alermsg = alermsg + 'Estás usando caracteres prohibidos en tu reseña\n'
    }

}
function validateForm(event) {
    event.preventDefault();

    resetEverything();
    everythingFilled();
    regexTesting();

    switch (calificacioneishon.value) {
        case 4:
            category = 'aburrida'
            break;
        case 5:
            category = 'ni fu ni fa'
            break;
        case 6:
            category = 'pasable'
            break;
        case 7:
            category = 'no mala'
            break;
        case 8:
            category = 'buena'
            break;
        case 9:
            category = 'recomendable'
            break;
        case 10:
            category = 'su peli favorita'
            break;
    }


    switch (moviesAWeek.value) {
        case 'frequency-low':
            movieFrequency = 'una o ninguna'
            break;
        case 'frequency-normal':
            movieFrequency = 'dos o tres'
            break;
        case 'frequency-high':
            movieFrequency = 'cuatro o más'
            break;

    }


    if (isCorrect == true) {
        content = 'El usuario ' + inputs[0].value.toUpperCase() + ', que ve ' + movieFrequency + 'pelis a la semana, opina que ' + inputs[1].value.toUpperCase() + " (" + inputs[2].value + ") de " + inputs[3].value + " es " + category;
        reviewAndData.textContent = content;
        console.log(content)
    } else {
        alert(alermsg)
    }
}

form.addEventListener('submit', (event) => validateForm(event));