const siteContent = document.getElementById('site-content')
const homeContent = document.getElementById('home-content')
const mainContent = document.createElement('main');


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
            homeMainContent.innerHTML = 'BRUHHH'
            addNavbar(homeContent)
            addHomeContent();
            siteContent.appendChild(currentChild)
        }
    })
}

function removeChildren(e) {
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;

    }
}

tabSwitch(homeButton)
tabSwitch(menuButton)
tabSwitch(aboutUsButton)

