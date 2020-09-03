import React, { useState, useEffect } from 'react';
import { View, Text, Image, Linking, TouchableOpacity, Alert } from 'react-native';

import onStartDelivery from '../../../services/onStartDelivery';
import confirmOrderDelivery from '../../../services/confirmOrderDelivery';
import styles from './styles';

const StartDelivery = ({ route: {params}, navigation }) => {
  const [ receiptName, setReceiptName ] = useState('');
  const [ receiptCpf, setReceiptCpf ] = useState('');
  const [ receiptSituation, setReceiptSituation ] = useState('');
  
  const [ showStartTouchable, setShowStartTouchable ] = useState(false);
  const [ showReturnTouchable, setShowReturnTouchable ] = useState(false);
  const [ showActionsTouchables, setShowActionsTouchables ] = useState(false);
  const [ delivered, setDelivered ] = useState(false);

  const _data = params.data;
  const _pedido = params.data.pedido;

  // useEffect(() => {
  //   if (params?.post) {
  //     setReceiptName(params.post.name);
  //     setReceiptCpf(params.post.cpf);
  //     setReceiptSituation(params.post.situacao);
  //     setDelivered(true);
  //   }
  // }, [params?.post]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const fetchData = async () => {
        renderTouchables();
      };

      fetchData();
      return () => fetchData();
    });

    return unsubscribe;
  }, [ navigation ]);

  const renderTouchables = () => {
    const situation = _data.situacao;

    switch(situation) {
      case 2:
        setShowStartTouchable(true);
        setShowReturnTouchable(false);
        setShowActionsTouchables(false);
        break;
      case 3:
        setShowStartTouchable(false);
        setShowReturnTouchable(false);
        setShowActionsTouchables(true);
        break;
      case 7:
        setShowStartTouchable(false);
        setShowReturnTouchable(false);
        setShowActionsTouchables(true);
        break;
      case 8:
        setShowStartTouchable(false);
        setShowReturnTouchable(true);
        setShowActionsTouchables(false);
        break;
      default:
        setShowStartTouchable(false);
        setShowReturnTouchable(false);
        setShowActionsTouchables(false);
        break;
    }
  };

  const handleStartDelivery = async () => {
    try {
      const response = await onStartDelivery(_data.id);

      setShowStartTouchable(false);
      setShowReturnTouchable(false);
      setShowActionsTouchables(true);
    } catch(error) {
      alert('Não foi possível iniciar a entrega.')
    }
  };

  const handleReturnDelivery = async () => {
    try {
      // const response = await onReturnDelivery(_data.id);
      alert('onReturnDelivery');
      
      setShowStartTouchable(false);
      setShowReturnTouchable(false);
      setShowActionsTouchables(true);
    } catch(error) {
      alert('Não foi possível iniciar a entrega.')
    }
  };

  const confirmDelivery = async () => {
    try {
      const response = await confirmOrderDelivery(
        _data.id, receiptName, 
        receiptCpf, 
        receiptSituation);

      navigation.navigate('OrderDelivered');
    } catch (error) {
      Alert.alert('Mateus Entregas', 'Não foi possível finalizar a entrega do pedido.');
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

        {showActionsTouchables ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('DeliveryReceipt')}
            style={!delivered ? styles.receipt : styles.receiptActive}>
              
            {!delivered ? (
              <Image 
                style={styles.receiptImg} 
                source={require('../../../res/img/caixa.png')} 
              />
            ) : null}

            {delivered ? (
              <Image 
                style={styles.receiptImg} 
                source={require('../../../res/img/icon-check.png')} 
              />
            ) : null}

            <Text style={styles.receiptText}>Comprovante de entrega</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      
      {showStartTouchable ? (
        <TouchableOpacity
          style={styles.startTouchable}
          onPress={handleStartDelivery}>
          <Text style={styles.startTouchableText}>
            Iniciar entrega
          </Text>
        </TouchableOpacity>
      ) : null}
      
      {showReturnTouchable ? (
        <View>
          <TouchableOpacity
            style={styles.returnTouchable}
            onPress={handleReturnDelivery}>
            <Text style={styles.startTouchableText}>
              Retornar entrega
            </Text>
          </TouchableOpacity>
        </View>
      ) : null} 

      {showActionsTouchables ? (
        <View style={styles.actions}>
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
            disabled={!delivered}
            onPress={confirmDelivery}
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
      ) : null}
    </View>
  );
};

export default StartDelivery;
