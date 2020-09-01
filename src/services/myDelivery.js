import api from './api';

const myDelivery = async deliveryId => {
  const response = await api.get(`/minha-entrega/${deliveryId}`)

  return response;
};

export default myDelivery;