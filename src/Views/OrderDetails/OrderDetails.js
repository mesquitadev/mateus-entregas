import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles';

const OrderDetails = ({ route: { params } }) => {
  const [ listItems, setListItems ] = useState('');

  useEffect(() => {
    const fetchData = () => {
      const result = [
        { key: "01", image: "../../res/img/account.png", text: "Biscoito Cream Cracker Fortaleza 400g x 30"},
        { key: "02", image: "../../res/img/account.png", text: "Massa para Tapioca Amafil 1kg x 24"},
        { key: "03", image: "../../res/img/account.png", text: "Refrigerante Guaraná Antarctica 2 Litros x 6"},
      ];
  
      setListItems(result);
    };

    fetchData();
  }, []);
  
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={require("../../res/img/account.png")} />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
  
  return(
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>Nº #{ params.item.number }</Text>
        <Text style={styles.label}>Realizado em { params.item.date}</Text>
        <Text style={styles.label}>Origem</Text>
        <Text style={styles.text}>Loja </Text>
        <Text style={styles.label}>Cliente</Text>
        <Text style={styles.text}>{ params.item.clientName }</Text>
        <Text style={styles.label}>Endereço de entrega</Text>
        <Text style={styles.text}>{ params.item.address }</Text>
        <Text style={styles.status}>Aguardando entrega</Text>
      </View>
      
      <View style={styles.divider} />

      <View style={styles.list}>
        <Text style={styles.label}>Itens</Text>
        <FlatList 
          data={listItems}
          keyExtractor={item => item.key}
          renderItem={this.renderItem}
        />
      </View>
    </View>
  );
};

export default OrderDetails;