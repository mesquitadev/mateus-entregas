import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

import styles from './styles';

const DeliveryInformation = ({ route: { params }, navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Ionicons name={'person-circle'} size={146} color={"#777"}/>
        <Text style={styles.userName}>{params.person.name}</Text>
        <Text style={styles.text}>CPF: {params.person.cpf}</Text>
        {console.log(params.person)}
        <Text style={styles.text}>Código: {params.person.identificador}</Text>
      </View>
      <View style={styles.buttonBar}>
        <TouchableOpacity
          onPress={() => navigate('SelectDeliveryPerson')}
          style={styles.buttonPrev}>
          <Text style={styles.buttonPrevText}>
            Escolher outro entregador
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('GenerateQrCode', params)}
          style={styles.buttonNext}>
          <Text style={styles.buttonNextText}>
            Gerar QrCode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryInformation;