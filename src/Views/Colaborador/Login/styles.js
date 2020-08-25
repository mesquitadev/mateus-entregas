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
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
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

  btnSecondary: {
    width: screenWidth * 0.9,
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 5,
    marginTop: 10,
  },

  btnSecondaryText: {
    color: "#0095DA"
  }
});

export default styles;