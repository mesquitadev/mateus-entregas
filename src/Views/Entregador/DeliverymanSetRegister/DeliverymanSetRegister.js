import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';



const DeliverymanSetRegister = ({ navigation }) => {


    return (

        <View style={styles.container}>
            <Image 
            source={require('../../../res/img/cadastro.png')}/>
            <Text 
            style={styles.textmsg}>
                Falta pouco para você começar a entregar!
            </Text>

            <Text 
            style={styles.nameDeliveryman}>
                Nome do entregador
            </Text>

            <Text 
            style={styles.cpfDeliveryman}>
                CPF: 0000000000-00
            </Text>

            <View style={styles.divider}/>

            <Text 
            style={styles.msg}>
                Estamos analisando seus documentos. Você poderá acompanhar o processo de verificação por aqui.
            </Text>

            <Text style={styles.confirm}>
                <Text style={styles.approved}>
                     Pré cadastro
                </Text>
                <Text style={styles.resultConfirm}>
                    Aprovado
                </Text>
                <Ionicons 
                    name="checkmark-circle" 
                    size={28} 
                    color={"#00A349"}
                />
            </Text>

        </View>
    );

}

export default DeliverymanSetRegister;
