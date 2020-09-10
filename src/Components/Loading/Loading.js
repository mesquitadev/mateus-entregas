import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ text }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0095DA" />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15
  }
});

export default Loading;