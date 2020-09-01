import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import AsyncStorage from '@react-native-community/async-storage';

import login from '../../../services/login';
import styles from './styles';

const Login = ({navigation}) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const doLogin = async () => {
    // const CPF = require('cpf');
    // if(!CPF.isValid(user)) { // DEVELOP -- RETIRAR
    //  Alert.alert('App Entregas', 'CPF inválido, verifique o número digitado e tente novamente.');
    //  return;
    // }
    // 
    // if (pass.length < 6) {
    //   Alert.alert(
    //     'App Entregas',
    //     'Verifique a senha digitada e tente novamente.',
    //   );
    //   return;
    // }
    //
    // if(pass.length < 6)
    //   alert('Verifique os dados digitados e tente novamente.')

    try {
      setButtonEnabled(false);
      //const response =  await login(user, pass);
      const response =  await login("95901957334", "liviowebp@ssw0rd");

      AsyncStorage.setItem('entregas_user_data', JSON.stringify(response.data));

      switch(response.data.situacao) {
        case 0: //pendente
          navigation.navigate('DeliverymanSetRegister');
          break;

        case 1: //ativo
          if(response.data.perfil.descricao.toLowerCase() == 'colaborador')
            navigation.navigate('OrderList');

          if(response.data.perfil.descricao.toLowerCase() == 'entregador')
            navigation.navigate('AcceptOrders');

          break;

        case 2: //rejeitado
          //navigation.navigate('')
          alert('Cadastro rejeitado');
          break;
          
        case 3: //analise -- enviar nova documentação
          navigation.navigate('DeliverymanPhotos');
          break;
      }

      setUser('');
      setPass('');
      setButtonEnabled(true);
    } catch(error) {
      if(error.response) {
        if(error.response.status == 404) Alert.alert('App Entregas', 'Usuário ou senha inválidos.');
        if(error.response.status.toString().startsWith('50')) Alert.alert('App Entregas', 'Erro no serviço, tente novamente mais tarde.');

        setPass('');
        setButtonEnabled(true);
        return;
      }
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const cleanSStorageStatusCheckRegister = async () => {
        await AsyncStorage.removeItem('cnh');
        await AsyncStorage.removeItem('perfil');
      };
      cleanSStorageStatusCheckRegister();
    });

    return unsubscribe;
  }, [navigation]);

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
        secureTextEntry={true}
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
        onPress={() => navigation.navigate('DeliverymanRegister')}
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
