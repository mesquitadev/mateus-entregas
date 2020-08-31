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

    const numeroPedidoList = params.orders.map((ordem, index) => {
      //console.log(ordem.numeroPedido)
      return ({numeroPedido: ordem.numeroPedido})
    });

    //console.log(params)
    //console.log(user)


 useEffect(() => {
    const fetchData = async () => {
        const bodyParam ={
            colaborador: {
              id : user.id,
              username: user.username
            },
            entregador: {
              id : params.person.usuario.id,
              username: params.person.usuario.username,
            },  
            pedidos: numeroPedidoList,
            // pedidos: [
            //   {
            //     "numeroPedido":"3000000839"
            //   }
            // ],
            log: {
              ip: "127.0.0.1",
              dispositivo: "Asus Zenfone 4",
              localizacao: "-41.2866400;174.7755700"
            }
          }
        //console.log(bodyParam)
    
        const response = await api.post(`/entrega`, bodyParam);
        //console.log(response.data)
        setcodQrCode(response.data)
        }
        fetchData();
      }, []);
    
      


      // useEffect(() => {
      //   const id = setInterval(() => {
      //     setCount(c => c + 1); // ✅ This doesn't depend on `count` variable outside
      //   }, 1000);
      //   return () => clearInterval(id);
      // }, []);

    // var timer = setInterval(async() => {
      
    //     const response =  await api.get('/entrega/'+codQrCode.identificador);
    //     console.log("id" + +codQrCode.identificador + "===>"+response.data);

    //   }, 5000)

  return(

    <View style={styles.container}>
    <View style={styles.info}>
      <QRCode 
            size = {300} 
            bgColor = '#000000' 
            fgColor = '#FFFFFF'
             value={codQrCode.identificador}
            // value="123456"
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
