import api from './api';

const checkDelivery = async code => {
  const response = await api.get(`/entrega/${code}`);

  return response;
};

export default checkDelivery;