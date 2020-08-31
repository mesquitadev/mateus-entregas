import api from './api';

const deliverymanPhotos = async (data, id) => {
  const headerHTTP = {
    imagemSelfie: data.imagemSelfie,
    imagemCnh: data.imagemCnh,
    log: {
        ip: "",
        dispositivo: "",
        localizacao: ""
    }
  };

  const response = await api.put(`/entregador/26/imagem`, headerHTTP);
  return response;
};

export default deliverymanPhotos;