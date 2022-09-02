export default function bookButton(parent) {
    const btn = document.createElement('button');
    btn.classList.add('book-btn');
    btn.textContent = 'Book a Table'
    // btn.setAttribute("onclick", "location.href='/book'")
    parent.appendChild(btn)
}


