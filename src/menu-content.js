import ratatouille from "./assets/images/recipes/ratatouille.jpg";
import soup from "./assets/images/recipes/special-soup.jpg";


const menuContent = document.getElementById('menu-content')
const mainContent = document.createElement('main');


export function addMenuContent() {
    const createCard = (obj) => {
        let card = document.createElement('div')
        card.classList.add('card')

        let cardContentWrap = document.createElement('div')
        cardContentWrap.classList.add('cardContentWrap')

        const foodImage = document.createElement('img')
        foodImage.src = obj.url;
        cardContentWrap.appendChild(foodImage)

        const foodHeading = document.createElement('h3')
        foodHeading.textContent = obj.txt
        cardContentWrap.appendChild(foodHeading)

        const foodDescription = document.createElement('p')
        foodDescription.textContent = obj.desc
        cardContentWrap.appendChild(foodDescription)

        card.appendChild(cardContentWrap)
        mainContent.appendChild(card)
        menuContent.appendChild(mainContent)
    }
    createCard({ url: ratatouille, txt: 'Ratatouille', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: soup, txt: 'Special Soup', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
}
