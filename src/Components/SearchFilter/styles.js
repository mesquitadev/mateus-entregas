import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center"
  },

  searchFilter: {
    width: screenWidth * 0.9,
    padding: 10,
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },

  image: {
    width: 15,
    height: 15,
    marginRight: 15
  }
});

export default styles;