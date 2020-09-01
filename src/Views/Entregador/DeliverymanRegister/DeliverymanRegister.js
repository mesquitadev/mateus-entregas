import React, {useState} from 'react';
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

import deliverymanRegister from '../../../services/deliverymanRegister';
import styles from './styles';

import {KEY_CADASTRO_DADOS_PESSOAIS} from '../../../Utils/keys';

const DeliverymanRegister = ({navigation}) => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [cnh, setCnh] = useState('');
  const [datanascimento, setDataNascimento] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  const _payload = {
    name: name,
    cpf: user,
    cnh: cnh,
    dataNascimento: datanascimento,
    telefone: tel,
    email: email,
  };

  const serializeData = async (payload) => {
    try {
      await AsyncStorage.setItem(
        KEY_CADASTRO_DADOS_PESSOAIS,
        JSON.stringify(payload),
      );
    } catch (error) {
      Alert.alert('App Entrega', 'Houve um erro memorizar seu dados.');
    }
  };

  const resetInputs = () => {
    setName('');
    setUser('');
    setCnh('');
    setDataNascimento('');
    setTel('');
    setEmail('');
  };

  const doRegister = async () => {
    //DEPOIS REFATORAMOS..
    if (name.length == '') {
      Alert.alert('App Entregas', 'Preencha os dados corretamente');
      return;
    } else if (user.length == '') {
      Alert.alert('App Entregas', 'Preencha os dados corretamente');
      return;
    } else if (cnh.length == '') {
      Alert.alert('App Entregas', 'Preencha os dados corretamente');
      return;
    } else if (datanascimento.length == '') {
      Alert.alert('App Entregas', 'Preencha os dados corretamente');
      return;
    } else if (tel.length == '') {
      Alert.alert('App Entregas', 'Preencha os dados corretamente');
      return;
    } else if (email.length == '') {
      Alert.alert('App Entregas', 'Preencha os dados corretamente');
      return;
    }

    try {
      const response = await deliverymanRegister(
        name,
        user,
        cnh,
        datanascimento,
        tel,
        email,
      );
      if (response.data.situacao == 0) {
        await serializeData(_payload);
        if (await AsyncStorage.getItem(KEY_CADASTRO_DADOS_PESSOAIS)) {
          navigation.navigate('DeliverymanPhotos');
        }
        return;
      }
      resetInputs();
    } catch (error) {
      if (error.response) {
        if (error.response.status == 404)
          Alert.alert('App Entregas', 'Impossível fazer o cadastro');
        if (error.response.status.toString().startsWith('50'))
          Alert.alert(
            'App Entregas',
            'Sistema em manutenção. Tente novamente mais tarde.',
          );
        return;
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput
            style={styles.inputs}
            placeholder="Nome completo"
            value={name}
            onChangeText={(text) => setName(text)}
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
            onPress={() => doRegister()}
            style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DeliverymanRegister;
