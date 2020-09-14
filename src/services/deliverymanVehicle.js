import api from './api';

const deliverymanVehicle = async (data) => {
    console.log(data)
    
  let bodyHTTP = {
    veiculo: {
      placa: data.placa,
      modelo: data.modelo
    },
    log: {
      ip: '',
      dispositivo: '',
      localizacao: '',
    },
  };
  const response = await api.put(
    `/entregador/${data.idUser}/veiculo`,
    JSON.stringify(bodyHTTP),
  );
  return response;
};

export default deliverymanVehicle;
