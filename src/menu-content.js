import ratatouille from "./assets/images/recipes/ratatouille.jpg";
import soup from "./assets/images/recipes/special-soup.jpg";
import egg from "./assets/images/recipes/egg.jpeg"
import garbage from "./assets/images/recipes/garbage.jpg"
import cheese from "./assets/images/recipes/cheese.jpg"
import strawberryCheese from "./assets/images/recipes/strawberry-cheese.jpg"
import lightningy from "./assets/images/recipes/lightningy-food.png"
import carrot from "./assets/images/recipes/carrot.jpg"

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
    createCard({ url: egg, txt: 'Egg', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: garbage, txt: 'Garbage', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: cheese, txt: 'Cheese', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: strawberryCheese, txt: 'Strawberry Cheese', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: lightningy, txt: 'Lightningy', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: carrot, txt: 'Boiled Carrot', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
}
