export function loadMenu() {
    const content = document.getElementById("content");
    const button = document.querySelector(".menuButton");
    button.addEventListener('click', function() {

        content.innerHTML = ""
        const menuContainer = document.createElement('div');
        menuContainer.textContent = "test"
        content.appendChild(menuContainer)

        for (let i = 0; i < 3; i++) {
            const items = document.createElement('div');
            items.textContent = `Item ${i + 1}`
            items.classList.add(`Item-${i + 1}`, "menu-item")
            menuContainer.appendChild(items)
        }
    })
}