import api from './api';

const deliverymanPassword = async (data) => {
  let bodyHTTP = {
    usuario: {
      senha: data.senha,
    },
    log: {
      ip: '',
      dispositivo: '',
      localizacao: '',
    },
  };
  console.log(JSON.stringify(bodyHTTP))
  const response = await api.put(
    `/entregador/${data.idUser}/senha`,
    JSON.stringify(bodyHTTP),
  );
  return response;
};

export default deliverymanPassword;
