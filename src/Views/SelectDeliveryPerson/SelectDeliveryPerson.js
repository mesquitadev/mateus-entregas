import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import styles from './styles';

const SelectDeliveryPerson = ({ route: { params }, navigation: { navigate } }) => {
  const [ deliveryPerson, setDeliveryPerson ] = useState('');
  const [ deliveryPersonFilter, setDeliveryPersonFilter ] = useState('');

  useEffect(() => {
    const fetchData = () => {
      const result = [
        { key: "01", name: "Sidney Sampaio Souza", cpf: "000000000-53"},
        { key: "02", name: "Mateus Sampaio Santos", cpf: "000000000-65"},
        { key: "03", name: "Debora Souza Sampaio", cpf: "000000000-78"},
      ];
      
      setDeliveryPersonFilter(result);
      setDeliveryPerson(result);
    };

    fetchData();
  }, []);

  startSearchFilter = text => {
    const newData = deliveryPersonFilter.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.cpf.toUpperCase()}`;
      const textData = text.toUpperCase();
      
      return itemData.indexOf(textData) > -1;    
    });
    
    setDeliveryPerson(newData);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigate('DeliveryInformation', item)}>
        <Image style={styles.image} source={require('../../res/img/entregador.png')} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.cpf}>CPF: {item.cpf}</Text>
        </View>
    </TouchableOpacity>
  );
  
  return (
    <View>
      <SearchFilter onChangeText={this.startSearchFilter} />
      <View style={styles.container}>
        <FlatList 
          data={deliveryPerson}
          keyExtractor={item => item.key}
          renderItem={this.renderItem}
        />
      </View>
    </View>
  );
};

export default SelectDeliveryPerson;