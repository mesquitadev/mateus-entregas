import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const UserHeader = () => {
  const [ userData, setUserData ] = useState('');
  const [ userName, setUserName] = useState('');
  const [ userMail, setUserMail] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('entregas_user_data');
        const userData = JSON.parse(data);

        setUserName(userData.nome);
        setUserMail(userData.email)
      } catch(err) {
        alert.Alert('App Entregas', 'Erro ao iniciar a aplicação, tente novamente mais tarde.');
      }
    };

    getUserData();
  }, []);
  
  return(
    <View style={styles.userHeader}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../res/img/account.png')} />
        <View>
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.store}>{userMail}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserHeader;