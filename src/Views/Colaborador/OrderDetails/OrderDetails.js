import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles';

const OrderDetails = ({ route: { params } }) => {
  const [ listItems, setListItems ] = useState('');

  useEffect(() => {
    const fetchData = () => {
      setListItems(params.item.items);
    };

    fetchData();
  }, []);
  
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={require("../../../res/img/account.png")} />
      <Text style={styles.itemText}>{item.nome}</Text>
    </View>
  );
  
  return(
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>Nº #{ params.item.numeroPedido }</Text>
        <Text style={styles.label}>Realizado em { params.item.dataPedido}</Text>
        <Text style={styles.label}>Origem</Text>
        <Text style={styles.text}>Loja -</Text>
        <Text style={styles.label}>Cliente</Text>
        <Text style={styles.text}>{ params.item.cliente.pessoaFisica.nome }</Text>
        <Text style={styles.label}>Endereço de entrega</Text>
        <Text style={styles.text}>{ params.item.endereco.bairro }</Text>
        <Text style={styles.status}>Aguardando entrega</Text>
      </View>
      
      <View style={styles.divider} />

      <View style={styles.list}>
        <Text style={styles.label}>Itens</Text>
        <FlatList 
          data={listItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    </View>
  );
};

export default OrderDetails;