const login = async (user, pass) => {
  let url = 'localhost';

  const headerHTTP = {
    method: 'POST',
    body: JSON.stringify({
      username: user,
      password: pass
    }),
    headers: {
      'Content-type': 'application/json'
    }
  };

  const response = await fetch(`http://${url}:3030/users/login`,
    headerHTTP);
  
  if (response.ok) 
    return response.headers.get('x-access-token');
  else 
    throw new Error('Não foi possível efetuar o login.');
};

export default login;