import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const OrderItem = ({ data, navigate, showCheckBox }) => {
  const [ toggleCheckBox, setToggleCheckBox ] = useState(false);
  const [ checkBox, setCheckBox ] = useState(true);
  

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
      <Text style={styles.text}><Ionicons name={'cart-outline'} size={16} color={"#777"}/> #{data.numeroPedido}  <Image source={require('../../res/img/gmcore.png')}  width={16} height={16} /> #{data.numeroEstoque}</Text>
      <Text style={styles.label}>Realizado em {Moment(data.dataPedido).format('DD/MM/YYYY HH:mm')}</Text>
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
      <View style={styles.checkBox, showCheckBox ? styles.checkBox : styles.hide}>
        <CheckBox
          boxType={'square'}
          onTintColor={'#00A349'}
          onCheckColor={'#FFF'}
          onFillColor={'#00A349'}
          disable={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => {
            setToggleCheckBox(newValue)
            loadSelectedItems(data)
          }}
        />
      </View>
    </View>
  );
};

export default OrderItem;