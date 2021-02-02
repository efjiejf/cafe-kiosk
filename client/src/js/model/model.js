import axios from 'axios';

export default {
  _state: 'seasonmenu',

  getSeasonMenu(url) {
    return axios.get(url).then(({ data }) => data);
  },

  get state() {
    return this._state;
  },

  set state(value) {
    this._state = value;
  },
};
