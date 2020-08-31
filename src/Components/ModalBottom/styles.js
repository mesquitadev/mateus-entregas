import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0000003D',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 14,
    position: 'absolute',
    zIndex: 10
  },

  modalContent: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    borderRadius: 16,
    height: 230,
    width: 380,
    position: 'relative',
  },

  iconClose: {
    alignSelf: 'flex-end',
    marginHorizontal: 24,
  },

  text: {
    textAlign: 'center',
    width: '50%',
    flexWrap: 'wrap',
    fontSize: 18,
  },

  buttonConfirmar: {
    backgroundColor: '#0095DA',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 112,
  },

  textButtonConfirmar: {
    color: '#fff',
    fontSize: 14,
  },
});
export default styles;
