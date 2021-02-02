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

// class MenuController {
//   constructor() {
//     this.model = model;
//     this.$menuList = document.querySelector('.menu-list');
//     this.$modalContainer = document.querySelector('.menu-modal-container');
//     this.$modalCloseBtn = document.querySelector('.btn-close');
//     this.$menuList.onclick = (e) => {
//       if (e.target === e.currentTarget) return;
//       this.$modalContainer.style.display = 'flex';
//       this.model.getMenu(`/seasonmenu/${e.target.id}`).then(modalRender);
//     };
//     this.$modalContainer.onclick = (e) => {
//       console.log(e.target);
//       if (!e.target.matches('.btn-close')) return;
//       this.$modalContainer.style.display = 'none';
//     };
//   }
// }

// new MenuController();
