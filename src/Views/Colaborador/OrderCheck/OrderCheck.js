import React, { useState, useEffect } from 'react';
import { Alert, View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';
import OrderCheckItem from '../../../Components/OrderCheckItem/OrderCheckItem';
import styles from './styles';

const OrderCheck = ({ route: { params }, navigation: { navigate } }) => {
  const [ orders, setOrders ] = useState([]);
  const [ selectedOrders, setSelectedOrders ] = useState([]);
  const [ user, setUser ] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('entregas_user_data');
        const userData = JSON.parse(data);
        setUser(userData);
      } catch(err) {
        console.warn(err);
      }
    };
    getUserData();
  }, []); 

  useEffect(() => {
    setOrders(params.orders);
  }, []);

  const numeroPedidoList = params.orders.map((ordem, index) => {
    return ({numeroPedido: ordem.numeroPedido})
  });

  checkSelectedOrders = async () => {
     if (selectedOrders.length !== orders.length){
      Alert.alert('App Entregas', 'Você precisa confirmar todos os itens da entrega.')
     } else {
        const bodyParam ={
            colaborador: {
              id : user.id,
              username: user.username
            },
            entregador: {
              id : params.person.usuario.id,
              username: params.person.usuario.username,
            },  
            pedidos: numeroPedidoList,
            log: {
              ip: "",
              dispositivo: "",
              localizacao: ""
            }
          }
          
         const response = await api.post(`/entrega`, bodyParam);
         params.identificador = response.data.identificador
         params.identificador_id = response.data.id
         params.user_logged = user
        
         navigate('GenerateQrCode', params);
        }
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
            nestedScrollEnabled
          />
        </View>
      </View>

      <View style={styles.buttonBar}>
        <TouchableOpacity
          onPress={() => checkSelectedOrders()}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Confirmar
          </Text>
        </TouchableOpacity>
      </View>
      
    </>
  );
};

export default OrderCheck;