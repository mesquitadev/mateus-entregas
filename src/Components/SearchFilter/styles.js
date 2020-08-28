import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center"
  },

  searchFilter: {
    width: screenWidth,
    padding: 0,
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 0,
    marginVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },

  inputSearch: {
    width: screenWidth * 0.83,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: "#8898A6",
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
    marginRight: 10,
    height: 45
  },

  image: {
    width: 21,
    height: 21,
    marginRight: 15,
    marginLeft: 13
  }
});

export default styles;