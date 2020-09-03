import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    
  },

  logo: {
    width: screenWidth * 0.7,
    resizeMode: 'contain',
    paddingVertical: 0,
    left: screenWidth / 8,
    height: screenWidth * 0.20,
  },

  inputs: {
    width: screenWidth * 0.9,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: "#8898A6",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 16,
    fontFamily: 'Montserrat-Medium'
  },

  btnPrimaryDisabled: {
    backgroundColor: "#CCCCCC",
    width: screenWidth * 0.9,
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 5,
    marginTop: 15,
  },

  btnPrimary: {
    backgroundColor: "#0095DA",
    width: screenWidth * 0.9,
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 5,
    marginTop: 15,
  },

  btnPrimaryText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold'
  },

  btnSecondary: {
    width: screenWidth * 0.9,
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 5,
    marginTop: 10
  },

  btnSecondaryText: {
    color: "#0095DA",
    fontFamily: 'Montserrat-Medium'
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
    zIndex: 5
  },
  btnHelp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60
  }

});

export default styles;