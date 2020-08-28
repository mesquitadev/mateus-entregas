import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-community/async-storage';

import login from '../../../services/login';
import styles from './styles';

const Login = ({ navigation }) => {
  const [ user, setUser ] = useState('');
  const [ pass, setPass ] = useState('');
  const [ buttonEnabled, setButtonEnabled ] = useState(true);

  const doLogin = async () => {
    const CPF = require('cpf');
    if(!CPF.isValid(user) && user != '00000000000') { // DEVELOP -- RETIRAR
      Alert.alert('App Entregas', 'CPF inválido, verifique o número digitado e tente novamente.');
      return;
    }

    if(pass.length < 6) {
      Alert.alert('App Entregas','Verifique a senha digitada e tente novamente.');
      return;
    }

    try {
      setButtonEnabled(false);
      const response =  await login(user, pass);      
      await AsyncStorage.setItem('entregas_user_data', JSON.stringify(response.data));

      setUser('');
      setPass('');
      setButtonEnabled(true);
      
      // usuario/senha ok, mas cadastro inativo --> alterar para tela de cadastro em analise
      if(response.situacao == 0) {
        navigation.navigate('DeliverymanRegister');
      }

      // se for perfil colaborador, vai pra tela dele
      if(response.perfil == 'Colaborador') {
        navigation.navigate('OrderList');
      }
    } catch(error) {
      if(error.response) {
        if(error.response.status == 404) Alert.alert('App Entregas', 'Usuário ou senha inválidos.');
        setButtonEnabled(true);
        return;
      }
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
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
        onPress={() => navigation.navigate('DeliverymanPhotos')}
        style={styles.btnSecondary}>
        <Text style={styles.btnSecondaryText}>
          Cadastrar Entregador
        </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Login;