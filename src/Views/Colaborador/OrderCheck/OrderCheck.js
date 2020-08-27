import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import OrderCheckItem from '../../../Components/OrderCheckItem/OrderCheckItem';
import styles from './styles';

const OrderCheck = ({ route: { params }, navigation: { navigate } }) => {
  const [ orders, setOrders ] = useState([]);
  const [ selectedOrders, setSelectedOrders ] = useState([]);

  useEffect(() => {
    setOrders(params.orders);
  }, []);

  checkSelectedOrders = () => {
    if (selectedOrders.length !== orders.length) 
      console.warn('Você precisa conferir todos os pedidos.')
    else
      navigate('GenerateQrCode', params);
  };

  loadSelectedOrders = item => {
    if (selectedOrders.includes(item)) {
      const index = selectedOrders.indexOf(item);
      
      selectedOrders.splice(index, 1);
    } else {
      setSelectedOrders([ ...selectedOrders.filter(item => item != ''), item ]);
    }
  };

  let renderItem = ({ item }) => (
    <OrderCheckItem data={item} />
  );
  
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Pedidos</Text>
        <View style={styles.list}>
          <FlatList 
            data={orders}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
      <View style={styles.buttonBar}>
        <TouchableOpacity
          onPress={() => checkSelectedOrders()}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Gerar QrCode
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default OrderCheck;