import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const UserHeader = () => {
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
  
  return(
    <View style={styles.userHeader}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../res/img/account.png')} />
        <View>
          <Text style={styles.name}>{user.username}</Text>
          <Text style={styles.store}>{user.username}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserHeader;