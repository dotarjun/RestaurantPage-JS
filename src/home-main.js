import bookButton from "./button.js";

const homeContent = document.getElementById('home-content')
const mainContent = document.querySelector('main');

function homeText(text) {
    const para = document.createElement('p');
    para.textContent = text;
    mainContent.appendChild(para)
}

function highlightText(text) {
    const highlightLine = document.createElement('p')
    highlightLine.classList.add('highlight-line');
    highlightLine.textContent = text;
    mainContent.appendChild(highlightLine)
}

function addDisclaimer(parent) {
    const disc = document.createElement('p')
    disc.classList.add('disclaimer')
    disc.innerHTML = "By booking you adhere to our <a href=\"#\">Terms and Conditions</a> and our <a href=\"#\">hygiene policy</a>"
    parent.appendChild(disc)
}

function addCover(msg) {
    const h1 = document.createElement('h1');
    h1.textContent = msg;
    h1.classList.add('img-text')
    homeContent.appendChild(h1);

    const topImg = document.createElement('img');
    topImg.classList.add('top-img');
    homeContent.appendChild(topImg);
}

export function addHomeContent() {
    addCover('Ratatouille Restaurant')
    homeText('Remy (our lead chef) dreamt of becoming a great chef, despite being a rat in a rodent-phobic profession. Life led him to Paris to follow his dream, and with the help of hapless garbage boy Linguini he put his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences. Remy eventually got the chance to prove his culinary abilities to THE Anton Ego, the great food critic. With a surprisingly positive review, we (formerly known as Gusteau\'s) were able to rise back to our old fame and rewrite history in French Cuisine.')
    homeText('But that would change soon...')
    homeText('Following Ego\'s review, we were ~ratted~ out. Thus Gustaeu\'s was shut down due to undisclosable reasons. But fear not, Gustaeu\'s spirit still lives on with our top of the notch chefs. With a highly diverse staff and an inclusonary kitchen open for individuals who love cooking, we have been rated Paris\'s best place to eat (and cook) at. At Ratatouille we embody Gustaeu\'s motto ')
    highlightText('Anybody can Cook')
    homeText('So what are you waiting for? Book a table at Ratatouille by clicking the button below.')
    bookButton(mainContent)
    console.log('test');
    homeContent.appendChild(mainContent)
}

// addHomeContent()


