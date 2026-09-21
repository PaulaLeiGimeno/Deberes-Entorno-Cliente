/*
Implementa  un script  ‘ejercicio1.js’ que permita validar  el  formulario  del  archivo  ejercicio1.html  de  
modo que compruebes  que  al  pulsar  sobre  ‘enviar’,  el  nombre  y  los apellidos indicados en los campos 
correspondientes del formulario estén compuestos por letras y el DNI sea un número  de  ocho  cifras.  

Al  validar  el  número   del   DNI  se calculará  la  letra  del  DNI  correspondiente al número de ocho 
cifras introducido.  

Si en un campo del formulario no se introduce  ningún  dato  o  se  introduce  un  dato  incorrecto,  se cambiará
el  color  de  ese  campo  a  rojo.  

Si  todos  los  campos del  formulario  son  correctos, saltará una alerta  indicando  la letra  del DNI calculada  
y se borrarán los datos introducidos el formulario. 
*/
let form = document.getElementsByTagName('form')[0];
let nameInput = document.getElementsByTagName('input')[0];
let lastNameInput = document.getElementsByTagName('input')[1];
let lastestNameInput = document.getElementsByTagName('input')[2];
let dniInput = document.getElementsByTagName('input')[3];
let submitButton = document.getElementsByTagName('input')[4];


const validateForm = (e) => {
    e.preventDefault();
    let isCorrect = true;
    let letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    let alertmsg = '';

    const regexDni = /^[0-9]+$/;
    const regexNames = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (regexNames.test(nameInput.value) != true) {
        alertmsg = alertmsg + 'THE NAME IS WRONG';
        nameInput.style.backgroundColor = '#ba2d2d'
        isCorrect = false
    }
    if (regexNames.test(lastNameInput.value) != true) {
        alertmsg = alertmsg + '\nTHE LAST NAME IS WRONG';
        lastNameInput.style.backgroundColor = '#ba2d2d'
        isCorrect = false
    }
    if (regexNames.test(lastestNameInput.value) != true) {
        alertmsg = alertmsg + '\nTHE LASTEST NAME IS WRONG'
        lastestNameInput.style.backgroundColor = '#ba2d2d'
        isCorrect = false
    }

    if (regexDni.test(dniInput.value) == false || dniInput.value.length != 8) {
        alertmsg = alertmsg + '\nTHE NUMBERS MASON'
        dniInput.style.backgroundColor = '#ba2d2d'
        isCorrect = false
    }


    if (isCorrect == true) {
        form.reset();
        alert(letters[parseInt(dniInput.value % 23)]);
    } else {
        alert(alertmsg)
    }


}



form.addEventListener('submit', (e) => validateForm(e)); 
