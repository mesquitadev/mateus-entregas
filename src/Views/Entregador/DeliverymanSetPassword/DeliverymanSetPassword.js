import React, { useState } from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const DeliverymanSetPassword = ({navigation}) => { 

    const [ pass, setPass ] = useState('');
    const [ confirmpass, setConfirmPass] = useState('');

    return (
        <View style={styles.container}>
            <View>
                <TextInput 
                    style={styles.inputs} 
                    placeholder="Senha" 
                    onChangeText={text => setPass(text)}
                    secureTextEntry
                />
                <Text 
                    style={styles.observer}>
                    Deve conter no mínimo 8 caracteres
                </Text>

                <TextInput 
                    style={styles.inputs} 
                    placeholder="Confirmar senha" 
                    onChangeText={text => setConfirmPass(text)}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('DeliverymanSetRegister')}
                style={styles.btnPrimary}>
                <Text style={styles.btnPrimaryText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>            
        </View>

    );
}

export default DeliverymanSetPassword;