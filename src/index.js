import './style.css';

let content = document.createElement('div')
content.setAttribute('id', 'content')


let topImg = document.createElement('img');
topImg.classList.add('top-img');
content.appendChild(topImg);
let heading = document.createElement('h1');
heading.classList.add('heading')
heading.textContent = 'BRUHHHH'
content.appendChild(heading)
document.body.appendChild(content);