import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import validateCPF from 'cpf';

const ReceiptByAnotherPerson = ({navigation}) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  const saveReceipt = async () => {
    try {
      if (cpf == '' || !validateCPF.isValid(cpf)) {
        Alert.alert('Mateus Entregas', 'CPF inválido');
      } else {
        await AsyncStorage.setItem(
          'receipt_by_another_person',
          JSON.stringify({name: name, cpf: cpf, situacao: 5}),
        );
        navigation.navigate('StartDelivery');
      }
    } catch (error) {
      console.warn(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        placeholder="Nome completo"
        onChangeText={(text) => setName(text)}
      />
      <TextInputMask
        type={'cpf'}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text.replace(/[^\d]+/g, ''))}
        style={styles.inputs}
        maxLength={14}
      />
      <TouchableOpacity style={styles.btnPrimary} onPress={saveReceipt}>
        <Text style={styles.btnPrimaryText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReceiptByAnotherPerson;
