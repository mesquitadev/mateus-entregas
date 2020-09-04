import api from './api';

const myDelivery = async deliveryId => {
  const response = await api.get(`/minha-entrega/${deliveryId}`)
  console.log("myDelivery: " + response.data);
  return response;
};

export default myDelivery;