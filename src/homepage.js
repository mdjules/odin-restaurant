

export function pageLoad() {
    const content = document.getElementById("content");

    const intro = document.createElement('div');
    intro.classList.add('intro');

    intro.textContent = "Hello my restuarant is great!"

    content.appendChild(intro);

};




