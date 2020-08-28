import {StyleSheet, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerImage: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 82,
    marginTop: 40,
  },

  photoCNH: {
    width: 196,
    height: 273,
  },

  photoPerfil: {
    borderRadius: 100,
    width: 196,
    height: 196,
  },

  title: {
    fontSize: 20,
    color: '#2B2D2E',
    marginTop: 24,
  },

  description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#787B7D',
    marginTop: 16,
    lineHeight: 20
  },

  buttonsContainer: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 80,
    justifyContent: 'space-evenly',
    width: '100%',
    flexDirection: 'row',
    shadowColor: '#0000001A',
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 10,
  },

  button: {
    paddingVertical: 15,
    paddingHorizontal: 60,
  },

  buttonTirarOutra: {
    borderColor: '#0095DA',
    borderWidth: 1,
    borderRadius: 8,
  },

  textTirarOutra: {
    color: '#0095DA',
    fontWeight: 'bold',
  },

  buttonSalvar: {
    backgroundColor: '#0095DA',
    borderRadius: 8,
  },

  textSalvar: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
