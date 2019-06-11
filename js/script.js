const menu = document.querySelector('[menu-drop]');
const hamburger = document.querySelector('[hamburger]');

const dropMenu = () => {
  menu.classList.toggle('toggle-menu');
}

hamburger.onclick = dropMenu;

