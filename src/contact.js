export function loadContact() {
    const content = document.getElementById('content')
    const button = document.querySelector(".contactButton")
    
    button.addEventListener('click', function() {
        content.innerHTML = ""

        const container = document.createElement('div')
        container.textContent = "All about my cool restaurant"
        content.appendChild(container);
    })
}