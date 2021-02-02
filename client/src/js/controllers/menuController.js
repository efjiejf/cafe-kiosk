import model from '../model/model';
import menuRender from '../views/menu-render';
import menuModalRender from '../views/modal-render';

// DOM
const $menuList = document.querySelector('.menu-list');
const $modalContainer = document.querySelector('.menu-modal-container');

// EVENT
$menuList.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) return;
  $modalContainer.style.display = 'flex';
  model
    .getMenu(`/${model.state}/${e.target.id}`) //
    .then(menuModalRender);
});

document.addEventListener('DOMContentLoaded', () => {
  model
    .getMenu(`/${model.state}`) //
    .then(menuRender);
});
