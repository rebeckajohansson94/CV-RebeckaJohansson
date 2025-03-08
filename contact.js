// ------ My own code -------- 

const button = document.querySelector(".btn");
const contactForm = document.querySelector(".contact-form");

function message(){
    let textMessage = document.createElement('p');
    textMessage.textContent = "Tack! Ditt meddelande har skickats."; 
    document.querySelector('.contact-box').appendChild(textMessage);
    contactForm.style.display = "none";
    textMessage.style.marginTop = "5rem";
    textMessage.style.fontSize = "2rem";
}

button.addEventListener('mousedown', message);



