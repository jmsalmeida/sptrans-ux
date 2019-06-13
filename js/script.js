const menu = document.querySelector('[menu-drop]');
const hamburger = document.querySelector('[hamburger]');
const ballon = document.querySelector('.chat-balloon');

function hideBallon() {
  ballon.style.display = 'none';
}

setTimeout(hideBallon, 5000);

const dropMenu = () => {
  menu.classList.toggle('toggle-menu');
}

hamburger.onclick = dropMenu;

