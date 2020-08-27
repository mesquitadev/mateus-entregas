import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';



const GenerateQrCode = () => {

  return(

    <View style={styles.container}>
    <View style={styles.info}>
      <QRCode 
            size = {200} 
            bgColor = '#000000' 
            fgColor = '#FFFFFF'
            value="123098123"
          />
      <Text style={styles.text}>{user.username}</Text>
      <Text style={styles.text}>Separador</Text>
      <Text style={styles.text}>CPF: 000000000-00</Text>
    </View>
    <View style={styles.button}>
      <Button
      onPress={() => navigation.navigate('Login')}
      title="Sair" />
    </View>
  </View>

  );
};

export default GenerateQrCode;