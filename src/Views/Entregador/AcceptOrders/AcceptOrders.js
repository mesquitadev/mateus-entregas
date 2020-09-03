import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import UserHeader from '../../../Components/UserHeader/UserHeader';
import styles from './styles';

const AcceptOrders = ({ navigation }) => {
  
  return(
    <>
      <UserHeader />
      
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={require("../../../res/img/mateus_entrega.png")} />
          <TouchableOpacity
            onPress={() => navigation.navigate('ScanDeliveryCode')}
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