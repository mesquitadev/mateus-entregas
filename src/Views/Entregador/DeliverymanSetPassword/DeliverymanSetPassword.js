import React, {useState, useEffect} from 'react';
import {
  Alert,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import deliverymanPassword from '../../../services/deliverymanPassword';
import {KEYS_CLEANNER, KEY_ID_DADOS_PESSOAIS} from '../../../Utils/keys';

const pathIconEyeOpen = require('../../../res/img/open-eye.png');
const pathIconEyeClosed = require('../../../res/img/closed-eye.png');

const DeliverymanSetPassword = ({navigation}) => {
  const [pass, setPass] = useState();
  const [confirmpass, setConfirmPass] = useState();
  const [idUser, setIdUser] = useState();
  const [isTouchableActive, setIsTouchableActive] = useState(false);
  const [visibilityPassword, enableVisibilityPassword] = useState(true);
  const [visibilityConfirmPassword, enableVisibilityConfirmPassword] = useState(
    true,
  );

  const passLenght = String(pass);

  useEffect(() => {
    if (passLenght.length < 8) {
      setIsTouchableActive(false);
    } else {
      setIsTouchableActive(true);
    }

    if (passLenght >= 8 && pass == confirmpass) {
      setIsTouchableActive(true);
    } else {
      setIsTouchableActive(false);
    }
  });

  useEffect(() => {
    getIdUserInStorage();
  }, []);

  const getIdUserInStorage = async () => {
    try {
      const data = await AsyncStorage.getItem(KEY_ID_DADOS_PESSOAIS);
      setIdUser(data);
    } catch (e) {
      return;
    }
  };

  const cleanStorage = async () => {
    try {
      await AsyncStorage.multiRemove(KEYS_CLEANNER.KEYS_CADASTRO_ENTREGADOR);
    } catch (error) {
      throw new Error('Não conseguimos limpar o storage do App.');
    }
  };

  const savePassword = async () => {
    try {
      await deliverymanPassword({
        senha: pass,
        idUser: idUser
      });
      await cleanStorage();
      navigation.navigate('DeliverymanSetRegister');
    } catch (error) {
      console.log(error)
      Alert.alert('Mateus Entregas', 'Não foi possível salvar sua senha.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <TextInput
            style={styles.inputs}
            placeholder="Senha"
            onChangeText={(text) => setPass(text)}
            secureTextEntry={visibilityPassword}
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
        {passLenght.length < 8 ? (
          <Text style={styles.observer}>
            Deve conter pelo menos 8 caracteres
          </Text>
        ) : null}

        <View>
          <TextInput
            style={styles.inputs}
            placeholder="Confirmar senha"
            onChangeText={(text) => setConfirmPass(text)}
            secureTextEntry={visibilityConfirmPassword}
          />
          {!visibilityConfirmPassword ? (
            <TouchableOpacity
              onPress={() => enableVisibilityConfirmPassword(true)}
              style={styles.iconEye}>
              <Image source={pathIconEyeOpen} width={24} height={24} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => enableVisibilityConfirmPassword(false)}
              style={styles.iconEye}>
              <Image source={pathIconEyeClosed} width={24} height={24} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <TouchableOpacity
        disabled={!isTouchableActive}
        onPress={async () => {
          await savePassword();
        }}
        style={isTouchableActive ? styles.btnPrimary : styles.btnDisabled}>
        <Text
          style={
            isTouchableActive ? styles.btnPrimaryText : styles.btnDisabledText
          }>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliverymanSetPassword;
