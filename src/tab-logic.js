const siteContent = document.getElementById('site-content')
const homeContent = document.getElementById('home-content')
const menuContent = document.getElementById('menu-content')
const aboutUsContent = document.getElementById('about-us-content')
const mainContent = document.getElementsByTagName('main');

import { addNavbar } from "./navbar.js"
addNavbar(homeContent)

import { addHomeContent } from "./home-main.js"
addHomeContent()

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutUsButton = document.getElementById('about-us')



let currentChild = homeContent

function tabSwitch(btn) {
    btn.addEventListener('click', () => {
        const currentButton = btn
        if (currentButton == homeButton) {
            if (currentChild !== homeContent) {
                addNavbar(homeContent)
                addHomeContent();
                siteContent.appendChild(currentChild)
            }
        }
        if (currentButton == menuButton) {
            // siteContent.removeChild(currentChild)
            currentChild.style.display = 'none'
            currentChild = menuContent
            currentChild.style.display = 'initial'
            siteContent.appendChild(currentChild)
            addNavbar(currentChild)
        }
    })
}


// function removeChildren(e) {
//     let child = e.childNodes;
//     console.log("🚀 ----------------------------------------------------------------🚀")
//     console.log("🚀 ~ file: tab-logic.js ~ line 38 ~ removeChildren ~ child", child)
//     console.log("🚀 ----------------------------------------------------------------🚀")
//     if (child.length > 4) {
//         for (let i = 1; i < 7; i++) {
//             e.removeChild(child[i]);
//         }
//     }



//     // You can take a look at removeChildNode, hasChildNodes, and firstChild
// }






tabSwitch(homeButton)
tabSwitch(menuButton)
tabSwitch(aboutUsButton)

