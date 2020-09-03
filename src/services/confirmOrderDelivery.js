import api from './api';

const confirmOrderDelivery = async (orderId, name, cpf, situation) => {  
  const bodyHTTP = {
    cliente: {
      identificador: "",
      nome: name,
      cpf: cpf
    },
    situacao: situation,
    log: {
        ip: "",
        dispositivo: "",
        localizacao: ""
    }
  };

  const response = await api.put(`/confirmar-entrega-pedido/${orderId}`, bodyHTTP);
  return response;
};

export default confirmOrderDelivery;