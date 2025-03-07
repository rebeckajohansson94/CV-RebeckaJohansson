// Menu js

const menu = document.querySelector('.navigation');
const btn = document.querySelector('.menu-toggle-btn');

function toggleMenu(){
    menu.classList.toggle('navigation-open');
}

btn.addEventListener('click', toggleMenu);


