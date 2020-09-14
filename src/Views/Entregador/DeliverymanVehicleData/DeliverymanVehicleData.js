import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import deliverymanVehicle from '../../../services/deliverymanVehicle';
import {KEY_ID_DADOS_PESSOAIS} from '../../../Utils/keys';

import styles from './styles';


const DeliverymanVehicleData = ({navigation}) => {

    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
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

    const saveVehicle = async () => {
        if(placa.length == '' || modelo == ''){
            Alert.alert('Mateus entregas',' Verifique os campos em branco')
            return;
        }

        try {
          await deliverymanVehicle({
            placa: placa,
            modelo: modelo,
            idUser: idUser
          });
          navigation.navigate('DeliverymanPhotos');
        } catch (error) {
          Alert.alert('Mateus Entregas', 'Não foi possível salvar os dados do veículo.');
        }
    };
   
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
                    onChangeText={(text) => setPlaca(text.toUpperCase())}
                    maxLength={7}
                    />
                  
                    
                    <TouchableOpacity
                    onPress={async () => {
                        await saveVehicle();
                      }}
                    style={styles.btnPrimary}>
                    <Text style={styles.btnPrimaryText}>Confirmar</Text>
                    </TouchableOpacity>

                </View>
            </View>
       
    );

}

export default DeliverymanVehicleData;
