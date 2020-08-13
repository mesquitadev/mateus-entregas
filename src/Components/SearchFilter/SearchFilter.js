import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';

import styles from './styles';

const SearchFilter = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchFilter}>
        <Image 
          source={require("../../res/img/search.png")} 
          style={styles.image}
        />
        <TextInput 
          onChangeText={text => setSearchText(text)}
          placeholder="Pesquisar"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default SearchFilter;