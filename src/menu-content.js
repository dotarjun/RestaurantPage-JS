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
    createCard({ url: ratatouille, txt: 'Ratatouille', desc: 'An Exquisite dish of stewed vegetables loved by the infamous critique Anton Ego. Includes tomato, garlic, onion, courgette, aubergine, capsicum, and leafy green herbs. Garnished with Ratatouille Sauce. ' })
    createCard({ url: soup, txt: 'Special Soup', desc: 'An improvised version of the conventional cream soup altered by Chef Linguini and Chef Remy. Includes Tomato, Cream Cheese, Oregano, Water and other vegetables. ' })
    createCard({ url: egg, txt: 'Omelette', desc: 'The French omelette with soft texture. Filled with grated cheese, ham, fresh herbs, mushrooms and smoked salmon. Custom toppings to be specified on order. Additional Charges applicable.' })
    createCard({ url: garbage, txt: 'Garbage', desc: 'A cheap Rat classic dish. The go to meal if you are on a budget or happen to be a rat.' })
    createCard({ url: cheese, txt: 'Cheese', desc: 'Cheese. Yes. It\'s just cheese. PLain raw cheese which is just overpriced. An exquisite representation of simplicity by our extremeley talented Chef Collete who believes in Minimalist living thus a minimalist dish fir our most cultured customers. Rat favourite.' })
    createCard({ url: strawberryCheese, txt: 'Strawberry Cheese', desc: 'If you were surprised with how innovative we are at Ratatouille\'s then this one would surprise you. Adding onto Chef Collete\'s minimalist lifestyle, Chef Remy decided to give it a personal spin by adding a strawbeery. Very clever right? Indeed. All thanks to our highly sophisticated chefs.' })
    createCard({ url: lightningy, txt: 'Lightningy', desc: 'Lighning cooked something lorem ipsum lorem ipsum blah blah blah blah. Some text some more text ' })
    createCard({ url: carrot, txt: 'Boiled Carrot', desc: 'Basically a boiled carrot but over priced. Pls buy you would totally regret it. HAHAHAHAHAHAHAHHA . I dont know what to write here so this is just some filled text. So is this senetence. Maybe another filler senetence would do. Yeah that\'s about it.' })
}
