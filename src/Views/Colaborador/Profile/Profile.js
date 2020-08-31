import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

Ionicons.loadFont();

import styles from './styles';

const Profile = ( { navigation })=> {

  const [ user, setUser ] = useState('');

  const [ userName, setUserName] = useState('');
  const [ userMail, setUserMail] = useState('');
  const [ userProfile, setUserProfile] = useState('');
  const [ userCPF, setUserCPF] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('entregas_user_data');
        const userData = JSON.parse(data);
        
        setUserName(userData.nome);
        setUserMail(userData.email);
        setUserProfile(userData.perfil.descricao);
        setUserCPF(userData.username);
      } catch(err) {
        alert.Alert('App Entregas', 'Erro ao iniciar a aplicação, tente novamente mais tarde.');
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
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.text}>CPF: {userCPF}</Text>
        <Text style={styles.text}>{userMail}</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>Perfil: {userProfile}</Text>
        
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