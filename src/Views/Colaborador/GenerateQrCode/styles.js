import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40
  },
  
  info: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 2,
    top: 40
  },

  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2B2D2E",
  },

  identificador: {
    color: "#000000",
    marginBottom: 5,
    marginVertical:35,
    fontSize: 25,
    textAlign: "center",
    width: screenWidth * 0.7,
  },
  text: {
    marginVertical:35,
    color: "#AAAAAA",
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