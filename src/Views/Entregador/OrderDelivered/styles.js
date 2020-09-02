import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  
  card: {
    alignItems: "center",
    borderRadius: 5,
    shadowColor: '#00000033',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 25,
    width: screenWidth * 0.9,
  },

  image: {
    width: 210,
    height: 164,
    marginBottom: 30

  },

  textStrong: {
    fontWeight: "bold",
    color: "#00A349",
    fontSize: 18,
    marginBottom: 15
  },

  label: {
    color: "#787B7D",
    fontWeight: "bold"
  },

  text: {
    color: "#2B2D2E",
    width: screenWidth * 0.5,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold"
  },

  button: {
    backgroundColor: "#0095DA",
    width: screenWidth * 0.7,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20
  },

  buttonText: {
    color: "#FFF",
    padding: 15
  },

});

export default styles;