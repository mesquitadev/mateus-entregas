import axios from 'axios';

const api_auth_gmcore = axios.create({
    baseURL: "https://backend-auth-api.grupomateus.com.br/authenticator?apikey=C3TeG5jtgEVpj7xB8yKGOFjksKaE621CVAmn6iMhzpCp6vMFQBk8iq9s3UAQrkJL",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default api_auth_gmcore;
