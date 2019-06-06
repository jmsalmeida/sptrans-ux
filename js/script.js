const menu = document.querySelector('[menu-drop]');
const hamburger = document.querySelector('[hamburger]');

const dropMenu = () => {
  console.log('cheguei')
  menu.classList.remove('.toggle-menu');
}

hamburger.onclick = dropMenu;

