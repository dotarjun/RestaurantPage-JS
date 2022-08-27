function appendImg(msg) {
    const h1 = document.createElement('h1');
    h1.textContent = msg;
    h1.classList.add('img-text')
    content.appendChild(h1);

    const topImg = document.createElement('img');
    topImg.classList.add('top-img');
    content.appendChild(topImg);

    const scroll = document.createElement('div')
    scroll.classList.add('icon-scroll')
    content.appendChild(scroll)
}

appendImg('Ratatouille Restaurant')