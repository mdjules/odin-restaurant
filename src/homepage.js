
import heroImage from "./images/pexels-evonics-1058277.jpg";

//initial display of the homepage
export function pageLoad() {
    const content = document.getElementById("content");

    const intro = document.createElement('div');
    intro.classList.add('intro');

    intro.textContent = "Welcome to That Guy's Italian Restaurant! \nEstablished since That Guy made this website!"

    content.appendChild(intro);

    //load import image
    const image = document.createElement("img");
    image.src = heroImage
    image.classList.add('homepage-image')

    content.appendChild(image)

};

//reloads intial homescreen when Home button is clicked
export function reloadHompage() {
    const button = document.querySelector('.homeButton')
    const content = document.getElementById('content')

    button.addEventListener('click', function() {
        content.innerHTML = "";
        pageLoad()
    })
}




