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


const DeliverymanVehicleData = ({navigation}) => {

    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
   

    const doRegister = () => {

        if(placa.length == '' || modelo == ''){
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }
        
        navigation.navigate("DeliverymanPhotos")

    }

    return (
    
            <View style={styles.container}>
                <View style={styles.wrapper}>

                    <TextInput
                    style={styles.inputs}
                    placeholder={"Modelo"}
                    value={modelo}
                    onChangeText={(text) => setModelo(text)}
                    autoFocus
                    />
                    <TextInput
                    style={styles.inputs}
                    placeholder={"Placa"}
                    value={placa}
                    onChangeText={(text) => setPlaca(text.replace(/^[a-zA-Z]{3}[0-9]{4}$/))}
                    maxLength={8}
                    />
                  
                    
                    <TouchableOpacity
                    onPress={() => doRegister()}
                    style={styles.btnPrimary}>
                    <Text style={styles.btnPrimaryText}>Confirmar</Text>
                    </TouchableOpacity>

                </View>
            </View>
       
    );

}

export default DeliverymanVehicleData;
