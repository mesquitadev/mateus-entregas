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

  iconAlert: {
    marginHorizontal: 10,
  },

  btnSecondary: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00000029',
    marginTop: 20,
  },

  btnSecondaryText: {
    color: '#2B2D2E',
    marginHorizontal: 0,
    fontSize: 12,
  },

  btnPrimary: {
    justifyContent: 'flex-end',
    width: screenWidth * 0.9,
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 5,
    marginBottom: 50,
  },

  btnPrimaryText: {
    fontWeight: 'bold',
  },
});

export default styles;
