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
        const currentButton = btn
        if (currentButton == homeButton) {
            if (currentChild !== homeContent) {
                addHomeContent();
                siteContent.appendChild(currentChild)
                currentChild = homeContent
            }
        }
        if (currentButton == menuButton) {
            currentChild.style.display = 'none'
            currentChild = menuContent
            currentChild.style.display = 'initial'
            siteContent.appendChild(currentChild)
        }
    })
}



tabSwitch(homeButton)
tabSwitch(menuButton)
tabSwitch(aboutUsButton)