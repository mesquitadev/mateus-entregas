import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const OrderConfirmed = ({ route: { params }, navigation: { navigate } }) => {

    params=""
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} disabled>
        <Image style={styles.touchableImg} source={require('../../../res/img/ligar.png')} />
        <Text style={styles.touchableText}>
          Entrega Confirmada
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonBar}>
      <TouchableOpacity
        style={ styles.selectedItemsButton }
        onPress={() => navigate('OrderList')}>
        <Text style={styles.selectedItemsButtonText}>
          {`Ver pedidos selecionados`}
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderConfirmed;