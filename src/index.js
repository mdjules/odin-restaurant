import {pageLoad} from './homepage.js';
import {loadMenu} from './menu.js';
import heroImage from "./images/pexels-evonics-1058277.jpg"
import './styles.css'

const image = document.createElement("img");
image.src = heroImage;
image.classList.add('homepage-image')

const content = document.getElementById('content');

content.appendChild(image)

console.log("Test");
pageLoad()
loadMenu()