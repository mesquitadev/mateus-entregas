import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({

  container: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center",
   
  },

  wrapper: {
    alignItems: "center",
    paddingTop: 50
  },

  info: {
    textAlign: "center",
    color: "#F92121",
    marginBottom: 20
  },

  bold: {
    fontWeight: "bold"
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
  inputsagencia: {
    width: screenWidth * 0.4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#8898A6",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
    marginRight: 3
  },
  inputsconta: {
    width: screenWidth * 0.5,
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
    marginTop: 20
  
  },

  btnPrimaryText: {
    color: "#FFF",
    fontWeight: "bold",
  },

});

export default styles;