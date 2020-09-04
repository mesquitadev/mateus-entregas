import React, { useState, useEffect } from 'react';
import { View, Text, Image, Linking, TouchableOpacity, Alert } from 'react-native';

import onStartDelivery from '../../../services/onStartDelivery';
import confirmOrderDelivery from '../../../services/confirmOrderDelivery';
import styles from './styles';

const StartDelivery = ({ route: {params}, navigation }) => {
  const [ receiptName, setReceiptName ] = useState('');
  const [ receiptCpf, setReceiptCpf ] = useState('');
  const [ receiptSituation, setReceiptSituation ] = useState('');
  const [ statusText, setStatusText ] = useState('');
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
        navigation.setOptions({
          title: `Nº #${_pedido.numeroPedido}`
        });
      };

      if (params?.post) {
        setReceiptName(params.post.name);
        setReceiptCpf(params.post.cpf);
        setReceiptSituation(params.post.situacao);
        setShowActionsTouchables(true);
        setDelivered(true);
      }

      fetchData();
      return () => fetchData();
    });

    return unsubscribe;
  }, [ navigation, params?.post]);

  const renderTouchables = () => {
    const situation = _data.situacao;

    switch(situation) {
      case 2:
        setStatusText('Aguardando entrega');
        setShowStartTouchable(true);
        setShowReturnTouchable(false);
        setShowActionsTouchables(false);
        break;
      case 3:
        setStatusText('Saiu para entrega');
        setShowStartTouchable(false);
        setShowReturnTouchable(false);
        setShowActionsTouchables(true);
        break;
      case 6:
        setStatusText('Cancelado');
        setShowStartTouchable(false);
        setShowReturnTouchable(false);
        setShowActionsTouchables(false);
        break;
      case 7:
        setStatusText('Saiu para entrega');
        setShowStartTouchable(false);
        setShowReturnTouchable(false);
        setShowActionsTouchables(true);
        break;
      case 8:
        setStatusText('Adiado');
        setShowStartTouchable(false);
        setShowReturnTouchable(true);
        setShowActionsTouchables(false);
        break;
      default:
        setStatusText('Entregue');
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
  

  if(_pedido.cliente.pessoaJuridica == null) {
    nome = _pedido.cliente.pessoaFisica.nome;
  } else {
    if(_pedido.cliente.pessoaJuridica.razaoSocial == null) {
      nome = _pedido.cliente.pessoaJuridica.cnpj;
    } else {
      nome = _pedido.cliente.pessoaJuridica.razaoSocial;
    }
  }

  return(
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.info}>
          {/* <Text style={styles.label}>Origem</Text>
          <Text style={styles.text}>Loja -</Text> */}
          <Text style={styles.label}>Cliente</Text>
        <Text style={styles.text}>{nome}</Text>
          <Text style={styles.label}>Endereço de entrega</Text>
          <Text style={styles.text}>{_pedido.endereco.bairro}</Text>
          <Text style={styles.text}>{_pedido.endereco.endereco}</Text>
          <Text style={styles.text}>
            {_pedido.endereco.estado}, {_pedido.endereco.cep}
          </Text>
          <Text style={styles.status}>{statusText}</Text>
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
            onPress={handleStartDelivery}>
            <Text style={styles.startTouchableText}>
              Retomar entrega
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
