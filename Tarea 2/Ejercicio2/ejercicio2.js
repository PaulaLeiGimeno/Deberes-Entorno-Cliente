/*
Implementa un script ‘ejercicio2.js’ que permita validar  el  formulario  del  archivo  ejercicio2.html  de  
modo  que compruebes  que  al  pulsar  sobre  ‘enviar’,  el  nombre  y  los apellidos indicados en los campos 
correspondientes del formulario estén compuestos por letras y el email sea correcto –deberás  comprobar  que  
se  cumplen  todas  las  condiciones para  ello-.  

Si  en  un  campo  del  formulario  no  se  introduce ningún dato o se introduce  un dato incorrecto,  
se cambiará el color de ese campo a rojo. 

Si todos los campos del formulario son correctos, saltará  una alerta indicando que todos los datos 
introducidos son correctos y se borrarán los datos introducidos en el formulario.
*/

let form = document.getElementsByTagName('form')[0];
let data = document.getElementsByTagName('input');
let inputBox = document.getElementsByClassName('inputs');
let alertmsg = '';
let isCorrect = true;


function isWrong(wrongElement) {
    isCorrect = false;
    wrongElement.style.backgroundColor = "#ba2d2d";
}

function validateForm(e) {
    e.preventDefault();
    isCorrect = true;
    alertmsg = '';
    for (let i = 0; i < data.length - 1; i++) {
        data[i].style.backgroundColor = "white";
    }

    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].value.length == 0) {
            console.log(data[i].value + 'está vacío')
            alertmsg = "Rellena todos los campos"
            isWrong(data[i])
        }
    }
    if (isCorrect) {
        for (let i = 0; i < data.length - 2; i++) {
            let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            if (regex.test(data[i].value) == false) {
                isWrong(data[i])
                alertmsg = 'Los campos de nombre y apellidos deben estar compuestos de letras'
            }
        }

        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(data[3].value) == false) {
            isWrong(data[3])
            console.log('aaaaaa')
            alertmsg = alertmsg + 'El correo es incorrecto'
        }

    }

    if (isCorrect) {
        alert("Todo bien, todo correcto. Y yo que me alegro")
        form.reset();
    } else {
        alert(alertmsg)
    }

}

form.addEventListener('submit', (e) => validateForm(e));


