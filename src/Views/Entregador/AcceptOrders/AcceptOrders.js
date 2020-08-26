import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import UserHeader from '../../../Components/UserHeader/UserHeader';
import styles from './styles';

const AcceptOrders = () => {
  return (
    <>
      <UserHeader />
      
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={require("../../../res/img/logo_mateus.png")} />
          <TouchableOpacity
            style={styles.button}>
            <Text style={styles.buttonText}>
              Aceitar pedidos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AcceptOrders;