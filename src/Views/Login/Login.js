import React, { Fragment, useState } from 'react';
import { Text, TextInput, Button, View, AsyncStorage } from 'react-native';

import styles from './styles';
import login from '../../../src/api/login';

const Login = () => {
  const [ user, setUser ] = useState('');
  const [ pass, setPass ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const setLogin = async () => {
    try {
      const token = await login(user, pass);
      await AsyncStorage.setItem('entregas_user_token', token);
    } catch(err) {
      setErrorMessage(err.message);
    }
  }
  
  return (
    <Fragment>
      <View style={styles.container}>
        <TextInput 
          style={styles.inputs} 
          placeholder="CPF"
          onChangeText={text => setUser(text)}
        />
        <TextInput 
          style={styles.inputs} 
          placeholder="Senha" 
          onChangeText={text => setPass(text)}
          secureTextEntry
        />
        <Text>{errorMessage}</Text>
      </View>
      <View style={styles.primaryButton}>
        <Button title="Entrar" onPress={setLogin} />
      </View>
    </Fragment>
  );
};

export default Login;