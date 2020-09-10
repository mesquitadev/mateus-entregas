import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

const NetworkObserver = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let unsubscribe = false;

    if (!unsubscribe) {
      NetInfo.addEventListener(state => {
        (!state.isConnected) ? setShowMessage(true) : setShowMessage(false);
      });
    }

    return () => { unsubscribe = true };
  }, []);
  
  return (
    <>
      {showMessage ? (
        <View style={styles.container}>
          <MaterialCommunityIcons name={'wifi-off'} size={30} color={'#FFF'} />
          <Text style={styles.text}>Falha na conexão com a internet!</Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e57373",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 5
  }
});

export default NetworkObserver;