import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center"
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#8898A6',
    height: 40,
    borderRadius: 7,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 6,
  },

  ImageStyle: {
    padding: 10,
    margin: 12,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  InputStyle: {
    flex: 1,
  }
});

export default styles;