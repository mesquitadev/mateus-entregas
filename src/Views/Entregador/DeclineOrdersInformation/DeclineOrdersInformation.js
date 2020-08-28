import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const pathIlustracaoEntregaCancelada = require('../../../res/img/entrega-cancelada.png');
const pathIlustracaoEntregaAdiada = require('../../../res/img/entrega-adiada.png');
const pathCancelIcon = require('../../../res/img/cancel.png');

const DelineOrdersInformation = ({route: {params}, navigation: {navigate}}) => (
  <>
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
        onPress={() => navigate('OrderList')}>
        <Text style={styles.textVoltar}>Voltar ao início</Text>
      </TouchableOpacity>
    </View>
  </>
);

export default DelineOrdersInformation;
