import api from './api';

const deliverymanRegister = async (payload) => {
  const data = {
    nome: payload.nome,
    cpf: payload.cpf,
    cnh: payload.cnh,
    dataNascimento: payload.dataNascimento,
    email: payload.email,
    telefone: payload.telefone,
    log: {
      ip: '',
      dispositivo: '',
      localizacao: '',
    },
  };
  const response = await api.post('/entregador', JSON.stringify(data));
  return response;
};

export default deliverymanRegister;
