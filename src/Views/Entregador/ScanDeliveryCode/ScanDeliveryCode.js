import React from 'react';
import {
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import checkDelivery from '../../../services/checkDelivery';
import styles from './styles';

const ScanDeliveryCode = ({ navigation }) => {

  const validateCode = async code => {
    try {
      const response = await checkDelivery(code);

      navigation.navigate('ReceiveOrder', response.data);
    } catch(error) {
      if (error.response) {
        if (error.response.status === 404) alert('Não existem pedidos para esse código.')
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
          <Text style={styles.textBold}>Escaneie o QR code</Text> para 
          receber os pedidos.
        </Text>
      }
      bottomContent={
        <TouchableOpacity 
          onPress={() => navigation.navigate('EnterDeliverymanCode')}
          style={styles.button}>
          <Text style={styles.buttonText}>Digitar o código do entregador</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default ScanDeliveryCode;