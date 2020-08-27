import api from './api';

const confirmReceiptOfDelivery = async data => {  
  const bodyHTTP = {
    identificador: data.identificador,
    entregador: {
        id : 35,
        username: data.username
    },
    log: {
        ip: "",
        dispositivo: "",
        localizacao: ""
    }
  };

  const response = await api.put(`/confirmar-recebimento-entrega`, bodyHTTP);
  return response;
};

export default confirmReceiptOfDelivery;