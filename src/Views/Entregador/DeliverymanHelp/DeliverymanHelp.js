import React from 'react';
import {Text, View, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';


import styles from './styles';



const DeliverymanHelp = () => { 

    

    return (
        <View style={styles.container}>
            <Collapse style={styles.border}>
                <CollapseHeader >
                    <View>
                        <Text style={styles.headerTitle}>Esqueci a senha - Entregador</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody >
                    <Text style={styles.body}>Para recuperar sua senha, entre em contato com o nosso suporte 
                        solicitando a redefinição de senha.
                    </Text>
                    <View style={styles.suporte}>
                        <Ionicons name="logo-whatsapp" size={20} color={'#0095DA'}/>
                        <Text 
                        style={styles.link} 
                        onPress={() => {Linking.openURL('https://api.whatsapp.com/send?phone=5598992063786&text=Suporte');}}>
                        Suporte
                        </Text>
                    </View>
                </CollapseBody>
            </Collapse>

            <Collapse style={styles.border}>
                <CollapseHeader >
                    <View>
                        <Text style={styles.headerTitle}>Não consegui realizar cadastro</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <Text style={styles.body}>Entre em contato com o nosso suporte para entender o motivo.
                    </Text>
                    <View style={styles.suporte}>
                        <Ionicons name="logo-whatsapp" size={20} color={'#0095DA'}/>
                        <Text 
                        style={styles.link} 
                        onPress={() => {Linking.openURL('https://api.whatsapp.com/send?phone=5598992063786&text=Suporte');}}>
                        Suporte
                        </Text>
                    </View>
                </CollapseBody>
            </Collapse>
        </View>


    );



}

export default DeliverymanHelp;