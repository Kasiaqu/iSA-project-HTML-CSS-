const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");


hamburgerMenu.addEventListener('click', () => {  
    hamburgerMenu.classList.toggle("change")  
    menu.classList.toggle("menu-change")  
   }); 
