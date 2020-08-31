import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'

import styles from './styles';
const patchIcon = require('../../../res/img/cancel.png')

const OrderConfirmed = ({navigation}) => {
    return (
        <>
            <CustomHeader 
                headerTitle='Pedido retirado' 
                pathIcon={patchIcon} 
                event={() => navigation.navigate('OrderList')}/>
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

        </>
    );
}

export default OrderConfirmed;