/*
Realiza un script para que cuando el usuario pulse el botón “Guardar datos”, se
almacenen en el navegador los datos introducidos. 

Cuando pulse “Mostrar datos”,realizará una búsqueda del usuario cuyo DNI se indique y se mostrarán los datos
de dicho usuario guardados. 

Cuando pulse “Borrar registro”,borrará el usuario con el DNI indicado. Si se pulsa “Borrar todos los registros”, se
borrarán todos los registros guardados.
*/
const inputs = document.getElementsByTagName('input');

const saveData = (e) => {
    e.preventDefault();
    let nameInput = inputs[0].value;
    let fNameInput = inputs[1].value;
    let sNameInput = inputs[2].value;
    let dniInput = inputs[3].value;

    if (window.localStorage.getItem(dniInput)) {
        alert('Un usuario con ese DNI ya ha sido introducido')
    } else {
        let obj = {
            'name': nameInput,
            'fName': fNameInput,
            'sName': sNameInput,
            'dni': dniInput
        }
        window.localStorage.setItem(dniInput, JSON.stringify(obj));
    }
}

document.getElementsByTagName('form')[0].addEventListener('submit', (e) => saveData(e))

const showDataButton = document.getElementsByName('button_get_data')[0]
const showDataHere = document.getElementsByName('print_data')[0];

const showData = () => {
    if (document.getElementsByName('newP').length > 0) {
        document.getElementsByName('newP')[0].remove()
    }
    if (window.localStorage.getItem(inputs[4].value)) {


        let obj = (JSON.parse(window.localStorage.getItem(inputs[4].value)))
        let newP = document.createElement('p');
        newP.setAttribute('name', 'newP')
        newP.textContent = 'Nombre: ' + obj.name +
            ' | Primer apellido: ' + obj.fName +
            ' | Segundo apellido: ' + obj.sName +
            ' | DNI: ' + obj.dni;

        showDataHere.appendChild(newP)
    } else {
        alert('Usuario no encontrado')
    }
}
showDataButton.addEventListener('click', showData)

const deleteOneButtons = document.getElementsByName('button_delete_item');
const deleteAllButtons = document.getElementsByName('button_delete_all');
let dniToDelete = document.getElementsByName('delete_item')[0].value;

const deleteOne = () => {
    if (window.localStorage.getItem(dniToDelete)) {
        window.localStorage.removeItem(dniToDelete);
        alert('Un usuario borrado')
    }else{
        alert('Usuario no encontrado')
    }
}
const deleteAll = () => {
    window.localStorage.clear();
    alert('Todos los datos borrados')
}
deleteOneButtons[0].addEventListener('click', deleteOne)
deleteAllButtons[0].addEventListener('click', deleteAll)
