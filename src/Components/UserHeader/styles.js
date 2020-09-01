import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  userHeader: {
    backgroundColor: "#FFF",
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },  

  container: {
    width: screenWidth * 0.9,
    flexDirection: "row",
    alignItems: "center"
  },

  image: {
    width: 32,
    height: 32,
    marginRight: 15
  },

  name: {
    fontSize: 16,
    color: "#2B2D2E",
    fontWeight: "bold",
    textTransform: 'capitalize',
    paddingTop: 2
  },

  store: {
    fontSize: 12,
    color: "#787B7D"
  }
});

export default styles;