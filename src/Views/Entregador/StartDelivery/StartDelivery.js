import React, { useState, useEffect } from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';

import onStartDelivery from '../../../services/onStartDelivery';
import styles from './styles';

const StartDelivery = ({ route: {params}, navigation }) => {
  const [ startDelivery, setStartDelivery ] = useState('');
  const [ receiptName, setReceiptName ] = useState('');
  const [ receiptCpf, setReceiptCpf ] = useState('');
  const [ delivered, setDelivered ] = useState('');

  const _data = params.data;
  const _pedido = params.data.pedido;

  useEffect(() => {
    if (params?.post) {
      setReceiptName(params.post.name);
      setReceiptCpf(params.post.cpf);
      setDelivered(true);
    }
  }, [params?.post]);

  const handleStartDelivery = async () => {
    try {
      const response = await onStartDelivery(_data.id);

      setStartDelivery(true);
    } catch(error) {
      alert('Não foi possível iniciar a entrega.')
    }
  };
  
  return(
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
          onPress={() => navigation.navigate('DeliveryReceipt')}
          style={
            [(_data.situacao !== 3 && !startDelivery) ? styles.hide : styles.receipt,
            !delivered ? styles.receipt : styles.receiptActive]}>
          <Image 
            style={!delivered ? styles.receiptImg : styles.hide} 
            source={require('../../../res/img/caixa.png')} 
          />
          <Image 
            style={delivered ? styles.receiptImg : styles.hide} 
            source={require('../../../res/img/icon-check.png')} 
          />
          <Text style={styles.receiptText}>Comprovante de entrega</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={(_data.situacao !== 3 && !startDelivery ) ? styles.startTouchable : styles.hide}
        onPress={handleStartDelivery}>
        <Text style={styles.startTouchableText}>
          Iniciar entrega
        </Text>
      </TouchableOpacity>

      <View style={(_data.situacao !== 3 && !startDelivery) ? styles.hide : styles.actions}>
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
          // onPress={() =>
          //   navigation.navigate('AcceptOrders', {
          //     data: _data,
          //   })
          // }
          style={delivered ? 
            styles.actionsTouchableActive : 
            styles.actionsTouchable}>
          <Text style={delivered ? 
              styles.actionsTouchableActiveText :
              styles.actionsTouchableText}>
            Entregar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartDelivery;
