import api from './api';
const delivermanAddress = async (data) => {
  console.log(data);

  let bodyHTTP = {
    endereco: {
      cep: data.cep,
      logradouro: data.logradouro,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      estado: data.estado,
      cidade: data.cidade
    },
    log: {
      ip: '',
      dispositivo: '',
      localizacao: '',
    },
  };
  const response = await api.put(
    `/entregador/${data.idUser}/endereco`,
    JSON.stringify(bodyHTTP),
  );
  return response;
};

export default delivermanAddress;
