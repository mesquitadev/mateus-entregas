import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';

const OrderDetails = ({ route: { params } }) => {
  return(
    <ScrollView style={styles.container}>
      <View style={styles.info}>
        <Text>Nº { params.item.number }</Text>
        <Text>Realizado em { params.item.date}</Text>
        <Text>Origem</Text>
        <Text>Loja </Text>
        <Text>Cliente</Text>
        <Text>{ params.item.clientName }</Text>
        <Text>Endereço de entrega</Text>
        <Text>{ params.item.address }</Text>
      </View>
      <View style={styles.list}>
        
      </View>
    </ScrollView>
  );
};

export default OrderDetails;