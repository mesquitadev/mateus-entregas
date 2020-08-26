import api from './api';

const login = async (user, pass) => {
  const headerHTTP = {
    username: user,
    senha: pass
  };

  const response = await api.post(`/login`, headerHTTP);
  return response;
};

export default login;