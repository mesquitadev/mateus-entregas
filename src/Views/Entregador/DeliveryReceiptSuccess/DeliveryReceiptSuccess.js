import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import UserHeader from '../../../Components/UserHeader/UserHeader';
import styles from './styles';

const DeliveryReceiptSuccess = ({ navigation, route }) => {
  return(
    <>
      <UserHeader />
      
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={require("../../../res/img/recibo-success.png")} />

          <Text style={styles.textStrong}>Código Válido!</Text>
          <Text style={styles.label}>Cliente</Text>
          <Text style={styles.text}>Nome do cliente</Text>
          <Text style={styles.label}>Pedido</Text>
          <Text style={styles.text}># Número pedido</Text>
          
          <TouchableOpacity
            onPress={() => navigation.navigate('StartDelivery')}
            style={styles.button}>
            <Text style={styles.buttonText}>
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DeliveryReceiptSuccess;