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
import styles from './styles';


const DeliverymanRegisterAddress = ({navigation}) => {

    const [cep, setCep] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    const doRegister = () => {

        if(cep.length == ''){
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }else if (estado.length == '') {
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }else if (cidade.length == '') {
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }else if (endereco.length == '') {
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }else if (bairro.length == '') {
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }else if (numero.length == '') {
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }

        navigation.navigate("DeliverymanVehicleData")

    }

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
                    />
                    <TextInput
                    style={styles.inputs}
                    placeholder={"Estado"}
                    value={estado}
                    onChangeText={(text) => setEstado(text)}
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
                    value={endereco}
                    onChangeText={(text) => setEndereco(text)}
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
                    onPress={() => doRegister()}
                    style={styles.btnPrimary}>
                    <Text style={styles.btnPrimaryText}>Confirmar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    );

}

export default DeliverymanRegisterAddress;
