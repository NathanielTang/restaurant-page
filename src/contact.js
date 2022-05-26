const content = document.getElementById("content");


export function createContact() {
    //create contact info page
    const welcome = document.createElement("h1");
    welcome.classList.add("contact");
    welcome.textContent = "Contact Us";
    content.appendChild(welcome);
  
    const phoneNum = document.createElement("p");
    phoneNum.classList.add("contact");
    phoneNum.textContent = "Telephone number: (505) 146-0195"
    content.appendChild(phoneNum);
  
    const email = document.createElement("p");
    email.classList.add("contact");
    email.id = "email";
    email.textContent = "email: babyblue@polloshermanos.com";
    content.appendChild(email);
  }
  