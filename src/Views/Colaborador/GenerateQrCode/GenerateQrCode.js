import React,{ useState, useEffect }  from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';


  const GenerateQrCode =  ({ route: { params }, navigation: { navigate } }) => {
    const [codQrCode,setcodQrCode] = useState('');
    const [ user, setUser ] = useState('');

    useEffect(() => {
      const getUserData = async () => {
        try {
          const data = await AsyncStorage.getItem('entregas_user_data');
          const userData = JSON.parse(data);
          setUser(userData);
        } catch(err) {
          console.warn(err);
        }
      };
      getUserData();
    }, []);   

    console.log(user)
    console.log(params)
    
    useEffect(() => {
      const fetchData = async (params,user) => {
        const bodyParam ={
          "colaborador": {
            "id" : "1",
            "username":"03754879308"
          },
          "entregador": {
            "id" : "35",
            "username":"00022233344",
          },  
          "pedidos": [
            {
              "numeroPedido":"3000000839"
            }
          ],
          "log": {
            "ip": "127.0.0.1",
            "dispositivo": "Asus Zenfone 4",
            "localizacao": "-41.2866400;174.7755700"
          }
        };
        console.log(bodyParam)
        const response = await api.post(`/entrega`, bodyParam);
        setcodQrCode(response.data)
      };
      fetchData();
    }, []);

    console.log(codQrCode)
    
    // var timer = setInterval(() => {
    //   console.log('I do not leak!');
    // }, 5000);


  return(

    <View style={styles.container}>
    <View style={styles.info}>
      <QRCode 
            size = {300} 
            bgColor = '#000000' 
            fgColor = '#FFFFFF'
            value={codQrCode.identificador}
          />
      <Text style={styles.identificador}>{codQrCode.identificador}</Text>
      <Text style={styles.text}>{params.person.cnh}</Text>
      <Text style={styles.text}>{user.username}</Text>
      <Text style={styles.text}>Apresente este QrCode ou código para o entregador confirmar a retirada do pedido.</Text>
    </View>
  </View>

  );
};

export default GenerateQrCode;
