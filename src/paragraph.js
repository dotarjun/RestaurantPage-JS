const topTextDiv = document.createElement('div');
topTextDiv.classList.add('home-content');

function topText(text) {
    const para = document.createElement('p');
    para.textContent = text;
    topTextDiv.appendChild(para)
}

topText('We are ratatouille restaurant based in Paris, France. We were established in 1907 by Chef Linguini ( I guess ). We serve the most hygeienic food in Paris ( or do we ). That\'s all I can think of to write. This is basically some text to fill up the space. This sentence is no different. Neither this one. HAHA gotcha. Ok bye')
content.appendChild(topTextDiv)