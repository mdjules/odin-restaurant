
export function loadContact() {
    const content = document.getElementById('content')
    const button = document.querySelector(".contactButton")
    
    button.addEventListener('click', function() {
        content.innerHTML = ""

        const contactContainer = document.createElement('div')
        contactContainer.classList.add('contactContainer')
        content.appendChild(contactContainer);

        const info = 
            {
                address: "123 That Guy Lane",
                state: "TG",
                email: "thatguy@italianrestaurant.com",
                phone: '123-456-7890'
            }
    

        const contactInfo = document.createElement('div')
        contactInfo.classList.add('contactInfo')
        
        Object.keys(info).forEach(key => {
            const value = info[key];
            const p = document.createElement('p')
            p.textContent = `${key.toUpperCase()}: ${value}`;
            contactInfo.appendChild(p)
        })

        contactContainer.appendChild(contactInfo)
    })
}