import './style.css';
const siteContent = document.createElement('div')

const content = document.createElement('div')
content.setAttribute('id', 'content')

const menuContent = document.createElement('div')
menuContent.setAttribute('id', 'menu-content')
const menu = document.getElementById('menu')

const aboutUsContent = document.createElement('div')
aboutUsContent.setAttribute('id', 'about-us-content')


let currentChild = content
siteContent.appendChild(content)
document.body.appendChild(siteContent);

menu.addEventListener('click', () => {
    siteContent.removeChild(currentChild)
})















// footer
const footer = document.createElement('footer')
const socials = document.createElement('div')
socials.classList.add('socials')
function addSocial(id) {
    const icons = document.createElement('img')
    icons.setAttribute('id', id)
    const link = document.createElement('a')
    link.setAttribute('href', `https://www.${id}.com/dotarjun`)
    link.appendChild(icons)
    socials.appendChild(link)
}
addSocial('Github')
addSocial('Twitter')
footer.appendChild(socials)
document.body.appendChild(footer)
