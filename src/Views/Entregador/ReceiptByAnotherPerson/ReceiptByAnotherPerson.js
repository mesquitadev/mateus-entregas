import React, { useState } from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {TextInputMask} from 'react-native-masked-text';

import styles from './styles';

const ReceiptByAnotherPerson = ({ navigation }) => {
  const [ name, setName ] = useState('');
  const [ cpf, setCpf ] = useState('');
  
  const saveReceipt = async () => {
    try {
      await AsyncStorage.setItem('receipt_by_another_person', 
        JSON.stringify({ name: name, cpf: cpf, situacao: 5 })); 
        
      navigation.navigate('StartDelivery');
    } catch (error) {
      console.warn(error.message);
    }
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        placeholder="Nome completo"
        onChangeText={text => setName(text)}
      />
      <TextInputMask
        type={"cpf"}
        placeholder="CPF"
        value={cpf}
        onChangeText={text => setCpf(text.replace(/[^\d]+/g,''))}
        style={styles.inputs}
        maxLength={14}
      />
      <TouchableOpacity style={styles.btnPrimary} onPress={saveReceipt}>
        <Text style={styles.btnPrimaryText}>
          Confirmar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReceiptByAnotherPerson;
