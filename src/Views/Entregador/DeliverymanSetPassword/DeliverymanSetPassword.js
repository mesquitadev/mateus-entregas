import React, { useState } from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const DeliverymanSetPassword = ({navigation}) => { 

    const [ pass, setPass ] = useState('');
    const [ confirmpass, setConfirmPass] = useState('');
    const [ isTouchableActive, setIsTouchableActive ] = useState(true);

    const enableTouchable = () => {
        if (!pass.length && !confirmpass.length) {
            setIsTouchableActive(false);
          return;
        }else{
            setIsTouchableActive(true);
        }
     
      };

    return (
        <View style={styles.container}>
            <View>
                <TextInput 
                    style={styles.inputs} 
                    placeholder="Senha" 
                    onChangeText={text => setPass(text)}
                    maxLength={8}
                    onKeyPress={enableTouchable}
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
                    maxLength={8}
                    onKeyPress={enableTouchable}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity
                disabled={!isTouchableActive}
                onPress={() => navigation.navigate('DeliverymanSetRegister')}
                style={isTouchableActive ? styles.btnPrimary : styles.btnDisabled}>
                <Text style={isTouchableActive ? styles.btnPrimaryText : styles.btnDisabledText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>            
        </View>

    );
}

export default DeliverymanSetPassword;