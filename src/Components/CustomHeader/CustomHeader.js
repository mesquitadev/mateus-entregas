import React from 'react';
import styles from './styles';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const CustomHeader = ({pathIcon, headerTitle, event}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={event} style={styles.iconContainer}>
        <Image style={styles.icon} source={pathIcon} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

export default CustomHeader;
