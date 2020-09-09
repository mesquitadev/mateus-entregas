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

const DeliverymanRegisterBank  = ({navigation}) => {

    const [banco, setBanco] = useState('');
    const [agencia, setAgencia] = useState('');
    const [conta, setConta] = useState('');

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.wrapper}>

                    <Text style={styles.info}>Apenas conta <Text style={styles.bold}>corrente</Text>, e a conta do banco 
                    tem que ser o nome do <Text style={styles.bold}>CPF cadastrado</Text> inicialmente 
                    </Text>

                    <TextInput
                    style={styles.inputs}
                    placeholder={"Banco"}
                    value={banco}
                    onChangeText={(text) => setBanco(text)}
                    />

                    <View style={styles.row}>
                        <TextInput
                        style={styles.inputsagencia}
                        placeholder={"Agência"}
                        value={agencia}
                        onChangeText={(text) => setAgencia(text)}
                        />

                        <TextInput
                        style={styles.inputsconta}
                        placeholder={"Conta corrente"}
                        value={conta}
                        onChangeText={(text) => setConta(text)}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("DeliverymanSetPassword")}
                        style={styles.btnPrimary}>
                        <Text style={styles.btnPrimaryText}>Confirmar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>

    );

} 

export default DeliverymanRegisterBank;