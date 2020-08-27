import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const DeliveryOrdersItem = ({ data, navigate }) => {
  
  // if (data.cliente.pessoaJuridica == null) {
  //   nome = data.cliente.pessoaFisica.nome;
  // } else {
  //   if (data.cliente.pessoaJuridica.razaoSocial == null) {
  //     nome = data.cliente.pessoaJuridica.cnpj;
  //   } else {
  //     nome = data.cliente.pessoaJuridica.razaoSocial;
  //   }
  // }

  return (
    <View style={styles.orderItem}>
      <Text style={styles.text}>Nº #{data.numeroPedido}</Text>
      <Text style={styles.label}>Realizado em {data.dataPedido}</Text>
      <Text style={styles.label}>Cliente</Text>
      <Text style={styles.text}>Nome</Text>
      <Text style={styles.label}>Endereço de entrega</Text>
      <Text style={styles.text}>Recanto dos Vinhais</Text>
      <View style={styles.horizontalRule} />
      <View style={styles.bar}>
        <View style={styles.status}>
          <Text style={styles.barText}>Aguardando entrega</Text>
        </View>
        <TouchableOpacity 
          style={styles.more}>
          <Text style={styles.barText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryOrdersItem;