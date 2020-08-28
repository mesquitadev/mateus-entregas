import {StyleSheet, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },

  card: {
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#B0BEC5',
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 16,
  },

  circleCheckBox: {
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 100,
    width: 34,
    height: 34,
  },

  text: {
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
    flexWrap: 'wrap',
    marginHorizontal: 12,
  },

  image: {
    width: 28,
    height: 28,
  },

  buttonsContainer: {
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

  buttonCancelar: {
    borderRadius: 8,
  },

  textCancelar: {
    fontWeight: 'bold',
  },

  buttonAdiar: {
    borderRadius: 8,
  },

  textAdiar: {
    fontWeight: 'bold',
  },
});

export default styles;
