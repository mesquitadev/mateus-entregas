import React, { Fragment, useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';

import styles from './styles';

const Login = () => {
  const [ user, setUser ] = useState('');
  const [ pass, setPass ] = useState('');

  const login = () => {
    console.warn('Login');
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
      </View>
      <View style={styles.primaryButton}>
        <Button title="Entrar" onPress={login} />
      </View>
    </Fragment>
  );
};

export default Login;