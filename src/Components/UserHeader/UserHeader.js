import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const UserHeader = () => {
  return(
    <View style={styles.userHeader}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../res/img/account.png')} />
        <View>
          <Text style={styles.name}>Higo Sampaio</Text>
          <Text style={styles.store}>Filial 20 - Curva do 90</Text>
        </View>
      </View>
    </View>
  );
};

export default UserHeader;