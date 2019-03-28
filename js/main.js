const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuItem = document.querySelector('.menu-item');
const navLink = document.querySelector('.nav-link');
 
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

  if(!showMenu) {
menuBtn.classList.add('close');
menu.classList.add('show');
menuNav.classList.add('show');
menuItem.classList.add('show');
navLink.forEach(item => item.classList.add('show'));

 showMenu = true;
  } else {
    menuBtn.classList.remove("close")
    menu.classList.remove('show');
    menuItem.classList.remove('show');
    menuNav.classList.remove('show');
    navLink.forEach(item => item.classList.remove('show'));

    ShowMenu = false;

  }
}