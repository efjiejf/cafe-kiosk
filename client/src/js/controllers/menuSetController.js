import model from '../model/model';
import menuRender from '../views/menu-render';
import initailize from '../controllers/menuModalController';
//DOM
const $menuSet = document.querySelector('.btn-dev');
const $menuSetModal = document.querySelector('.dev-modal-container');
const $modalClose = document.querySelector('.modal-exit');
const $menuSave = document.querySelector('.modal-storage');
const $menuName = document.querySelector('.dev-name');
const $menuImg = document.querySelector('.dev-image-url');
const $menuPrice = document.querySelector('.dev-price');
const $menuSizeUpPrice = document.querySelector('.dev-size-price');
const $menuShotPrice = document.querySelector('.dev-shot-price');
const $addShotCheck = document.querySelector('.dev-shot');

// Function

const setMenu = async (e) => {
  try {
    const menu = await model.getMenu(`/${model.state}`);
    const newMenu = {
      id: menu.length + 1,
      menuName: $menuName.value,
      imgUrl: $menuImg.value,
      price: +$menuPrice.value,
      active: false,
      shot: $addShotCheck.checked,
      shotPrice: +$menuShotPrice.value,
      sizeUpPrice: +$menuSizeUpPrice.value,
    };
    const newMenus = await model.setMenu(`/${model.state}`, newMenu);
    console.log(newMenus);
    menuRender(newMenus);
    initailize();
    $menuSetModal.style.display = 'none';
  } catch (e) {
    console.error(e);
  }
};

$menuSet.addEventListener('click', (e) => {
  $menuSetModal.style.display = 'flex';
});

$modalClose.addEventListener('click', (e) => {
  $menuSetModal.style.display = 'none';
});

$menuSave.addEventListener('click', setMenu);
