import React,{ useState, useEffect }  from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';
import api from '../../../services/api';


  const GenerateQrCode =  ({ route: { params }, navigation: { navigate } }) => {
//console.log(params.user_logged);
      // useEffect(() => {
      //   const id = setInterval(() => {
      //     setCount(c => c + 1); // ✅ This doesn't depend on `count` variable outside
      //   }, 1000);
      //   return () => clearInterval(id);
      // }, []);


      useEffect(() => {
    var timer = setInterval(async() => {
        const response =  await api.get('/entrega/'+params.identificador);
        if( response.data.id>0 && isNaN(response.data.id) === false){
          console.log(params +" - "+params.identificador + " --=>" + response.data.id);
          navigate('OrderConfirmed', params);

        }
      }, 10000)
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
