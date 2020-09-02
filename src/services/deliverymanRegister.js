import api from './api';

const deliverymanRegister = async (
  name,
  formatedCPF,
  cnh,
  formatedDataNascimento,
  formatedTelefone,
  email,
) => {
  const bodyHTTP = {
    nome: name,
    cpf: formatedCPF,
    cnh: cnh,
    dataNascimento: formatedDataNascimento,
    email: email,
    telefone: formatedTelefone,
    log: {
      ip: '',
      dispositivo: '',
      localizacao: '',
    },
  };
  try {
    const response = await api.post(`/entregador`, bodyHTTP);
    return response;
  } catch (error) {
    throw new Error('Erro ao chamar o serviço de cadastro.')
  }
};

export default deliverymanRegister;
