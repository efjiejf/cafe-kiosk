import model from '../model/model';
import menuRender from '../views/menu-render';
import initialize from '../controllers/menuModalController';
//DOM

const $nav = document.querySelector('.menu-main');

//Event

$nav.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) return;
  model.state = 'icemenu';
  model.getMenu(`/${model.state}`).then(menuRender);
  initialize();
});
