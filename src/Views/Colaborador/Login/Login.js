import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-community/async-storage';

import login from '../../../services/login';
import styles from './styles';

const Login = ({ navigation }) => {
  const [ user, setUser ] = useState('');
  const [ pass, setPass ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ activeButton, setActiveButton ] = useState(false);

  const setLogin = async () => {
    try {
      //const response = await login(user, pass);
      // await AsyncStorage.setItem('entregas_user_token', response.token);
//      const response = await login(25936732061, "RV4WGBUVUL");
      await AsyncStorage.setItem('entregas_user_name',JSON.stringify(response.data));
      navigation.navigate('OrderList');
    } catch(err) {
      console.warn(err);
      setErrorMessage(err);
    }
  }
  
  return (
    <View style={styles.container}>
      <TextInputMask 
        type={"cpf"}
        placeholder="CPF"
        value={user}
        onChangeText={text => setUser(text.replace(/[^\d]+/g,''))}
        style={styles.inputs}
      />
      <TextInput 
        style={styles.inputs} 
        placeholder="Senha" 
        onChangeText={text => setPass(text)}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={() => setLogin()}
        style={styles.btnPrimary}>
        <Text style={styles.btnPrimaryText}>
          Entrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSecondary}>
        <Text style={styles.btnSecondaryText}>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;