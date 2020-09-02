import api from './api';

const cancelDelivery = async (data) => {
  const bodyHTTP = {
    motivoCancelamento: data.valor,
    log: {
      ip: '',
      dispositivo: '',
      localizacao: '',
    },
  };

  const response = await api.put(
    `/cancelar-entrega-pedido/${data.idEntregaPedido}`,
    bodyHTTP,
  );

  return response;
};

export default cancelDelivery;
