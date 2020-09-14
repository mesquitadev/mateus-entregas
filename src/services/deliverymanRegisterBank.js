import api from './api';
const delivermanRegisterBank = async (data) => {
  console.log(data);

  let bodyHTTP = {
    dadosBancarios: {
      banco: data.banco,
      agencia: data.agencia,
      conta: data.conta,
    },
    log: {
      ip: '',
      dispositivo: '',
      localizacao: '',
    },
  };
  const response = await api.put(
    `/entregador/${data.idUser}/dadosBancarios`,
    JSON.stringify(bodyHTTP),
  );
  return response;
};

export default delivermanRegisterBank;
