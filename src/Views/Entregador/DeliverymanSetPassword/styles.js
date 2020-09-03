import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },

  inputs: {
    width: screenWidth * 0.9,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: '#8898A6',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
  },

  observer: {
    fontSize: 10,
    color: '#787B7D',
  },

  btnPrimary: {
    justifyContent: 'center',
    backgroundColor: '#0095DA',
    width: screenWidth * 0.9,
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 5,
    marginBottom: 50,
  },

  btnPrimaryText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  btnDisabled: {
    backgroundColor: '#DAE0E3',
    width: screenWidth * 0.9,
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 50,
  },

  btnDisabledText: {
    color: '#787B7D',
  },
  iconEye: {
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    marginVertical: 12,
    marginHorizontal: 4,
    right: 0,
    width: 60,
    zIndex: 5,
  },
});

export default styles;
