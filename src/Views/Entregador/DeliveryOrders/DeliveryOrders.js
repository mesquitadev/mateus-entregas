import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import UserHeader from '../../../Components/UserHeader/UserHeader';
import SearchFilter from '../../../Components/SearchFilter/SearchFilter';
import DeliveryOrdersItem from '../../../Components/DeliveryOrdersItem/DeliveryOrdersItem';
import styles from './styles';

const DeliveryOrders = ({ route: { params }, navigation: { navigate } }) => {
  const [ listItems, setListItems ] = useState([]);
  const [ listItemsFilter, setListItemsFilter ] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      setListItemsFilter(params.entregaPedidos);
      setListItems(params.entregaPedidos);
    };

    fetchData();
  }, []);
  
  const renderItem = ({ item }) => (
    <DeliveryOrdersItem data={item} navigate={navigate} />
  );

  const startSearchFilter = text => {
    const newData = listItemsFilter.filter(item => {
      const itemData = `
        ${item.endereco.bairro.toUpperCase()}
        `;      
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;    
    });
    setListItems(newData);
  };
  
  return (
    <View>
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