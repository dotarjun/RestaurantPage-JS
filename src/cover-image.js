const homeContent = document.getElementById('home-content')

function appendImg(msg) {
    const h1 = document.createElement('h1');
    h1.textContent = msg;
    h1.classList.add('img-text')
    homeContent.appendChild(h1);

    const topImg = document.createElement('img');
    topImg.classList.add('top-img');
    homeContent.appendChild(topImg);

    const scroll = document.createElement('img');
    scroll.classList.add('scroll')
    homeContent.appendChild(scroll)
}

appendImg('Ratatouille Restaurant')