import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import myDelivery from '../../../services/myDelivery';
import UserHeader from '../../../Components/UserHeader/UserHeader';
import SearchFilter from '../../../Components/SearchFilter/SearchFilter';
import DeliveryOrdersItem from '../../../Components/DeliveryOrdersItem/DeliveryOrdersItem';
import styles from './styles';

const DeliveryOrders = ({ route, navigation }) => {
  const [ listItemsFilter, setListItemsFilter ] = useState([]);
  const [ listItems, setListItems ] = useState([]);
  const [ orderInProgress, setOrderInProgress ] = useState('');
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setListItemsFilter([]);
      setListItems([]);

      const fetchData = async () => {
        try {
          const asyncResult = await AsyncStorage.getItem('deliveryman_id');
          const deliverymanId = JSON.parse(asyncResult);

          const response = await myDelivery(deliverymanId.id);
          setListItemsFilter(response.data.entregaPedidos);
          setListItems(response.data.entregaPedidos);

          const filter = response.data.entregaPedidos.filter(item => {
            return (item.situacao === 3 || item.situacao === 7);
          });
          setOrderInProgress(filter);
        } catch(error) {
          if (error.response) {
            if (error.response.status === 404) {
              Alert.alert('Mateus Entregas', 'Você está sem pedidos no momento. Tente aceitar novos pedidos.');
              navigation.navigate('AcceptOrders');
              return;
            }
            if (error.response.status === 406) {
              Alert.alert('Mateus Entregas', 'Os pedidos estão duplicados.');
              navigation.navigate('AcceptOrders');
              return;
            }
          }
        }
      };

      fetchData();
      return () => fetchData();
    });

    return unsubscribe;
  }, [ navigation ]);
  
  const renderItem = ({ item }) => (
    <DeliveryOrdersItem data={item} orderInProgress={orderInProgress} navigate={navigation.navigate} />
  );

  const startSearchFilter = text => {
    const newData = listItemsFilter.filter(item => {
      const itemData = `
        ${item.pedido.endereco.bairro.toUpperCase()}
        `;      
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;    
    });
    setListItems(newData);
  };
  
  return (
    <View style={styles.container}>
      <UserHeader />

      <SearchFilter onChangeText={startSearchFilter} />

      <View style={styles.orderList}>
        <Text style={styles.title}>Pedidos disponíveis</Text>
        <View>
          <FlatList 
            data={listItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
}

export default DeliveryOrders;