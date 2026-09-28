/*
ME HE EQUIVOCADO EN LAS INSTRUCCIONES PERO ME NIEGO A BORRAR ESTO QUE ME HA COSTADO MUCHO. 
*/
const imgsArray = [1, 2, 3, 4, 5];
let indexes = [1, 1, 1]


function changeImg() {
    console.log('esto funciona')

    let oldCoffee = document.getElementsByTagName('td')[0];

    let newCoffee = document.createElement('td');
    let newCoffeeText = document.createElement('h1')
    newCoffeeText.textContent = 'Cafes'

    if (indexes[0] == 5) {
        indexes[0] = 0
    } else {
        indexes[0]++

    }



    newCoffee.style.backgroundImage = 'url(src/cafe/' + imgsArray[indexes[0]] + '.jpg)';
    tableRow.replaceChild(newCoffee, oldCoffee)
    newCoffee.style.backgroundSize = 'cover';
    newCoffee.appendChild(newCoffeeText)
    newCoffee.addEventListener('click', changeImg);
}

document.getElementsByTagName('td')[0].addEventListener('click', changeImg)
