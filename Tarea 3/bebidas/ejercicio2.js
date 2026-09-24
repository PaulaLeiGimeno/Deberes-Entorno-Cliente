/*
Actividad 2 – Implementa un script que permita que al pulsar sobre las imágenes implementadas en el script anterior, 
éstas se eliminen y sean reemplazadas por las cinco imágenes correspondientes a cada apartado, incluidas en la 
carpeta src proporcionada -hay 5 imágenes para cada categoría: café, infusiones y alcohol-. 
*/
const imgsArray = [1, 2, 3, 4, 5];
let indexes=[1,1,1]

let coffee = document.getElementsByTagName('td')[0];
let alcohol = document.getElementsByTagName('td')[1];
let tea = document.getElementsByTagName('td')[2];

function changeImg(){
let newCoffee=document.createElement('td');
newCoffee.style.backgroundImage = 'url(src/cafe/'+imgsArray[2]+'.jpg)';
tableRow.replaceChild(newCoffee,coffee)
}

coffee.addEventListener('click', changeImg)