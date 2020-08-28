import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF"
  },

  touchable: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#CCC",
    width: screenWidth * 0.9,
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  touchableImg: {
    width: 28,
    height: 28,
    marginRight: 10
  },

  touchableText: {
    fontWeight: "bold"
  },
});

export default styles;