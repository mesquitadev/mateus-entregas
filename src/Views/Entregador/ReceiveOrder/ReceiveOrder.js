import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const ReceiveOrder = ({ route: { params } }) => {
  return(
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={require('../../../res/img/receber_pedido.png')} />
        <View style={styles.card}>
          <Text style={styles.label}>Total de pedidos:</Text>
          <Text style={styles.text}>{params.totalPedidos}</Text>
          <Text style={styles.label}>Endereços de entrega:</Text>
          {params.bairros.map(bairro => (
            <Text style={styles.text} key={bairro.toString()}>{bairro}</Text>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}>
        <Text style={styles.buttonText}>
          Confirmar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReceiveOrder;