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
    color: "#F92121",
    marginTop: 30,
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
    width: screenWidth * 0.7,
  },

  buttonContainer: {
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 16
  },

  buttonVoltar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 112,
    paddingVertical: 15,
    backgroundColor: '#0095DA',
    textAlign: 'center'
  },

  textVoltar: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default styles;