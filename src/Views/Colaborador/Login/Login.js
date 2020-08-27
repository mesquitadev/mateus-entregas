import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-community/async-storage';

import login from '../../../services/login';
import styles from './styles';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

const Login = ({ navigation }) => {
  const [ user, setUser ] = useState('');
  const [ pass, setPass ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ buttonEnabled, setButtonEnabled ] = useState(true);


  const doLogin = async () => {
    const CPF = require('cpf');
    // if(!CPF.isValid(user)) {
    //   alert('CPF inválido, verifique o número digitado e tente novamente.');
    //   return;
    // }

    // if(pass.length < 6) 
    //   alert('Verifique os dados digitados e tente novamente.')
  
    try {
      setButtonEnabled(false);
      //const response = await login(25936732061, "RV4WGBUVUL"); // passando direto -- develop
      const response =  await login(user, pass);
      await AsyncStorage.setItem('entregas_user_data', JSON.stringify(response.data));
      navigation.navigate('OrderList');
    } catch(error) {
      if(error.response) {
        if(error.response.status == 404) alert('Usuário ou senha inválidos.')
        setButtonEnabled(true);
        return;
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../res/img/logo_mateus.png')}
        style={styles.logo}
      />

      <TextInputMask 
        type={"cpf"}
        placeholder="CPF"
        value={user}
        onChangeText={text => setUser(text.replace(/[^\d]+/g,''))}
        style={styles.inputs}
        maxLength={14}
      />

      <TextInput 
        style={styles.inputs} 
        placeholder="Senha" 
        onChangeText={text => setPass(text)}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={() => doLogin()}
        style={
          buttonEnabled ? 
          styles.btnPrimary : styles.btnPrimaryDisabled}>
        <Text style={styles.btnPrimaryText}>
          Entrar
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('DeclineOrders')}
        style={styles.btnSecondary}>
        <Text style={styles.btnSecondaryText}>
          Cadastrar Entregador
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;