import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';

import SearchFilter from '../../../Components/SearchFilter/SearchFilter';
import styles from './styles';
import api from '../../../services/api';

const SelectDeliveryPerson = ({ route: { params }, navigation: { navigate } }) => {
  const [ deliveryPerson, setDeliveryPerson ] = useState('');
  const [ deliveryPersonFilter, setDeliveryPersonFilter ] = useState('');
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/entregadores`);
      
      setDeliveryPersonFilter(response.data);
      setDeliveryPerson(response.data);

      setLoading(false);
    };

    fetchData();
  }, []);

  startSearchFilter = text => {
    const newData = deliveryPersonFilter.filter(item => {
      const itemData = `${item.nome.toUpperCase()} ${item.cpf.toUpperCase()}`;
      const textData = text.toUpperCase();
      
      return itemData.indexOf(textData) > -1;    
    });
    
    setDeliveryPerson(newData);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigate('DeliveryInformation', { person: item, orders: params })}>
        <Image style={styles.image} source={require('../../../res/img/entregador.png')} />
        <View>
          <Text style={styles.name}>{item.nome}</Text>
          <Text style={styles.cpf}>CPF: {item.cpf}</Text>
        </View>
    </TouchableOpacity>
  );
  
  return (
    <View>
      <SearchFilter onChangeText={this.startSearchFilter} />
     
      <ScrollView style={styles.lista}>
        <FlatList 
          data={deliveryPerson}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          nestedScrollEnabled
        />
      </ScrollView>
      

      <PacmanIndicator
      style={styles.loading}
      animating={loading}
      hidesWhenStopped={true}
      color='rgb(0, 149, 218)' />
    </View>
  );
};

export default SelectDeliveryPerson;