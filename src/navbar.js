const navbar = document.createElement('nav')
const navLinks = document.createElement('ul')

function createNavLink(txt, lnk) {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.textContent = txt
    link.setAttribute('href', `${lnk}`)
    li.appendChild(link)
    navLinks.appendChild(li)
}

createNavLink('Menu', 'menu')
createNavLink('About Us', 'about-us')
createNavLink('Contact', 'contact')

navbar.appendChild(navLinks)
content.appendChild(navbar)