import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';



  const GenerateQrCode = ({ route: { params }, navigation: { navigate } }) => {

  return(

    <View style={styles.container}>
    <View style={styles.info}>
      <QRCode 
            size = {200} 
            bgColor = '#000000' 
            fgColor = '#FFFFFF'
            value={params.person.identificador}
          />
      <Text style={styles.identificador}>{params.person.identificador}</Text>

      <Text style={styles.text}>Apresente este QrCode ou codigo para o entregadorconfirmar a retirada do pedido</Text>


    </View>
  </View>

  );
};

export default GenerateQrCode;
