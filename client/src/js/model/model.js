import axios from 'axios';

export default {
  _state: 'seasonmenu',
  menu: [],

  getMenu(url) {
    return axios.get(url).then(({ data }) => data);
  },
  setMenu(url, payload) {
    return axios.post(url, payload).then(({ data }) => data);
  },
  get state() {
    return this._state;
  },

  set state(value) {
    this._state = value;
  },
};
