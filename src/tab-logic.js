const siteContent = document.getElementById('site-content')
const homeContent = document.getElementById('home-content')
const menuContent = document.getElementById('menu-content')
const aboutUsContent = document.getElementById('about-us-content')
const mainContent = document.getElementsByTagName('main');


import { addHomeContent } from "./home-content.js"
addHomeContent()
import { addMenuContent } from "./menu-content.js"
addMenuContent()
import { addAboutUsContent } from "./about-us-content.js"
// addAboutUsContent()

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutUsButton = document.getElementById('about-us')



let currentChild = homeContent

function tabSwitch(btn) {
    btn.addEventListener('click', () => {

        currentChild.style.display = 'none'

        switch (btn) {
            case homeButton:
                currentChild = homeContent
                break;
            case menuButton:
                currentChild = menuContent
                break;
            case aboutUsButton:
                currentChild = aboutUsContent
                break;
            default:
                homeButton
                break;
        }
        currentChild.style.display = 'initial'
    })
}



tabSwitch(menuButton)
tabSwitch(homeButton)
// tabSwitch(aboutUsButton)