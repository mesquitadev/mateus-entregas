import api from './api';

const login = async (user, pass) => {
  const headerHTTP = {
    username: user,
    senha: pass
  };

  const response = await api.post(`/login`, headerHTTP);
  
  if (response.status === 200) 
    return response;
  else 
    throw new Error('Não foi possível efetuar o login.');
};

export default login;