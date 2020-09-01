import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import UserHeader from '../../../Components/UserHeader/UserHeader';
import styles from './styles';

const DeliveryInProgress = ({ navigation, route }) => {
  return(
    <>
      <UserHeader />
      
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={require("../../../res/img/mateus_entrega.png")} />

          <Text style={styles.textStrong}>Opa!</Text>
          <Text style={styles.text}>Você possui uma entrega em andamento</Text>
          
          <TouchableOpacity
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