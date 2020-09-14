import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import api from '../../../services/api';
import delivermanRegisterBank from '../../../services/deliverymanRegisterBank';
import {KEY_ID_DADOS_PESSOAIS} from '../../../Utils/keys';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

const DeliverymanRegisterBank = ({navigation}) => {
  const [banco, setBanco] = useState('');
  const [bancos, setBancos] = useState([]);
  const [agencia, setAgencia] = useState('');
  const [conta, setConta] = useState('');
  const [confirmationVisibility, setConfirmationVisibility] = useState(false);
  const [idUser, setIdUser] = useState();
  useEffect(() => {
    buscaBancos();
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

  const buscaBancos = () => {
    api
      .get('bancos')
      .then((res) => {
        setBancos(res.data);
      })
      .catch((err) => {
        console.log('erro: ', err);
      });
  };

  useEffect(() => {
    handleDisableButton();
  });

  const handleDisableButton = () => {
    if (banco && agencia && conta) {
      setConfirmationVisibility(true);
      return;
    }
  };

  const saveBank = async () => {
    if (agencia == '' || conta == '' || banco == '') {
      Alert.alert('App Entrega', 'Houve um erro ao memorizar os dados.');
      return;
    }

    try {
      await delivermanRegisterBank({
        banco: banco,
        agencia: agencia,
        conta: conta,
        idUser: idUser,
      });
      navigation.navigate('DeliverymanSetPassword');
    } catch (error) {
      Alert.alert(
        'Mateus Entregas',
        'Não foi possível salvar os dados Bancários.',
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.info}>
            Apenas conta <Text style={styles.bold}>corrente</Text>, e a conta do
            banco tem que ser o nome do{' '}
            <Text style={styles.bold}>CPF cadastrado</Text> inicialmente
          </Text>
          <Picker
            selectedValue={banco}
            style={styles.inputs}
            onValueChange={(itemValue, itemIndex) => setBanco(itemValue)}>
            <Picker.Item label="Selecione o Banco..." value={''} />
            {bancos.map((b) => (
              <Picker.Item
                key={b.itemIndex}
                label={b.descricao}
                value={b.descricao}
              />
            ))}
          </Picker>

          <View style={styles.row}>
            <TextInput
              style={styles.inputsagencia}
              placeholder={'Agência'}
              value={agencia}
              keyboardType="numeric"
              onChangeText={(text) => setAgencia(text)}
            />

            <TextInput
              style={styles.inputsconta}
              placeholder={'Conta corrente'}
              value={conta}
              keyboardType="numeric"
              onChangeText={(text) => setConta(text)}
            />
          </View>

          <TouchableOpacity
            disabled={!confirmationVisibility}
            onPress={() => saveBank()}
            style={[
              styles.btnPrimary,
              {backgroundColor: confirmationVisibility ? '#0095DA' : '#DAE0E3'},
            ]}>
            <Text style={styles.btnPrimaryText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DeliverymanRegisterBank;
