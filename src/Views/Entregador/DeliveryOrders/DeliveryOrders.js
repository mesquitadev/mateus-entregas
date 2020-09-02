import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

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
          const response = await myDelivery(route.params);
          
          setListItemsFilter(response.data.entregaPedidos);
          setListItems(response.data.entregaPedidos);

          const filter = response.data.entregaPedidos.filter(item => {
            return item.situacao === 3;
          });

          setOrderInProgress(filter);
        } catch(error) {
          alert('Não foi possível trazer os pedidos.')
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