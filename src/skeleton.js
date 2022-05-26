import Banner from './banner.jpg';
import { createHome } from './homepage';
import { createMenu } from './menu';
import { createContact } from './contact';
const content = document.getElementById('content')

function createBones() {

    //banner
    const banner = document.createElement('div');
    banner.classList.add('banner');

    const myBanner = new Image();
    myBanner.src = Banner;

    banner.appendChild(myBanner);

    document.body.insertBefore(banner, content);

    //home, menu, contact buttons
    const buttonDiv = document.createElement('div')
    document.body.insertBefore(buttonDiv, content);

    buttonDiv.id = "buttonDiv"

    const homeButton = document.createElement('button')
    homeButton.textContent = "Home"
    homeButton.classList.add('button')
    const menuButton = document.createElement('button')
    menuButton.textContent = "Menu"
    menuButton.classList.add('button')

    const contactButton = document.createElement('button')
    contactButton.textContent = "Contact"
    contactButton.classList.add('button')


    buttonDiv.appendChild(homeButton);
    buttonDiv.appendChild(menuButton);
    buttonDiv.appendChild(contactButton);

    homeButton.addEventListener('click', testButton)
    homeButton.addEventListener('click', createHome)
    
    menuButton.addEventListener('click', testButton)
    menuButton.addEventListener('click', createMenu)

    contactButton.addEventListener('click', testButton)
    contactButton.addEventListener('click', createContact)

    
}  

function testButton() {
    content.innerHTML = "";
}

export {
    createBones,
}