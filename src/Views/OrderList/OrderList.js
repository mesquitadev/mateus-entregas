import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import UserHeader from '../../Components/UserHeader/UserHeader';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import OrderItem from '../../Components/OrderItem/OrderItem';
import styles from './styles';

// Temp object
const response = [
  { key: "01", number: "123345567", date: "12/08/2020", clientName: "Higo Sampaio", address: "Recanto dos Vinhais" },
  { key: "02", number: "123345000", date: "12/08/2020", clientName: "Bruce Wayne", address: "Gotham" },
  { key: "03", number: "129995567", date: "12/08/2020", clientName: "Albert Einstein", address: "Nova Jersey" },
  { key: "04", number: "000345567", date: "12/08/2020", clientName: "Bill Gates", address: "Seattle" },
];

const OrderList = ({ navigation: { navigate } }) => {
  const [listItems, setListItems] = useState(response);

  // Criar o useEffect para carregar os pedidos da api
  // setListItems com a resposta do endpoint
  
  renderItem = ({ item }) => (
    <OrderItem data={item} navigate={navigate} />
  );

  startSearchFilter = text => {
    const newData = response.filter(item => {
      const itemData = `${item.clientName.toUpperCase()} ${item.address.toUpperCase()}`;      
      const textData = text.toUpperCase();
      
      return itemData.indexOf(textData) > -1;    
    });
    
    setListItems(newData);
  };
  
  return (
    <View>
      <UserHeader />

      <SearchFilter onChangeText={this.startSearchFilter} />
      
      <View style={styles.orderList}>
        <Text style={styles.title}>Pedidos disponíveis</Text>
        <View>
          <FlatList 
            data={listItems}
            keyExtractor={item => item.key}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    </View>
  );
}

export default OrderList;