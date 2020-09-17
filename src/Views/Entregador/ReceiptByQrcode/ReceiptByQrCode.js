import React from 'react';
import {
  Text,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import checkDelivery from '../../../services/checkDelivery';
import styles from './styles';

const ReceiptByQrCode = ({ navigation }) => {

  const validateCode = async code => {
    try {
      const response = await checkDelivery(code);

      navigation.navigate('ReceiveOrder', response.data);
    } catch(error) {
      if (error.response) {
        if (error.response.status === 404) alert('Código do cliente inválido.')
        return;
      }
    }
  };

  onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    validateCode(e.data);
  };
  
  return(
    <QRCodeScanner
      onRead={this.onSuccess}
      flashMode={RNCamera.Constants.FlashMode.auto}
      topContent={
        <Text style={styles.text}>
          <Text style={styles.textBold}>Escaneie o QR code do cliente</Text> para 
            gerar o comprovante de entrega.
        </Text>
      }
    />
  );
};

export default ReceiptByQrCode;