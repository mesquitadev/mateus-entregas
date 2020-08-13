import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';

const OrderItem = ({ data }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  
  return (
    <View style={[styles.container, toggleCheckBox ? styles.active : styles.inactive]}>
      <Text style={styles.text}>No #{data.number}</Text>
      <Text style={styles.label}>Realizado em {data.date}</Text>
      <Text style={styles.label}>Cliente</Text>
      <Text style={styles.text}>{data.clientName}</Text>
      <Text style={styles.label}>Endereço de entrega</Text>
      <Text style={styles.text}>{data.address}</Text>
      <View style={styles.horizontalRule} />
      <View style={styles.bar}>
        <View style={styles.status}>
          <Text style={styles.barText}>Aguardando entrega</Text>
        </View>
        <TouchableOpacity style={styles.more}>
          <Text style={styles.barText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkBox}>
        <CheckBox
          boxType={'square'}
          onTintColor={'#00A349'}
          onCheckColor={'#FFF'}
          onFillColor={'#00A349'}
          disable={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
      </View>
    </View>
  );
};

export default OrderItem;