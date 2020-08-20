import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 15,
  },

  buttonBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#FFF",
    width: screenWidth,
    alignItems: "center",
    paddingVertical: 15,
    justifyContent: "center",
  },

  selectedItemsButton: {
    backgroundColor: "#0095DA",
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 15,
    width: screenWidth * 0.9,
    alignSelf: "center",
    borderRadius: 8,
  },

  selectedItemsButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default styles;