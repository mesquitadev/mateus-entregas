import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  wrapper: {
    paddingTop: 50
  },

  inputs: {
    width: screenWidth * 0.9,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#8898A6",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
  },

  row: {
    flexDirection: "row"
  },
  inputsbairro: {
    width: screenWidth * 0.7,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#8898A6",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
    marginRight: 3
  },
  inputsnumero: {
    width: screenWidth * 0.2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#8898A6",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
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
    fontWeight: "bold",
  },

});

export default styles;