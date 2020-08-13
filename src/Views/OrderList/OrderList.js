import React from 'react';
import { View, FlatList } from 'react-native';

import OrderItem from '../../Components/OrderItem/OrderItem';
import styles from './styles';

// Temp object
const response = [
  { key: "01", number: "123345567", date: "12/08/2020", clientName: "Higo Sampaio", address: "Recanto dos Vinhais" },
  { key: "02", number: "123345000", date: "12/08/2020", clientName: "Bruce Wayne", address: "Gotham" },
  { key: "03", number: "129995567", date: "12/08/2020", clientName: "Albert Einstein", address: "Nova Jersey" },
  { key: "04", number: "000345567", date: "12/08/2020", clientName: "Bill Gates", address: "Seattle" },
];

const OrderList = () => {

  renderItem = ({ item }) => (
    <OrderItem data={item} />
  );
  
  return (
    <View>  
      <FlatList 
        data={response}
        keyExtractor={item => item.key}
        renderItem={this.renderItem}
        />
    </View>
  );
}

export default OrderList;