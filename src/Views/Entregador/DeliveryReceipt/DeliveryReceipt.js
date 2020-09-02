import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const DeliveryReceipt = ({ route: {params}, navigation }) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.touchable}
        onPress={() => navigation.navigate('ReceiptByQrCode')}>
        <Image style={styles.touchableImg} source={require('../../../res/img/ligar.png')} />
        <Text style={styles.touchableText}>
          QR Code
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('ReceiptByAnotherPerson', params)}>
        <Image style={styles.touchableImg} source={require('../../../res/img/ligar.png')} />
        <Text style={styles.touchableText}>
          Recebimento terceiros
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryReceipt;