import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import checkDelivery from '../../../services/checkDelivery';
import styles from './styles';

const EnterDeliverymanCode = ({ navigation }) => {
  const [ inputValue, setInputValue ] = useState('');
  const [ isTouchableActive, setIsTouchableActive ] = useState(false);

  const enableTouchable = () => {
    if (!inputValue.length) {
      setIsTouchableActive(false);
      return;
    }

    setIsTouchableActive(true);
  };

  const validateCode = async () => {
    try {
      const response = await checkDelivery(inputValue);

      navigation.navigate('ReceiveOrder', response.data);
    } catch(error) {
      if (error.response) {
        if (error.response.status === 404) alert('Não existem pedidos para esse código.')
        return;
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Código" 
        onChangeText={text => setInputValue(text)}
        onKeyPress={enableTouchable}
      />
      <TouchableOpacity
        disabled={!isTouchableActive}
        onPress={validateCode}
        style={isTouchableActive ? styles.btnPrimary : styles.btnDisabled}>
        <Text style={isTouchableActive ? styles.btnPrimaryText : styles.btnDisabledText}>
          Avançar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnterDeliverymanCode;