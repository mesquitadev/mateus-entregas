import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    paddingTop: screenWidth / 4,
  },

  inputs: {
    width: screenWidth * 0.9,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: "#8898A6",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 16,
  },

  
});

export default styles;