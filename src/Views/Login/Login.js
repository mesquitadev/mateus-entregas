import React, { useState } from 'react';
import { Text, TextInput, Button, View, AsyncStorage } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';
import login from '../../../src/api/login';

const Login = () => {
  const [ user, setUser ] = useState('');
  const [ pass, setPass ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ activeButton, setActiveButton ] = useState(false);

  const setLogin = async () => {
    try {
      const token = await login(user, pass);
      await AsyncStorage.setItem('entregas_user_token', token);
    } catch(err) {
      setErrorMessage(err.message);
    }
  }
  
  return (
    <View style={styles.container}>
      <TextInputMask 
        type={"cpf"}
        placeholder="CPF"
        value={user}
        onChangeText={text => setUser(text)}
        style={styles.inputs}
      />
      <TextInput 
        style={styles.inputs} 
        placeholder="Senha" 
        onChangeText={text => setPass(text)}
        secureTextEntry
      />
      <Text>{errorMessage}</Text>
      <View style={[styles.primaryButton, activeButton ? styles.active : styles.inactive]}>
        <Button 
          title="Entrar" 
          onPress={setLogin} 
          disabled={!activeButton} 
          color={activeButton ? "#FFF" : "#CCC"}
        />
      </View>
      <Button title="Cadastrar" color="#0095DA" />
    </View>
  );
};

export default Login;