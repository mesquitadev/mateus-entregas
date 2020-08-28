import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

Ionicons.loadFont();

import styles from './styles';

const Profile = ( { navigation })=> {

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

  const doLogout = async () => {
    await AsyncStorage.setItem('entregas_user_data', '');
    setUser('');
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Ionicons name={'person-circle'} size={146} color={"#777"}/>
        <Text style={styles.text}>{user.nome}</Text>
        <Text style={styles.text}>{user.perfil.descricao}</Text>
        <Text style={styles.text}>CPF: {user.username}</Text>
      </View>
      <View style={styles.button}>
        <Button
        onPress={() => doLogout()}
        title="Sair" />
      </View>
    </View>
  );
};

export default Profile;