import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  userHeader: {
    backgroundColor: "#FFF",
    paddingTop: 60,
    paddingBottom: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE"
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
    marginBottom: 3
  },

  store: {
    fontSize: 12,
    color: "#787B7D"
  }
});

export default styles;