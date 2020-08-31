import React, {useState} from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';

import styles from './styles';

const StartDelivery = ({route: {params}, navigation}) => {
  const [startDelivery, setStartDelivery] = useState(false);
  const [delivered, setDelivered] = useState(false);

  const _data = params.data;
  const _pedido = params.data.pedido;

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.info}>
          <Text style={styles.label}>Origem</Text>
          <Text style={styles.text}>Loja -</Text>
          <Text style={styles.label}>Cliente</Text>
          <Text style={styles.text}>Sem nome</Text>
          <Text style={styles.label}>Endereço de entrega</Text>
          <Text style={styles.text}>{_pedido.endereco.bairro}</Text>
          <Text style={styles.text}>{_pedido.endereco.endereco}</Text>
          <Text style={styles.text}>
            {_pedido.endereco.estado}, {_pedido.endereco.cep}
          </Text>
          <Text style={styles.status}>Aguardando entrega</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('OrderDetails', {item: _pedido})}>
          <Text style={styles.btnViewMoreText}>Ver mais</Text>
        </TouchableOpacity>
        <View style={styles.contact}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${_pedido.cliente.telefone}`)}
            style={styles.contactTouchable}>
            <Image source={require('../../../res/img/ligar.png')} />
            <Text style={styles.contactTouchableText}>Ligar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactTouchable}>
            <Image source={require('../../../res/img/localizar.png')} />
            <Text style={styles.contactTouchableText}>Localização</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('DeliveryReceipt', _pedido)}
          style={startDelivery ? styles.receipt : styles.hideTouchable}>
          <Image
            style={styles.receiptImg}
            source={require('../../../res/img/caixa.png')}
          />
          <Text style={styles.receiptText}>Comprovante de entrega</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={!startDelivery ? styles.startTouchable : styles.hideTouchable}
        onPress={() => setStartDelivery(true)}>
        <Text style={styles.startTouchableText}>Iniciar entrega</Text>
      </TouchableOpacity>

      <View style={startDelivery ? styles.actions : styles.hideTouchable}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DeclineOrders', {
              data: _data,
            })
          }
          style={styles.actionsTouchableLight}>
          <Text style={styles.actionsTouchableLightText}>Suspender</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AcceptOrders', {
              data: _data,
            })
          }
          style={styles.actionsTouchable}>
          <Text style={styles.actionsTouchableText}>Entregue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartDelivery;
