import model from '../model/model';
import menuRender from '../views/menu-render';
import menuModalRender from '../views/modal-render';
// //State
// let start = 0;
// let end = 8;

// DOM
const $menuList = document.querySelector('.menu-list');
const $modalContainer = document.querySelector('.menu-modal-container');
// const $btnNext = document.querySelector('.btn-next');
// const $btnPrev = document.querySelector('.btn-prev');
// Function
const getMenu = async (url, callback) => {
  try {
    const menu = await model.getMenu(url);
    //const pageMenu = menu.slice(start, end);
    callback(menu);
  } catch (e) {
    console.error(e);
  }
};

// EVENT
$menuList.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) return;
  $modalContainer.style.display = 'flex';
  getMenu(`/${model.state}/${e.target.id}`, menuModalRender); //
});

// $btnNext.addEventListener('click', (e) => {
//   start = end;
//   end += end;
//   getMenu(`/${model.state}`, menuRender);
//   $btnPrev.style.display = 'block';
// });
// $btnPrev.addEventListener('click', (e) => {
//   end = end - start;
//   start = end - 8;
//   getMenu(`/${model.state}`, menuRender);
// });

document.addEventListener('DOMContentLoaded', () => {
  getMenu(`/${model.state}`, menuRender); //
});
