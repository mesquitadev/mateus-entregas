import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

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

export default OrderConfirmed;