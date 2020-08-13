import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const OrderItem = ({ data }) => (
  <View style={styles.orderItem}>
    <Text style={styles.text}>No #{data.number}</Text>
    <Text style={styles.label}>Realizado em {data.date}</Text>
    <Text style={styles.label}>Cliente</Text>
    <Text style={styles.text}>{data.clientName}</Text>
    <Text style={styles.label}>Endereço de entrega</Text>
    <Text style={styles.text}>{data.address}</Text>
  </View>
);

export default OrderItem;