import './style.css';

const siteContent = document.createElement('div')
siteContent.setAttribute('id', 'site-content')

const homeContent = document.createElement('div')
homeContent.setAttribute('id', 'home-content')

const menuContent = document.createElement('div')
menuContent.setAttribute('id', 'menu-content')

const aboutUsContent = document.createElement('div')
aboutUsContent.setAttribute('id', 'about-us-content')



siteContent.appendChild(homeContent)
siteContent.appendChild(menuContent)
siteContent.appendChild(aboutUsContent)

menuContent.style.display = 'none'
aboutUsContent.style.display = 'none'

document.body.appendChild(siteContent);













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
