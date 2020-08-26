import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center"
  },

  searchFilter: {
    padding: 0,
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  inputSearch: {
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
    marginRight: 10
  },

  image: {
    width: 15,
    height: 15,
    marginRight: 5
  }
});

export default styles;