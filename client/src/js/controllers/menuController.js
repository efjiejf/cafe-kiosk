import model from '../model/model';
import menuRender from '../views/menu-render';
import modalRender from '../views/modal-render';

model.getSeasonMenu('/seasonmenu').then(menuRender);
class MenuController {
  constructor() {
    this.model = model;
    this.$menuList = document.querySelector('.menu-list');
    this.$modalContainer = document.querySelector('.menu-modal-container');
    this.$modalCloseBtn = document.querySelector('.btn-close');
    this.$menuList.onclick = (e) => {
      if (e.target === e.currentTarget) return;
      this.$modalContainer.style.display = 'flex';
      this.model.getSeasonMenu(`/seasonmenu/${e.target.id}`).then(modalRender);
    };
    this.$modalContainer.onclick = (e) => {
      console.log(e.target);
      if (!e.target.matches('.btn-close')) return;
      this.$modalContainer.style.display = 'none';
    };
  }
}

new MenuController();
