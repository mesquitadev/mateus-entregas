import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    flex: 1,
  },

  text: {
    color: "#DB3463",
    marginTop: 30,
    fontSize: 14,
    textAlign: "center",
    width: screenWidth * 0.7,
  },
});

export default styles;