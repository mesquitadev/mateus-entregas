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
    width: 200,
    height: 140,
    marginBottom: 30

  },

  textStrong: {
    fontWeight: "bold",
    color: "#787B7D",
    fontSize: 16,
    marginBottom: 5
  },

  text: {
    color: "#787B7D",
    width: screenWidth * 0.5,
    textAlign: "center",
    marginBottom: 20
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