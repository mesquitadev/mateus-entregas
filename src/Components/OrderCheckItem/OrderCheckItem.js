import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';

const OrderCheckItem = ({ data }) => {
  const [ toggleCheckBox, setToggleCheckBox ] = useState(false);
  
  return (
    <View style={[styles.card, toggleCheckBox ? styles.active : styles.inactive]}>
      <Image style={styles.image} source={require('../../res/img/caixa.png')} />
      <View style={styles.info}>
        <Text style={styles.number}>Nº #{data.number}</Text>
        <Text style={styles.name}>{data.clientName}</Text>
      </View>
      <CheckBox
        boxType={'circle'}
        onTintColor={'#00A349'}
        onCheckColor={'#FFF'}
        onFillColor={'#00A349'}
        disable={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => {
          setToggleCheckBox(newValue),
          loadSelectedOrders(data)
        }}
      />
    </View>
  );
};

export default OrderCheckItem;