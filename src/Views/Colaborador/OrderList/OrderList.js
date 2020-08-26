import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import UserHeader from '../../../Components/UserHeader/UserHeader';
import SearchFilter from '../../../Components/SearchFilter/SearchFilter';
import OrderItem from '../../../Components/OrderItem/OrderItem';
import styles from './styles';
import api from '../../../services/api';

const OrderList = ({ navigation: { navigate } }) => {
  const [ listItems, setListItems ] = useState([]);
  const [ listItemsFilter, setListItemsFilter ] = useState([]);
  const [ selectedItems, setSelectedItems ] = useState([]);
  const [ count, setCount ] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/pedidos-pronta-entrega`);
      
      setListItemsFilter(response.data);
      setListItems(response.data);
    };

    fetchData();
  }, []);
  
  loadSelectedItems = data => {
    if (selectedItems.includes(data)) {
      const index = selectedItems.indexOf(data);
      
      selectedItems.splice(index, 1);
      if (count > 0) setCount(count-1);
    } else {
      setSelectedItems([ ...selectedItems.filter(item => item != ''), data ]);
      setCount(count+1);
    }
  };
  
  renderItem = ({ item }) => (
    <OrderItem data={item} navigate={navigate} showCheckBox={true} />
  );

  startSearchFilter = text => {
    const newData = listItemsFilter.filter(item => {
      const itemData = `
        ${item.cliente.pessoaFisica.nome.toUpperCase()} 
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

      <SearchFilter onChangeText={this.startSearchFilter} />

      <TouchableOpacity
        style={[ styles.selectedItemsButton, count > 0 ? styles.active : styles.inactive ]}
        onPress={() => navigate('SelectedItems', selectedItems)}>
        <Text style={styles.selectedItemsButtonText}>
          {`Ver pedidos selecionados  ${count}`}
        </Text>
      </TouchableOpacity>

      <View style={styles.orderList}>
        <Text style={styles.title}>Pedidos disponíveis</Text>
        <View>
          <FlatList
            style={styles.flatListEstilo}
            data={listItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    </View>
  );
}

export default OrderList;