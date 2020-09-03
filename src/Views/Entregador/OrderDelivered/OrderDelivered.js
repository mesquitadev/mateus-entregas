import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const OrderDelivered = ({ navigation, route }) => {
  return(
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={require("../../../res/img/orderdelivered.png")} />

          <Text style={styles.textStrong}>Pedido entregue com sucesso!</Text>
          
          <TouchableOpacity
            onPress={() => navigation.navigate('DeliveryOrders')}
            style={styles.button}>
            <Text style={styles.buttonText}>
              Voltar ao início
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OrderDelivered;