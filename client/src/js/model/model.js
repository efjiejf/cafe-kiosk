import axios from 'axios';

export default {
  getSeasonMenu() {
    return axios.get('/seasonmenu').then(({ data }) => data);
  },
};
