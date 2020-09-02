import React,{ useState, useEffect }  from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';
import api from '../../../services/api';
import { MaterialIndicator } from 'react-native-indicators';

const GenerateQrCode =  ({ route: { params }, navigation: { navigate } }) => {
  const [ loading, setLoading ] = useState(true)
  
  useEffect(() => {
      const interval = setInterval(async() => {
      const response =  await api.get('/entregas/'+params.identificador_id);

      if( response.data.situacao == "2"){
        navigate('OrderConfirmed', params.identificador_id);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

return(
  <View style={styles.container}>
  <View style={styles.info}>
    <QRCode 
          size = {300} 
          bgColor = '#000000' 
          fgColor = '#FFFFFF'
          value={params.identificador}
          />
    <Text style={styles.identificador}>{params.identificador}</Text>
    <Text style={styles.text}>Apresente este QrCode ou código para o entregador confirmar a retirada do pedido.</Text>

    <MaterialIndicator
    style={styles.loading}
    animating={loading}
    hidesWhenStopped={true}
    color='rgb(0, 149, 218)' />
  </View>
</View>

);
};

export default GenerateQrCode;
