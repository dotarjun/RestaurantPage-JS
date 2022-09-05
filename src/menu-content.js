import bookButton from "./button.js";

const menuContent = document.getElementById('menu-content')
const mainContent = document.createElement('main');

const createCard = (obj) => {
    let card = document.createElement('div')
    card.classList.add('card')

    let cardContentWrap = document.createElement('div')
    cardContentWrap.classList.add('cardContentWrap')
    const foodImage = document.createElement('img')
    foodImage.style.content = `url(${obj.url})`
    cardContentWrap.appendChild(foodImage)
    const foodHeading = document.createElement('h3')
    foodHeading.textContent = obj.txt
    cardContentWrap.appendChild(foodHeading)
    const foodDescription = document.createElement('p')
    foodDescription.textContent = obj.desc
    cardContentWrap.appendChild(foodDescription)
    card.appendChild(cardContentWrap)
    mainContent.appendChild(card)
}
createCard({ url: '/src/assets/images/recipes/ratatouille.jpg', txt: 'Ratatouille', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })


menuContent.appendChild(mainContent)