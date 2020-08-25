import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const UserHeader = () => {
  const [ userName, setUserName ] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        setUserName( await AsyncStorage.getItem('entregas_user_name') )
      } catch(err) {
        console.warn(err);
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
          <Text style={styles.store}>{userName}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserHeader;