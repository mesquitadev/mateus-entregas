import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Moment from 'moment';

import styles from './styles';

const OrderItemSelected = ({ data, navigate }) => {
  const [ toggleCheckBox, setToggleCheckBox ] = useState(false);
  const [ checkBox, setCheckBox ] = useState(true);
  const [ itemsData, setItemsData ] = useState(data);
  

if(data.cliente.pessoaJuridica == null) {
  nome = data.cliente.pessoaFisica.nome;
} else {
  if(data.cliente.pessoaJuridica.razaoSocial == null) {
    nome = data.cliente.pessoaJuridica.cnpj;
  } else {
    nome = data.cliente.pessoaJuridica.razaoSocial;
  }
}

  return (
    <View style={[styles.orderItem, toggleCheckBox ? styles.active : styles.inactive]}>
      <Text style={styles.text}>#{data.numeroPedido}</Text>
      <Text style={styles.label}>Realizado em {Moment(data.dataPedido).format('MM/DD/YYYY HH:mm')}</Text>
      <Text style={styles.label}>Cliente</Text>
      <Text style={styles.text}>{nome}</Text>
      <Text style={styles.label}>Rota de Entrega</Text>
      <Text style={styles.text}>{data.endereco.bairro}</Text>
      <View style={styles.horizontalRule} />
      <View style={styles.bar}>
        <View style={styles.status}>
          <Text style={styles.barText}>Aguardando entrega</Text>
        </View>
        <TouchableOpacity 
          style={styles.more} 
          onPress={() => navigate('OrderDetails', { item: data })}>
          <Text style={styles.barText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.trash}>
      <TouchableOpacity 
          style={styles.more} 
          onPress={(newValue) => {
            loadSelectedItems(data)
          }}
          >
                  <Ionicons name={'trash'} size={25} color={"#777"}/>

        </TouchableOpacity>

      </View>
    </View>
  );
};

export default OrderItemSelected;