/*
Actividad 1 – Implementa un script para que en el centro del archivo HTML proporcionado se visualicen tres imágenes 
con tres textos sobreimpuestos: 'café', 'infusions' y 'alcohol'. 
*/

const tableRow = document.getElementsByTagName('tr')[0];
let coffeeTd = document.getElementsByTagName('td')[0];


coffeeTd.style.backgroundImage = 'url(src/cafe/1.jpg)';




let alcoholTd = document.createElement('td');
let alcoholH1 = document.createElement('h1');
alcoholH1.textContent = 'Alcohol'



tableRow.appendChild(alcoholTd);
alcoholTd.appendChild(alcoholH1);
alcoholTd.style.backgroundImage = 'url(src/alcohol/1.jpg)';



let teasTd = document.createElement('td');
let teasH1 = document.createElement('h1');
teasH1.textContent = 'Infusiones'

tableRow.appendChild(teasTd);
teasTd.appendChild(teasH1);
teasTd.style.backgroundImage = 'url(src/infusiones/1.jpg)';


let tds = document.getElementsByTagName('td')
for (let i = 0; i < tds.length; i++) {
    tds[i].style.width = '200px';
    tds[i].style.height = '200px';
    tds[i].style.backgroundSize = 'cover';
    tds[i].style.backgroundPosition = 'center';

}



