const siteContent = document.getElementById('site-content')

const menu = document.getElementById('menu')
let currentChild = content

menu.addEventListener('click', () => {
    console.log('CLICK')
    siteContent.removeChild(currentChild)
    currentChild = menu
    
})

