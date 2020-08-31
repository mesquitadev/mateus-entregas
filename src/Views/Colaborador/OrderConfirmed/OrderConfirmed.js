<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 8b6c58277b8e2b7bfa2023436b4138717c311a5c
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

<<<<<<< HEAD
const OrderConfirmed = ({ route: { params }, navigation: { navigate } }) => {

    params=""
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} disabled>
        <Image style={styles.touchableImg} source={require('../../../res/img/ligar.png')} />
        <Text style={styles.touchableText}>
          Entrega Confirmada
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonBar}>
      <TouchableOpacity
        style={ styles.selectedItemsButton }
        onPress={() => navigate('OrderList')}>
        <Text style={styles.selectedItemsButtonText}>
          {`Ver pedidos selecionados`}
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
=======
const OrderConfirmed = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.wrapperContainer}>
                    <Image source={require('../../../res/img/PedidoConfirmado.png')} />

                    <Text style={styles.status}>
                        Pedidos retirado pelo entregador!
                    </Text>
                </View>

                <TouchableOpacity
                        onPress={() => {navigation.navigate('OrderList')}}
                        style={styles.btnPrimary}>
                        <Text style={styles.btnPrimaryText}>
                            Voltar ao Início
                        </Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}
>>>>>>> 8b6c58277b8e2b7bfa2023436b4138717c311a5c

export default OrderConfirmed;