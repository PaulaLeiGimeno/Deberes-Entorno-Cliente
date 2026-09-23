/*
Implementa un script ‘ejercicio3.js’ que permita validar el formulario del archivo ejercicio3.html de  modo que 
compruebes que al pulsar sobre ‘enviar’, todos los campos del formulario contengan información correcta.

Si en un campo del formulario no se introduce ningún dato o se introduce un dato incorrecto, se cambiará el color 
de ese campo a rojo. Si todos los campos del formulario son correctos, introduce en el último párrafo  del  archivo 
HTML  la  reseña  y  el  resto  de  los  datos introducidos por el usuario.  
*/
const form = document.getElementsByTagName('form')[0]
const reviewAndData = document.getElementsByTagName('p')[1]

const inputs = document.getElementsByTagName('input');
const califications = document.getElementsByTagName('select')[0];
const moviesAWeek = document.getElementsByName('frequency');
const review = document.getElementsByTagName('textarea')[0]
const human = document.getElementsByTagName('input')[7];
const submit = document.getElementsByTagName('input')[8];


const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
const yearRegex = /^[0-9]+$/;
const movieNameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/;

let category = '';
let movieFrequency = '';
let alerts = [];


function isWrong(e) {
    e.style.backgroundColor = 'red';
}
function resetEverything() {
    alerts = [];
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = 'white';
    }
    califications.style.backgroundColor = 'white';
    review.style.backgroundColor = 'white';
}

function everythingFilled() {
    let haveWeBeenHereBeforeCaptain = false;
    for (let i = 0; i < 4; i++) {
        if (inputs[i].value.trim() == "") {
            isWrong(inputs[i]);
            haveWeBeenHereBeforeCaptain = true

        }
    }
    if (haveWeBeenHereBeforeCaptain) {
        alerts.push('Rellena los campos que faltan\n');
    }
    if (califications.value == '') {
        isWrong(califications);
        alerts.push('Selecciona una calificación\n');
    }
    if (review.value == '') {
        isWrong(review);
        alerts.push('Escribe tu reseña \n');
    }
    if (!human.checked) {
        isWrong(human);
        alerts.push('No puedes ser un robot \n');
    }
}
function regexTesting() {
    if (alerts.length == 0) {
        if (!nameRegex.test(inputs[0].value)) {
            isWrong(inputs[0])
            alerts.push('Estás usando caracteres prohibidos en tu nickname\n');
        }
        if (!movieNameRegex.test(inputs[1].value)) {
            isWrong(inputs[1])
            alerts.push('Estás usando caracteres prohibidos en el nombre de la película\n');
        }
        if (!yearRegex.test(inputs[2].value)) {
            isWrong(inputs[2])
            alerts.push('Estás usando caracteres prohibidos en el año\n');
        }
        if (!nameRegex.test(inputs[3].value)) {
            isWrong(inputs[3])
            alerts.push('Estás usando caracteres prohibidos en el nombre del director\n');
        }
        if (!nameRegex.test(review.value)) {
            isWrong(review)
            alerts.push('Estás usando caracteres prohibidos en tu reseña\n');
        }
    }
}

function checkCalifications() {
    switch (califications.value) {
        case '4':
            category = 'aburrida'
            break;
        case '5':
            category = 'ni fu ni fa'
            break;
        case '6':
            category = 'pasable'
            break;
        case '7':
            category = 'no mala'
            break;
        case '8':
            category = 'buena'
            break;
        case '9':
            category = 'recomendable'
            break;
        case '10':
            category = 'su peli favorita'
            break;
    }

}
function checkFrequency() {
    for (let i = 0; i < moviesAWeek.length; i++) {
        if (moviesAWeek[i].checked) {
            switch (moviesAWeek[i].id) {
                case 'frequency-low':
                    movieFrequency = 'una o ninguna';
                    break;
                case 'frequency-normal':
                    movieFrequency = 'dos o tres';
                    break;
                case 'frequency-high':
                    movieFrequency = 'cuatro o más';
                    break;
            }
            break;
        }
    }
}

function validateForm(event) {
    event.preventDefault();

    resetEverything();
    everythingFilled();
    regexTesting();
    checkCalifications()
    checkFrequency()


    if (alerts.length == 0) {
        reviewAndData.textContent = `El usuario ${inputs[0].value}, que ve ${movieFrequency} pelis a la semana, opina que ${inputs[1].value.toUpperCase()} (${inputs[2].value}) de ${inputs[3].value} es ${category} y que '${review.value}'`;
    } else {
        alert(alerts.join(''))
    }
}

form.addEventListener('submit', (event) => validateForm(event));

