import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  card: {
    alignItems: "center",
    backgroundColor: "#FFF",
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
    width: 100,
    height: 100
  },

  textStrong: {
    fontWeight: "bold",
    color: "#787B7D"
  },

  text: {
    color: "#787B7D"
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