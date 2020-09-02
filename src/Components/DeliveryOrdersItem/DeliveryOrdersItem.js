import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import styles from './styles';

const DeliveryOrdersItem = ({data, orderInProgress, navigate}) => {

  const getStatusText = () => {
    let situacao = data.situacao;

    switch (situacao) {
      case 2:
        return 'Aguardando entrega'
        break;
      case 3:
        return 'Saiu para entrega'
        break;
      case 4:
        return 'Entregue'
        break;
      case 5:
        return 'Entregue'
        break;
      default:
        return 'Aguardando'
        break;
    }
  };

  const getItemColor = () => {
    let situacao = data.situacao;

    switch (situacao) {
      case 2:
        return '#DAE0E3'
        break;
      case 3:
        return '#0095DA'
        break;
      case 4:
        return '#00A349'
        break;
      case 5:
        return '#00A349'
        break;
      default:
        return '#DAE0E3'
        break;
    }
  };
  
  return (
    <TouchableOpacity
      style={[styles.orderItem, {borderColor: getItemColor()}]}
      onPress={() => {
        orderInProgress.length && data.situacao !== 3 ?
        Alert.alert('Mateus Entregas', 'Você possui uma entrega em andamento') :
        navigate('StartDelivery', {data: data})
      }}>
      <Text style={styles.text}>Nº #{data.pedido.numeroPedido}</Text>
      <Text style={styles.label}>Realizado em {data.pedido.dataPedido}</Text>
      <Text style={styles.label}>Cliente</Text>
      {/* <Text style={styles.text}>{data.pedido.cliente.pessoaFisica.nome}</Text> */}
      <Text style={styles.text}>Nome do cliente</Text>
      <Text style={styles.label}>Endereço de entrega</Text>
      <Text style={styles.text}>{data.pedido.endereco.bairro}</Text>
      <View style={styles.horizontalRule} />
      <View style={styles.bar}>
        <View style={[styles.status, {backgroundColor: getItemColor()}]}>
          <Text style={styles.barText}>{getStatusText()}</Text>
        </View>
        <View
          style={styles.more}>
          <Text style={styles.barText}>Ver mais</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DeliveryOrdersItem;
