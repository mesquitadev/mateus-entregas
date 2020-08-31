import api from './api';

const onStartDelivery = async id => {  
  const bodyHTTP = {
    log: {
        ip: "",
        dispositivo: "",
        localizacao: ""
    }
  };

  const response = await api.put(`/iniciar-entrega-pedido/${id}`, bodyHTTP);
  return response;
};

export default onStartDelivery;