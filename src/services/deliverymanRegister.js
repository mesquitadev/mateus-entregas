import api from './api';


const deliverymanRegister = async (name, user, cnh, datanascimento, tel, email) => {  
  const bodyHTTP = {
    nome: name,
    cpf: user,
    cnh: cnh,
    dataNascimento: datanascimento.substr(6,4) + "-" + datanascimento.substr(3,2) + "-" + datanascimento.substr(0,2),
    telefone: tel,
    email: email,
    log: {
        ip: "",
        dispositivo: "",
        localizacao: ""
    }
  };


  const response = await api.post(`/entregador`, bodyHTTP);
  return response;
};

export default deliverymanRegister;