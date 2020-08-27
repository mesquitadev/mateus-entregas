import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Moment  from 'moment';

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
  
  if(params.item.cliente.pessoaJuridica == null) {
    nome = params.item.cliente.pessoaFisica.nome;
  } else {
    if(params.item.cliente.pessoaJuridica.razaoSocial == null) {
      nome = params.item.cliente.pessoaJuridica.cnpj;
    } else {
      nome = params.item.cliente.pessoaJuridica.razaoSocial;
    }
  }

  return(
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>Nº #{ params.item.numeroPedido }</Text>
        <Text style={styles.label}>Realizado em {Moment(params.item.dataPedido).format('MM/DD/YYYY HH:mm')}</Text>
        <Text style={styles.label}>Origem</Text>
        <Text style={styles.text}>Loja -</Text>
        <Text style={styles.label}>Cliente</Text>
        <Text style={styles.text}>{ nome }</Text>
        <Text style={styles.label}>Rota de entrega</Text>
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