import React, { useState, useEffect } from 'react';
import { Image, TextInput, View, Text, FlatList, TouchableOpacity } from 'react-native';

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
      console.log("tchau")
      setListItemsFilter(response.data);
      setListItems(response.data);
    };
    fetchData()
    return () => fetchData();
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

  tipoPessoa = (objeto) => {
    if(objeto.cliente.pessoaJuridica == null) {
      return objeto.cliente.pessoaFisica.nome;
    } else {
      if(objeto.cliente.pessoaJuridica.razaoSocial == null) {
        return objeto.cliente.pessoaJuridica.cnpj;
      } else {
        return objeto.cliente.pessoaJuridica.razaoSocial;
      }
    }
  }

  startSearchFilter = text => {
    const newData = listItemsFilter.filter(item => {
      const itemData = `
        ${tipoPessoa(item)}
        ${item.numeroPedido} 
        ${item.endereco.bairro.toUpperCase()}
        `;      
      const textData = text.toUpperCase();
      
      return itemData.indexOf(textData) > -1;    
    });
    
    setListItems(newData);
  };
  
  const FlatListHeader = () => {
    return (
      <View>
        <Text style={styles.title}>Pedidos disponíveis</Text>
      </View>
    );
  }

  return (
    <View>
      <UserHeader />

      <SearchFilter onChangeText={this.startSearchFilter} />

      <View style={styles.orderList}>
          <FlatList
            style={styles.flatListEstilo}
            data={listItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
             nestedScrollEnabled    
            ListHeaderComponent={FlatListHeader}
          />
      </View>
    
      <TouchableOpacity
        style={[ styles.selectedItemsButton, count > 0 ? styles.active : styles.inactive ]}
        onPress={() => navigate('SelectedItems', selectedItems)}>
        <Text style={styles.selectedItemsButtonText}>
          {`Ver pedidos selecionados  ${count}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default OrderList;