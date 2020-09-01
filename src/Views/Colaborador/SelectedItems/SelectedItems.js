import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import OrderItem from '../../../Components/OrderItem/OrderItem';
import styles from './styles';

const SelectedItems = ({ route: { params }, navigation: { navigate } }) => {
  const [ selectedItems, setSelectedItems ] = useState('');

  useEffect(() => {
    setSelectedItems(params);
  }, []);

  renderItem = ({ item }) => (
    <OrderItem data={item} navigate={navigate} showCheckBox={true} />
  );
  
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
          onPress={() => navigate('SelectDeliveryPerson', selectedItems)}>
          <Text style={styles.selectedItemsButtonText}>
            Encaminhar pedidos
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SelectedItems;