import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

Ionicons.loadFont();

import styles from './styles';

const Profile = ( { navigation })=> {

  const [ userData, setUserData ] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        var dataUser = await AsyncStorage.getItem('entregas_user_name')
        dataUser = JSON.parse(dataUser)
        setUserData( dataUser )
      } catch(err) {
        console.warn(err);
      }
    };

    getUserData();
  }, []);


  // Criar o useEffect para carregar os pedidos da api
  // setListItems com a resposta do endpoint
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Ionicons name={'person-circle'} size={146} color={"#777"}/>
        <Text style={styles.userName}>{userData.username}</Text>
        <Text style={styles.text}>Separador</Text>
        <Text style={styles.text}>CPF: 000000000-00</Text>
      </View>
      <View style={styles.button}>
        <Button
        onPress={() => navigation.navigate('Login')}
        title="Sair" />
      </View>
    </View>
  );
};

export default Profile;