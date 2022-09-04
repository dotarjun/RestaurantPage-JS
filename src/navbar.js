
import bookButton from "./button.js";

export function addNavbar(parentEle) {
    // const homeContent = document.getElementById('home-content')

    const navbar = document.createElement('nav')
    const navLinks = document.createElement('ul')

    function createNavLink(txt, id) {
        const li = document.createElement('li')
        const btn = document.createElement('button')
        btn.textContent = txt
        // link.setAttribute('href', `${lnk}`)
        btn.setAttribute('id', `${id}`)
        li.appendChild(btn)
        navLinks.appendChild(li)
    }

    createNavLink('Home', 'home')
    createNavLink('Menu', 'menu')
    createNavLink('About Us', 'about-us')
    bookButton(navLinks)
    navbar.appendChild(navLinks)
    parentEle.appendChild(navbar)
}



