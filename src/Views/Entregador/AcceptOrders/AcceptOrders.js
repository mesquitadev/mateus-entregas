import React from 'react';
import { View, Text } from 'react-native';

import UserHeader from '../../../Components/UserHeader/UserHeader';
import styles from './styles';

const AcceptOrders = () => {
  return (
    <View style={styles.container}>
      <UserHeader />
      
      <Text>AcceptOrders</Text>
    </View>
  );
};

export default AcceptOrders;