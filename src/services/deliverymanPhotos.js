import api from './api';

const deliverymanPhotos = async (data) => {
  console.log(`/entregador/${data.idUser}/imagem`)
  const bodyHTTP = {
    imagemSelfie: data.imagemSelfie,
    imagemCnh: data.imagemCnh,
    log: {
      ip: '',
      dispositivo: '',
      localizacao: '',
    },
  };

  try {
    const response = await api.put(
      `/entregador/${data.idUser}/imagem`,
      bodyHTTP,
    );
    return response;
  } catch (error) {
    throw new Error('Não foi possível salvar a(s) imagem(ns)!');
  }
};

export default deliverymanPhotos;
