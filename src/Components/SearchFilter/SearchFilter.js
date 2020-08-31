import React from 'react';
import { View, TextInput, Image } from 'react-native';

import styles from './styles';

const SearchFilter = ({ onChangeText }) => {

  handleChangeText = text => {
    onChangeText(text);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.SectionStyle}>
        <Image
          source={require("../../res/img/search.png")} 
          style={styles.ImageStyle}
        />

        <TextInput
          style={styles.InputStyle}
          placeholder="Pesquisar"
          underlineColorAndroid="transparent"
          onChangeText={text => this.handleChangeText(text)}
        />
      </View>
    </View>
  );
};

export default SearchFilter;