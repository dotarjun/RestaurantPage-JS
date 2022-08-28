function addDisclaimer() {
    const disc = document.createElement('p')
    disc.classList.add('disclaimer')
    disc.innerHTML = "By booking you adhere to out <a>Terms and Conditions</a> and our <a>Hygiene policy</a>"
    homeContent.appendChild(disc)
}
addDisclaimer()
content.appendChild(homeContent)
c