import React from 'react';
import { View, TextInput, Image } from 'react-native';

import styles from './styles';

const SearchFilter = ({ onChangeText }) => {

  handleChangeText = text => {
    onChangeText(text);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.searchFilter}>
        <Image 
          source={require("../../res/img/search.png")} 
          style={styles.image}
        />
        <TextInput 
          onChangeText={text => this.handleChangeText(text)}
          placeholder="Pesquisar"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default SearchFilter;