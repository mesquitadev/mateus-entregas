import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import styles from './styles';

const DeliveryOrdersItem = ({data, orderInProgress, navigate}) => {

  const getStatusText = () => {
    let situation = data.situacao;

    switch (situation) {
      case 2:
        return 'Aguardando entrega'
        break;
      case 3:
        return 'Saiu para entrega'
        break;
      case 6:
        return 'Cancelado'
        break;
      case 7:
        return 'Saiu para entrega'
        break;
      case 8:
        return 'Adiado'
        break;
      default:
        return 'Entregue'
        break;
    }
  };

  const getItemColor = () => {
    let situation = data.situacao;

    switch (situation) {
      case 2:
        return '#DAE0E3'
        break;
      case 3:
        return '#0095DA'
        break;
      case 6:
        return '#F92121'
        break;
      case 7:
        return '#0095DA'
        break;
      case 8:
        return '#D98016'
        break;
      default:
        return '#00A349'
        break;
    }
  };
  
  return (
    <TouchableOpacity
      style={[styles.orderItem, {borderColor: getItemColor()}]}
      onPress={() => {
        orderInProgress.length && (data.situacao === 2 || data.situacao === 8) ?
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
