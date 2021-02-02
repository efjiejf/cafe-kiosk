import model from '../model/model';
import modalRender from '../views/modal-render';

//State
let menus = [];

//DOM
const $modalContainer = document.querySelector('.menu-modal-container');

//Function
const setAddShotPrice = (e) => {
  const target = menus.find((menu) => menu.id === +e.target.parentNode.id);
  target.price += target.shotPrice;
  document.querySelector('.modal-price').textContent = `${target.price}원`;
};

const setSizeUpPrice = (e) => {
  const target = menus.find((menu) => menu.id === +e.target.parentNode.id);
  target.price += target.sizeUpPrice;
  document.querySelector('.modal-price').textContent = `${target.price}원`;
};

//Event

document.addEventListener('DOMContentLoaded', (e) => {
  model
    .getMenu(`/${model.state}`) //
    .then((menu) => {
      menus = menu;
    });
});
$modalContainer.addEventListener('click', (e) => {
  if (e.target.matches('.btn-close')) {
    $modalContainer.style.display = 'none';
  } else if (e.target.matches('.btn-size-up')) {
    setSizeUpPrice(e);
    e.target.disabled = true;
  } else if (e.target.matches('.btn-addshot')) {
    setAddShotPrice(e);
    e.target.disabled = true;
  }
});
