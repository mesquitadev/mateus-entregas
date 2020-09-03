import React, { useState, useEffect } from 'react';
import { Alert, View, Text, FlatList, TouchableOpacity } from 'react-native';

import OrderItemSelected from '../../../Components/OrderItemSelected/OrderItemSelected';
import styles from './styles';

const SelectedItems = ({ route: { params }, navigation: { navigate } }) => {
  const [ selectedItems, setSelectedItems ] = useState('');

  useEffect(() => {
    setSelectedItems(params);
  }, []);

  renderItem = ({ item }) => (
    <OrderItemSelected data={item} navigate={navigate} />
  );


  loadSelectedItems = data => {
    const newList = selectedItems.filter((item) => item.id != data.id);
    setSelectedItems(newList);
  };

  confirmOrderCount = () =>
  {
    if(selectedItems.length > 0) {
      navigate('SelectDeliveryPerson', selectedItems)
      return;
    }

    Alert.alert('App Entregas', 'Não há nenhum pedido em sua lista.')
    navigate('OrderList');
    return
  }

  return(
    <>
      <View style={styles.container}>
        <FlatList 
          data={selectedItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />

      </View>
      <View style={styles.buttonBar}>
        <TouchableOpacity
          style={styles.selectedItemsButton}
          onPress={() => confirmOrderCount()}>
          <Text style={styles.selectedItemsButtonText}>
            Encaminhar pedidos
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SelectedItems;