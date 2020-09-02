import React, {useState, useEffect, useRef} from 'react';
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

import {KEYS_CLEANNER} from '../../../Utils/keys';

import myDelivery from '../../../services/myDelivery';
import login from '../../../services/login';
import styles from './styles';

import api from '../../../services/api'; // Temporário

const Login = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [visibilityPassword, enableVisibilityPassword] = useState(true);

  const pathIconEyeOpen = require('../../../res/img/open-eye.png');
  const pathIconEyeClosed = require('../../../res/img/closed-eye.png');

  const textInputCPF = useRef(null);
  const textInputSenha = useRef(null);

  // Temporário até que o response do login venha com um payload mais detalhado
  const getEntregadorId = async id => {
    try {
      const response = await api.get('/entregadores');

      const find = response.data.find(item => {
        return item.usuario.id === id;
      });

      checkMyDelivery(find.id);
    } catch(error) {
      alert(error);
    }
  };

  const checkMyDelivery = async id => {
    try {
      const myDeliveryResponse = await myDelivery(id);

      if (!myDeliveryResponse.data) navigation.navigate('AcceptOrders');
      else navigation.navigate('DeliveryInProgress', myDeliveryResponse.data);
    } catch(error) {
      Alert.alert('App Entregas', 'Encontramos um problema no acesso de entregador.');
    }
  };
  
  const doLogin = async () => {
    // Comentando validacao de cpf para teste
    // const CPF = require('cpf');
    // if(!CPF.isValid(user)) {
    //  Alert.alert('App Entregas', 'CPF inválido, verifique o número digitado e tente novamente.');
    //  return;
    // }
    
    if (pass.length < 6) {
      Alert.alert(
        'App Entregas',
        'Verifique a senha digitada e tente novamente.',
      );
      return;
    }

    try {
      setButtonEnabled(false);
      const response = await login(user, pass);

      AsyncStorage.setItem('entregas_user_data', JSON.stringify(response.data));

      switch (response.data.situacao) {
        case 0: //pendente
          navigation.navigate('DeliverymanSetRegister');
          break;

        case 1: //ativo
          if (response.data.perfil.descricao.toLowerCase() == 'colaborador')
            navigation.navigate('OrderList');

          if (response.data.perfil.descricao.toLowerCase() == 'entregador')
            // checkMyDelivery(response.data.id);
            getEntregadorId(response.data.id);

          break;

        case 2: //rejeitado
          navigation.navigate('DeliverymanRegisterDenied')
          break;

        case 3: //analise -- enviar nova documentação
          navigation.navigate('DeliverymanPhotos');
          break;
      }

      setUser('');
      setPass('');
      setButtonEnabled(true);
    } catch (error) {
      if (error.response) {
        if (error.response.status == 404)
          Alert.alert('App Entregas', 'Usuário ou senha inválidos.');
        if (error.response.status.toString().startsWith('50'))
          Alert.alert(
            'App Entregas',
            'Erro no serviço, tente novamente mais tarde.',
          );
        setPass('');
        setButtonEnabled(true);
        return;
      }
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const cleanSStorageStatusCheckRegister = async () => {
        try {
          await AsyncStorage.multiRemove(KEYS_CLEANNER);
        } catch (error) {
          throw new Error('Não conseguimos limpar o storage do App.');
        }
      };
      cleanSStorageStatusCheckRegister();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <Image
          source={require('../../../res/img/logo_mateus.png')}
          style={styles.logo}
        />

        <TextInputMask
          type={'cpf'}
          placeholder="CPF"
          value={user}
          onChangeText={(text) => {
            if (text.length == 14) {
              textInputSenha.current.focus();
            }
            setUser(text.replace(/[^\d]+/g, ''));
          }}
          style={styles.inputs}
          maxLength={14}
          ref={textInputCPF}
        />

        <View>
          <TextInput
            style={styles.inputs}
            placeholder="Senha"
            onChangeText={(text) => setPass(text)}
            secureTextEntry={visibilityPassword}
            ref={textInputSenha}
          />
          {!visibilityPassword ? (
            <TouchableOpacity
              onPress={() => enableVisibilityPassword(true)}
              style={styles.iconEye}>
              <Image source={pathIconEyeOpen} width={24} height={24} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => enableVisibilityPassword(false)}
              style={styles.iconEye}>
              <Image source={pathIconEyeClosed} width={24} height={24} />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          onPress={() => doLogin()}
          style={buttonEnabled ? styles.btnPrimary : styles.btnPrimaryDisabled}>
          <Text style={styles.btnPrimaryText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DeliverymanRegister')}
          style={styles.btnSecondary}>
          <Text style={styles.btnSecondaryText}>Cadastrar Entregador</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Login;
