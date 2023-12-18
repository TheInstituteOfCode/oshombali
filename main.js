const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu')
const header = document.querySelector('header')

function toggleBurger() {
  burgerButton.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  header.classList.toggle('scheme-1')
  header.classList.toggle('scheme-2')

}

burgerButton.addEventListener('click', toggleBurger)