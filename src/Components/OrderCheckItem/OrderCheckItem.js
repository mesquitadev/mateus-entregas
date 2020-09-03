import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';

const OrderCheckItem = ({ data }) => {
  const [ toggleCheckBox, setToggleCheckBox ] = useState(false);
  
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
    <View style={[styles.card, toggleCheckBox ? styles.active : styles.inactive]}>
      <Image style={styles.image} source={require('../../res/img/caixa.png')} />
      <View style={styles.info}>
        <Text style={styles.number}>N okº #{data.numeroPedido}</Text>
        <Text style={styles.name}> {nome.split(/(\s).+\s.+\s/).join("")}</Text>
      </View>
      <CheckBox
        boxType={'circle'}
        onTintColor={'#00A349'}
        onCheckColor={'#FFF'}
        onFillColor={'#00A349'}
        disable={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => {
          setToggleCheckBox(newValue),
          loadSelectedOrders(data)
        }}
      />
    </View>
  );
};

export default OrderCheckItem;