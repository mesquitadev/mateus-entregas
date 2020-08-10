import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center"
  },

  inputs: {
    width: screenWidth * 0.8
  },
  
  primaryButton: {
    marginBottom: 50
  }
});

export default styles;