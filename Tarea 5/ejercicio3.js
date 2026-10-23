/*
 Realizar un script para que al pulsar sobre el botón “Añadir monumento”
del siguiente formulario, se guarde en el navegador el nombre del
monumento, el país donde está ubicado y una URL donde se encuentra una imagen del
monumento.
En el buscador de monumentos al escribir el nombre del documento y pulsar “Mostrar
datos”, se añadirán debajo el nombre y el país del monumento. Al pulsar “Borrar
monumento” se borrará el registro del monumento y, al pulsar ”Borrar todos”, se
borrarán todos los datos guardados en el navegador.
*/

let monumentInput = document.getElementsByName('monument')[0];
let countryInput = document.getElementsByName('country')[0];
let photoInput = document.getElementsByName('photo')[0];
let monumentForm = document.getElementsByTagName('form')[0];


const saveMonument=()=>{
    
}
monumentForm.addEventListener('submit',saveMonument)
