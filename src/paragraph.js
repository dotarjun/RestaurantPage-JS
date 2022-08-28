const homeContent = document.createElement('div');
homeContent.classList.add('home-content');

function homeText(text) {
    const para = document.createElement('p');
    para.textContent = text;
    homeContent.appendChild(para)
}

function highlightText(text) {
    const highlightLine = document.createElement('p')
    highlightLine.classList.add('highlight-line');
    highlightLine.textContent = text;
    homeContent.appendChild(highlightLine)
}

function bookButton() {
    const btn = document.createElement('button');
    btn.classList.add('book-btn');
    btn.textContent = 'Book a Table'
    homeContent.appendChild(btn)
}


function addDisclaimer(parent) {
    const disc = document.createElement('p')
    disc.classList.add('disclaimer')
    disc.innerHTML = "By booking you adhere to our <a href=\"#\">Terms and Conditions</a> and our <a href=\"#\">hygiene policy</a>"
    parent.appendChild(disc)
}

homeText('Remy (our lead chef) dreamt of becoming a great chef, despite being a rat in a rodent-phobic profession. Life led him to Paris to follow his dream, and with the help of hapless garbage boy Linguini he put his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences. Remy eventually got the chance to prove his culinary abilities to THE Anton Ego, the great food critic. With a surprisingly positive review, we (formerly known as Gusteau\'s) were able to rise back to our old fame and rewrite history in French Cuisine.')
homeText('But soon that would change')
homeText('Following Ego\'s review, we were ~ratted~ out.Thus Gustaeu\'s was shut down due to undisclosable reasons. But fear not, Gustaeu\'s still lives on. At Ratatouille we uphold Gustaeu\'s motto ')
highlightText('"Anybody can Cook"')
homeText('So what are you waiting for? Book a table at Ratatouille by clicking the button below.')
bookButton()
addDisclaimer(homeContent)
content.appendChild(homeContent)
