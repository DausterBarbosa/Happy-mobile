import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://192.168.0.109',
});

export default api;
