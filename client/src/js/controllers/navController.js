import model from '../model/model';
import menuRender from '../views/menu-render';
import initialize from './menuModalController';
//DOM
const $nav = document.querySelector('.menu-tab');
const $home = document.querySelector('.btn-home');

//Event
$nav.onclick = (e) => {
  if (e.target === e.currentTarget) return;
  [...$nav.children].forEach((navList) =>
    navList.classList.remove('btn-active')
  );
  e.target.classList.add('btn-active');
  model._state = e.target.id;
  model.getMenu(`/${model.state}`).then(menuRender);
  initialize();
};

$home.onclick = () => {
  window.location.reload();
};
