import React, { useState, useEffect } from 'react';
import { View, Text, Image, Linking, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import onStartDelivery from '../../../services/onStartDelivery';
import confirmOrderDelivery from '../../../services/confirmOrderDelivery';
import Loading from '../../../Components/Loading/Loading';
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
  const [ isLoading, setIsLoading ] = useState(false);

  const _data = params.data;
  const _pedido = params.data.pedido;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const fetchData = async () => {
        navigation.setOptions({
          title: `Nº #${_pedido.numeroPedido}`
        });

        let receipt = '';
        try {
          receipt = await AsyncStorage.getItem('receipt_by_another_person') || '';
          
          if (receipt !== '') {
            const receiptJson = JSON.parse(receipt);

            setDelivered(true);
            setReceiptName(receiptJson.name);
            setReceiptCpf(receiptJson.cpf);
            setReceiptSituation(receiptJson.situacao);
          }

        } catch (error) {
          console.warn(error.message);
        }
        
        renderTouchables();
      };

      fetchData();
      return () => fetchData();
    });

    return unsubscribe;
  }, [ navigation ]);

  const renderTouchables = () => {
    switch(_data.situacao) {
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
      await onStartDelivery(_data.id);

      _data.situacao = 3;

      setShowStartTouchable(false);
      setShowReturnTouchable(false);
      setShowActionsTouchables(true);
    } catch(error) {
      alert('Não foi possível iniciar a entrega.')
    }
  };

  const deleteReceipt = async () => {
    try {
      await AsyncStorage.removeItem('receipt_by_another_person');
    } catch (error) {
      console.warn(error.message);
    }
  };

  const confirmDelivery = async () => {
    setDelivered(false);
    setIsLoading(true);
    
    try {
      const response = await confirmOrderDelivery(
        _data.id, receiptName,
        receiptCpf,
        receiptSituation);
      
      setIsLoading(false);
      deleteReceipt();
      navigation.navigate('OrderDelivered');
    } catch (error) {
      setIsLoading(false);
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
    <>
      {isLoading ? (
        <Loading text={'Finalizando entrega...'}/>
      ) : null}

      {!isLoading ? (
        <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.info}>
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
      ) : null}
    </>
  );
};

export default StartDelivery;
