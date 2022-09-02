const siteContent = document.getElementById('site-content')

const menuButton = document.getElementById('menu')
const homeButton = document.getElementById('home')
const aboutUsButton = document.getElementById('about-us')
let currentChild = homeContent

function tabSwitch(btn) {
    btn.addEventListener('click', () => {
        console.log('CLICK')
        siteContent.removeChild(currentChild)
        currentChild = btn
        siteContent.appendChild(currentChild)
    })
}

tabSwitch(menuButton)
tabSwitch(homeButton)
tabSwitch(aboutUsButton)

