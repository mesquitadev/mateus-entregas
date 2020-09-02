import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    alignSelf: "center",
    marginVertical: 15,
    marginBottom: 160
  },

  title: {
    color: "#263238",
    fontWeight: "bold",
    marginVertical: 10,
  },

  list: {
    flexGrow: 2,
  },

  buttonBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#FFF",
    width: screenWidth,
    alignItems: "center",
    paddingVertical: 15,
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#0095DA",
    alignItems: "center",
    paddingVertical: 15,
    width: screenWidth * 0.9,
    alignSelf: "center",
    borderRadius: 8,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },

  btnInactive: {
    backgroundColor: "#DAE0E3",
  },

  btnInactiveText: {
    color: "#787B7D",
  },
});

export default styles;