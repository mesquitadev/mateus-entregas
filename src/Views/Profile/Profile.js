import React from 'react';
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

import styles from './styles';

const Profile = () => {

  // Criar o useEffect para carregar os pedidos da api
  // setListItems com a resposta do endpoint
  
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Ionicons name={'person-circle'} size={146} color={"#777"}/>
        <Text style={styles.userName}>Higo Sampaio</Text>
        <Text style={styles.text}>Separador</Text>
        <Text style={styles.text}>CPF: 000000000-00</Text>
      </View>
      <View style={styles.button}>
        <Button title="Sair" />
      </View>
    </View>
  );
};

export default Profile;