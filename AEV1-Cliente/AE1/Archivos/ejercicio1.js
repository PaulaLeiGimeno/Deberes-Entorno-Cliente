const menu = document.getElementsByTagName('h2')[0]
const buildingList = document.getElementsByTagName('ul')[0]

const buildings = ['Hemisferic', 'Museu de les Ciencies', 'Oceanografic', 'Palau de les Arts', 'Umbracle'];
let isMenuVisible = false;

const showOrHideMenu = () => {
    if (!isMenuVisible) {
        for (let i = 0; i < buildings.length; i++) {
            document.getElementsByTagName('li')[i].style.display = 'none';
            isMenuVisible = true;
        }
    } else {
        for (let i = 0; i < buildings.length; i++) {
            document.getElementsByTagName('li')[i].style.display = 'block';
            isMenuVisible = false;
        }
    }
}
for (let i = 0; i < buildings.length; i++) {
    let building = document.createElement('li')
    building.textContent = buildings[i]
    building.setAttribute('id', i)
    buildingList.appendChild(building)
}


showOrHideMenu()

menu.addEventListener('click', showOrHideMenu)


