import React,{ useState, useEffect }  from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';
import api from '../../../services/api';


  const GenerateQrCode =  ({ route: { params }, navigation: { navigate } }) => {
    const [loop, setLoop] = useState()

      useEffect(() => {
        setLoop(setInterval(async() => {
        const response =  await api.get('/entregas/'+params.identificador_id);
         if( response.data.situacao=="2"){
          //clearInterval(loop)
         navigate('OrderConfirmed', params.identificador_id);
        }else{
          console.log("/SITUACAO: "+response.data.situacao)
        }
       }, 10000)
      )
      return function cleanup() {
        console.log('cleaning up')
        clearInterval(loop)
    }
    }, []);

  return(

    <View style={styles.container}>
    <View style={styles.info}>
      <QRCode 
            size = {300} 
            bgColor = '#000000' 
            fgColor = '#FFFFFF'
             value={params.identificador}
            // value="123456"
            />
      <Text style={styles.identificador}>{params.identificador}</Text>
      <Text style={styles.text}>Apresente este QrCode ou código para o entregador confirmar a retirada do pedido.</Text>
    </View>
  </View>

  );
};

export default GenerateQrCode;
