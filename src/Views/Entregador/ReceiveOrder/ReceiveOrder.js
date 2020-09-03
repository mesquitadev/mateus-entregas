import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import confirmReceiptOfDelivery from '../../../services/confirmReceiptOfDelivery';
import styles from './styles';

const ReceiveOrder = ({ route: { params }, navigation }) => {

  const confirmReceipt = async () => {
    try {
      const response = await confirmReceiptOfDelivery(params);
      
      navigation.navigate('DeliveryOrders');
    } catch(error) {
      alert('Ocorreu um problema ao confirmar o recebimento dos pedidos.')
    }
  };
  
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
        onPress={confirmReceipt}
        style={styles.button}>
        <Text style={styles.buttonText}>
          Confirmar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReceiveOrder;