import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const pathIconClose = require('../../res/img/cancel.png');

const ModalButtom = ({
  text,
  buttonValue,
  closeBottonModal,
  event
}) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={styles.iconClose}
          onPress={closeBottonModal}>
          <Image source={pathIconClose} />
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity style={styles.buttonConfirmar} onPress={event}>
          <Text style={styles.textButtonConfirmar}>{buttonValue}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalButtom;