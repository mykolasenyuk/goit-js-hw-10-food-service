import menuTemplate from '../templates/menu.hbs';
import menuItems from '../menu.json';

const menu = document.querySelector('.js-menu');

// menuRef.insertAdjacentElement('beforeend',menuTemplate(menuItems))
function menuTemplateCards(menuItems) {
  return menuItems.map(menuTemplate).join("");
}
menu.insertAdjacentHTML("afterbegin", menuTemplateCards(menuItems));