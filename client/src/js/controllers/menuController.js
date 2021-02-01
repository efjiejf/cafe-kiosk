import model from '../model/model';
import render from '../views/menu-render';

model.getSeasonMenu().then(render);
