import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import api from '../../../services/api';
import deliverymanAddress from '../../../services/deliverymanAddress';
import {KEY_ID_DADOS_PESSOAIS} from '../../../Utils/keys';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';


const DeliverymanRegisterAddress = ({navigation}) => {

    const [cep, setCep] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [idUser, setIdUser] = useState();

   
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
    
    const submitAddress = () => {
        const fetchData = async () => {
            const response = await api.get(`/cep/${cep}`);
                setBairro(response.data.bairro)
                setEstado(response.data.uf)
                setLogradouro(response.data.logradouro)
                setCidade(response.data.localidade)
               // console.log(response.data)
            }
        fetchData()
        return () => fetchData();
    }
       
    const saveAddress = async () => {

        if(cep.length == ''){
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }else if (estado.length == '') {
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }else if (cidade.length == '') {
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }else if (logradouro.length == '') {
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }else if (bairro.length == '') {
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }else if (numero.length == '') {
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }
       
        try {
          await deliverymanAddress({
            cep: cep,
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            estado: estado,
            cidade: cidade,
            idUser: idUser,
          });
          navigation.navigate('DeliverymanVehicleData');
        } catch (error) {
          Alert.alert(
            'Mateus Entregas',
            'Não foi possível salvar os dados de Endereço.',
          );
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.wrapper}>

                    <TextInput
                    style={styles.inputs}
                    placeholder={"Cep"}
                    value={cep}
                    onChangeText={(text) => setCep(text)}
                    maxLength={8}
                    keyboardType="numeric"
                    autoFocus
                    onBlur={() => submitAddress()} 
                    />
                    <TextInput
                    style={styles.inputs}
                    placeholder={"UF"}
                    value={estado}
                    onChangeText={(text) => setEstado(text.toUpperCase())}
                    maxLength={2}
                    />
                    <TextInput
                    style={styles.inputs}
                    placeholder={"Cidade"}
                    value={cidade}
                    onChangeText={(text) => setCidade(text)}
                    />
                    <TextInput
                    style={styles.inputs}
                    placeholder={"Endereço"}
                    value={logradouro}
                    onChangeText={(text) => setLogradouro(text)}
                    />
                    <View style={styles.row}>
                        <TextInput
                        style={styles.inputsbairro}
                        placeholder={"Bairro"}
                        value={bairro}
                        onChangeText={(text) => setBairro(text)}
                        />
                        <TextInput
                        style={styles.inputsnumero}
                        placeholder={"Nº"}
                        value={numero}
                        keyboardType="numeric"
                        onChangeText={(text) => setNumero(text)}
                        />
                    </View>
                    <TextInput
                    style={styles.inputs}
                    placeholder={"Complemento"}
                    value={complemento}
                    onChangeText={(text) => setComplemento(text)}
                    />

                    <TouchableOpacity
                    onPress={() => saveAddress()}
                    style={styles.btnPrimary}>
                    <Text style={styles.btnPrimaryText}>Confirmar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    );

}

export default DeliverymanRegisterAddress;
