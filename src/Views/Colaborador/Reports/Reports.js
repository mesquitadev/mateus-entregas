import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Reports = () => (
  <View style={styles.container}>
    <Image source={require('../../../res/img/reports.png')} />
    <Text style={styles.text}>Opa, desculpa! Essa página ainda não está disponível para seu usuário</Text>
  </View>
);

export default Reports;