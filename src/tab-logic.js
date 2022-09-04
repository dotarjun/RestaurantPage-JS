const siteContent = document.getElementById('site-content')
const homeContent = document.getElementById('home-content')
const mainContent = document.getElementsByTagName('main');
console.log(mainContent)

import { addNavbar } from "./navbar.js"
addNavbar(homeContent)

import { addHomeContent } from "./home-main.js"
addHomeContent()

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutUsButton = document.getElementById('about-us')



let currentChild = homeContent
let emptyChild = ''

function tabSwitch(btn) {
    btn.addEventListener('click', () => {
        const currentButton = btn
        currentChild.replaceChildren(emptyChild)
        if (currentButton == homeButton) {
            const homeMainContent = document.querySelector('main');
            // homeMainContent.innerHTML = 'BRUHHH'
            removeChildren(currentChild)
            addNavbar(homeContent)
            addHomeContent();
            siteContent.appendChild(currentChild)
        }
    })
}

function removeChildren(e) {
    let child = e.firstChild;
    while (child.hasChildNodes) {
        e.removeChild(child);
        child = e.lastElementChild;
        // You can take a look at removeChildNode, hasChildNodes, and firstChild
    }
}





tabSwitch(homeButton)
tabSwitch(menuButton)
tabSwitch(aboutUsButton)

