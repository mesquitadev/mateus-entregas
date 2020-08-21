import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 6,
    borderColor: "#B0BEC5",
    borderWidth: 1,
    shadowColor: '#00000033',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 25,
    width: screenWidth * 0.9,
  },

  active: {
    borderColor: "#00A349"
  },

  inactive: {
    borderColor: "transparent"
  },

  image: {
    width: 40,
    height: 40,
    marginRight: 15,
  },

  info: {
    flexGrow: 2
  },

  number: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  name: {
    color: "#787B7D",
  },
});

export default styles;