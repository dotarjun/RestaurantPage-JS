import './style.css';
const content = document.createElement('div')
content.setAttribute('id', 'content')

document.body.appendChild(content);




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
