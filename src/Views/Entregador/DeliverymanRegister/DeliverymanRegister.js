import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import deliverymanRegister from '../../../services/deliverymanRegister';
import {KEY_ID_DADOS_PESSOAIS} from '../../../Utils/keys';

import validateCPF from 'cpf';

const DeliverymanRegister = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [user, setUser] = useState('');
  const [cnh, setCnh] = useState('');
  const [datanascimento, setDataNascimento] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);

  const formatedCPF = user.replace(/[^\d]/g, '');
  const formatedTelefone = tel.replace(/[^\d]/g, '');
  const formatedDataNascimento =
    datanascimento.substr(6, 4) +
    '-' +
    datanascimento.substr(3, 2) +
    '-' +
    datanascimento.substr(0, 2);

  useEffect(() => {
    if (nome && user && cnh && datanascimento && tel && email) {
      setDisabledButton(true);
      return;
    }
  });

  const payload = {
    nome: nome,
    cpf: formatedCPF,
    cnh: cnh,
    dataNascimento: formatedDataNascimento,
    email: email,
    telefone: tel,
  };

  const serializeData = async (payload) => {
    try {
      await AsyncStorage.setItem(
        KEY_ID_DADOS_PESSOAIS,
        JSON.stringify(payload),
      );
    } catch (error) {
      Alert.alert('App Entrega', 'Houve um erro memorizar os dados.');
    }
  };

  const resetInputs = () => {
    setNome('');
    setUser('');
    setCnh('');
    setDataNascimento('');
    setTel('');
    setEmail('');
  };

  const savePersonalData = async () => {
    try {
      const response = await deliverymanRegister(payload);
      if (response.status == 200) {
        await serializeData(response.data.id);
        if (await AsyncStorage.getItem(KEY_ID_DADOS_PESSOAIS)) {
          navigation.navigate('DeliverymanRegisterAddress');
        }
        resetInputs();
        return;
      }
      return;
    } catch (error) {
      if (error.response) {
        if (error.response.status == 404) {
          Alert.alert('Mateus Entrega', 'Impossível fazer o cadastro');
        }
        if (error.response.status == 406) {
          Alert.alert('Mateus Entrega', 'Entregador já foi cadastrado!');
        }
        if (error.response.status == 500) {
          Alert.alert('Mateus Entrega', 'Sistema em manutenção!');
        }
        return;
      }
    }
  };

  const doRegister = () => {
    if (formatedCPF === '' || !validateCPF.isValid(formatedCPF)) {
      Alert.alert('Mateus Entregas', 'CPF inválido');
      return;
    } else {
      savePersonalData();
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput
            style={styles.inputs}
            placeholder="Nome completo"
            value={nome}
            onChangeText={(text) => setNome(text)}
            autoFocus
          />
          <TextInputMask
            type={'cpf'}
            placeholder="CPF"
            value={user}
            onChangeText={(text) => setUser(text.replace(/[^\d]+/g, ''))}
            style={styles.inputs}
            maxLength={14}
          />
          <TextInput
            placeholder="CNH"
            value={cnh}
            onChangeText={(text) => setCnh(text)}
            keyboardType="numeric"
            style={styles.inputs}
            maxLength={11}
          />
          <TextInputMask
            type={'datetime'}
            value={datanascimento}
            onChangeText={(text) => setDataNascimento(text)}
            style={styles.inputs}
            placeholder="Data de Nascimento"
            maxLength={10}
          />
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
            }}
            value={tel}
            onChangeText={(text) => setTel(text)}
            style={styles.inputs}
            placeholder="Telefone"
            maxLength={15}
          />
          <TextInput
            style={styles.inputs}
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TouchableOpacity
            disabled={!disabledButton}
            onPress={() => doRegister()}
            style={[
              styles.btnPrimary,
              {
                backgroundColor: disabledButton ? '#0095DA' : '#DAE0E3',
              },
            ]}>
            <Text style={styles.btnPrimaryText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DeliverymanRegister;
