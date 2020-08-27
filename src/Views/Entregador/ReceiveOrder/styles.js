import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF"
  },

  info: {
    flexGrow: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30
  },

  card: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#DAE0E3",
    borderRadius: 5,
    shadowColor: '#00000033',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: screenWidth * 0.9,
  },

  label: {
    color: "#787B7D"
  },

  text: {
    fontWeight: "bold",
    marginVertical: 5
  },

  button: {
    backgroundColor: "#0095DA",
    width: screenWidth * 0.9,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
  },

  buttonText: {
    color: "#FFF",
    padding: 15
  },
});

export default styles;