import axios from 'axios';

const api = axios.create({
  baseURL: "https://integracoes.cantodochef.com.br",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;