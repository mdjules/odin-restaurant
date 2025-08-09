import image1 from "./images/spaghetti.jpg"
import image2 from "./images/chicken-parm.jpg"
import image3 from "./images/caesar.jpg"


export function loadMenu() {
    const content = document.getElementById("content");
    const button = document.querySelector(".menuButton");
    button.addEventListener('click', function() {

        content.innerHTML = ""
        const menuContainer = document.createElement('div');
        menuContainer.classList.add("menuContainer")
        content.appendChild(menuContainer)

        const menuItems = [
            {name: "Spaghetti and Meatballs", image: image1},
            {name: "Chicken Parm", image: image2},
            {name: "Caesar Salad", image: image3}   

        ];

        menuItems.forEach(item  => {
            const itemContainer = document.createElement('div')
            itemContainer.classList.add('itemContainer')

            const img = document.createElement('img');
            img.src = item.image;
            img.classList.add('menu-image');

            const name = document.createElement('h3');
            name.textContent = item.name;

            itemContainer.appendChild(name);
            itemContainer.appendChild(img);
            menuContainer.appendChild(itemContainer);

            
        })  
    })
}
