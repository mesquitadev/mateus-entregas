import React from 'react';
import { View, Text } from 'react-native';

const OrderItem = ({ data }) => (
  <View>
    <Text>No #{data.number}</Text>
    <Text>Realizado em {data.date}</Text>
    <Text>Cliente</Text>
    <Text>{data.clientName}</Text>
    <Text>Endereço de entrega</Text>
    <Text>{data.address}</Text>
  </View>
);

export default OrderItem;