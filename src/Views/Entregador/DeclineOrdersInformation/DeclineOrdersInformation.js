import React, {useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, BackHandler} from 'react-native';

import styles from './styles';

import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const pathIlustracaoEntregaCancelada = require('../../../res/img/entrega-cancelada.png');
const pathIlustracaoEntregaAdiada = require('../../../res/img/entrega-adiada.png');
const pathCancelIcon = require('../../../res/img/cancel.png');

const DelineOrdersInformation = ({route: {params}, navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          navigation.navigate(params.routeReturn);
          return true;
        },
      );
      return () => {
        backHandler.remove();
      };
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <CustomHeader
        event={() => navigation.navigate(params.routeReturn)}
        pathIcon={pathCancelIcon}
        headerTitle={`Entrega ${params.status}`}
      />
      <View style={styles.container}>
        <Image
          source={
            params.status === 'cancelada'
              ? pathIlustracaoEntregaCancelada
              : pathIlustracaoEntregaAdiada
          }
        />
        <Text
          style={[
            styles.text,
            {
              color: params.status === 'adiada' ? '#D98016' : '#F92121',
            },
          ]}>
          {params.message}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonVoltar}
          onPress={() => navigation.navigate(params.routeReturn)}>
          <Text style={styles.textVoltar}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DelineOrdersInformation;
