import { addHomeContent } from "./home-main.js"
// const { addHomeContent } = require("./home-main")

const siteContent = document.getElementById('site-content')
const homeContent = document.getElementById('home-content')



const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutUsButton = document.getElementById('about-us')
let currentChild = homeContent

function tabSwitch(btn) {
    btn.addEventListener('click', () => {
        console.log('CLICK')
        siteContent.removeChild(currentChild)
        currentChild = btn
        if (currentChild == homeButton) {
            addHomeContent();
            console.log('addhomecontent');
            console.log(currentChild);
        }
        siteContent.appendChild(currentChild)
    })
}



tabSwitch(homeButton)
tabSwitch(menuButton)
tabSwitch(aboutUsButton)

