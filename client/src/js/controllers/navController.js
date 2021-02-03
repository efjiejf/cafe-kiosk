import model from '../model/model';
import menuRender from '../views/menu-render';

//DOM

const $nav = document.querySelector('.menu-main');

//Event

$nav.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) return;
  model.state = 'icemenu';
  model.getMenu(`/${model.state}`).then(menuRender);
});
