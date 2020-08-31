import React, { useState } from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import styles from './styles';

const ReceiptByAnotherPerson = ({ navigation }) => {
  const [ name, setName ] = useState('');
  const [ cpf, setCpf ] = useState('');
  
  const postReceipt = () => {
    navigation.navigate('StartDelivery', 
      {post: {name: name, cpf: cpf, situacao: 5}});
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
      <TouchableOpacity style={styles.btnPrimary} onPress={postReceipt}>
        <Text style={styles.btnPrimaryText}>
          Confirmar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReceiptByAnotherPerson;
