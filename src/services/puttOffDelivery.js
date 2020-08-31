import api from './api';

const puttOffDelivery = async (data) => {
  const bodyHTTP = {
    motivoCancelamento: data.idMotivo,
    log: {
      ip: '',
      dispositivo: '',
      localizacao: '',
    },
  };

  const response = await api.put(
    `/adiar-entrega-pedido/${data.idEntregaPedido}`,
    bodyHTTP,
  );

  return response;
};

export default puttOffDelivery;
