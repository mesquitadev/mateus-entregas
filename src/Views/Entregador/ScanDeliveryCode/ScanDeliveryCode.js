import React from 'react';
import {
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import styles from './styles';

const ScanDeliveryCode = () => {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };
  
  return(
    <QRCodeScanner
      onRead={this.onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.text}>
          <Text style={styles.textBold}>Escaneie o QR code</Text> para 
          receber os pedidos.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Digitar o código do entregador</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default ScanDeliveryCode;