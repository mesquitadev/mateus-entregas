import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },

  info: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 2,
  },

  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2B2D2E",
  },

  text: {
    color: "#787B7D",
    marginBottom: 5,
    fontSize: 14,
    textAlign: "center",
    width: screenWidth * 0.7,
  },

  button: {
    marginBottom: 20,
  },
});

export default styles;