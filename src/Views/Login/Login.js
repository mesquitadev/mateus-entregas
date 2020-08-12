import React, { Fragment, useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';

import styles from './styles';
import login from '../../../src/api/login';

const Login = () => {
  const [ user, setUser ] = useState('');
  const [ pass, setPass ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const login = async () => {
    try {
      await login(user, pass);
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
        <Button title="Entrar" onPress={login} />
      </View>
    </Fragment>
  );
};

export default Login;