import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import UserHeader from '../../../Components/UserHeader/UserHeader';
import styles from './styles';

const DeliveryInProgress = ({ navigation }) => {
  return(
    <>
      <UserHeader />
      
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={require("../../../res/img/entregando.png")} />

          <Text style={styles.textStrong}>Opa!</Text>
          <Text style={styles.text}>Você possui uma entrega em andamento</Text>
          
          <TouchableOpacity
            onPress={() => navigation.navigate('DeliveryOrders')}
            style={styles.button}>
            <Text style={styles.buttonText}>
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DeliveryInProgress;