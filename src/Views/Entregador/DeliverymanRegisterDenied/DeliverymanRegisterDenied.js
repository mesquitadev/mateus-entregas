import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';


const DeliverymanRegisterDenied = ({url, children}) => {

       
    return (
        <View style={styles.container}>
             <Image source={require('../../../res/img/Cadastronegado.png')} />

             <Text style={styles.infoCadastro}>Cadastro não Aprovado</Text>
             <Text style={styles.infoObs}>Entre em contato com o nosso suporte para entender o motivo</Text>

             <View style={styles.wrapper}>
                <Ionicons name="logo-whatsapp" size={20} color={'#F92121'}/>
                <Text 
                style={styles.suporte} 
                onPress={() => {Linking.openURL('https://whats.link/mateusentrega');}}>
                    Suporte
                </Text>
             </View>

        </View>


    );

}

export default DeliverymanRegisterDenied; 