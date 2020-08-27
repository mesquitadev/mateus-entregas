import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  containerCinza: {
    flex: 1,
    height: '100%',
    borderColor: '#787B7D',
    borderTopWidth: 38,
    borderBottomWidth: 140,
    borderLeftWidth: 32,
    borderRightWidth: 32,
  },

  containerBranco: {
    borderWidth: 3,
    borderColor: '#fff',
    flex: 1,
  },

  iconClose: {
    alignSelf: 'flex-start',
    padding: 16,
  },

  textContainer: {
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginHorizontal: 27,
    paddingVertical: 8,
    paddingHorizontal: 12,
    position: 'absolute',
    bottom: 8
  },

  text: {
    color: '#263238',
    textAlign: 'center',
    fontWeight: '600'
  },

  borderButton: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100,
    width: 66,
    height: 66,
    position: 'absolute',
    bottom: 30,
  },

  buttonAround: {
    width: 56,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    alignSelf: 'center',
    bottom: 3,
    position: 'absolute',
  },
});
export default styles;
