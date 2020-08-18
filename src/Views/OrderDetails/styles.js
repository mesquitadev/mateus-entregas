import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  info: {
    width: screenWidth * 0.9,
    alignSelf: "center",
    paddingVertical: 15
  }, 
});

export default styles;