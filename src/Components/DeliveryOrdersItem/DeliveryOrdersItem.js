import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const DeliveryOrdersItem = ({ data, navigate }) => {

  // if (data.pedido.cliente.pessoaJuridica == null) {
  //   setClientName(data.pedido.cliente.pessoaFisica.nome);
  // } else {
  //   if(data.pedido.cliente.pessoaJuridica.razaoSocial == null) {
  //     setClientName(data.pedido.cliente.pessoaJuridica.cnpj);
  //   } else {
  //     setClientName(data.pedido.cliente.pessoaJuridica.razaoSocial);
  //   }
  // }
  
  return (
    <View style={styles.orderItem}>
      <Text style={styles.text}>Nº #{data.pedido.numeroPedido}</Text>
      <Text style={styles.label}>Realizado em {data.pedido.dataPedido}</Text>
      <Text style={styles.label}>Cliente</Text>
      {/* <Text style={styles.text}>{data.pedido.cliente.pessoaFisica.nome}</Text> */}
      <Text style={styles.text}>Nome do cliente</Text>
      <Text style={styles.label}>Endereço de entrega</Text>
      <Text style={styles.text}>{data.pedido.endereco.bairro}</Text>
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