import axios from 'axios';

export default {
  _state: 'seasonmenu',

  getMenu(url) {
    return axios.get(url).then(({ data }) => data);
  },

  get state() {
    return this._state;
  },

  set state(value) {
    this._state = value;
  },
};
