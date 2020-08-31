import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },

  info: {
    width: screenWidth * 0.9,
    alignSelf: "center",
    marginVertical: 15,
  },

  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2B2D2E",
    marginBottom: 10,
  },

  label: {
    fontSize: 12,
    color: "#787B7D",
    marginBottom: 10,
  },

  status: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 12,
    color: "#787B7D",
  },

  divider: {
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
  },

  list: {
    width: screenWidth * 0.9,
    alignSelf: "center",
    marginVertical: 15,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  itemImage: {
    width: 35,
    height: 35,
    marginRight: 10,
  },

  itemText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2B2D2E",
  },

  listProducts: {
    marginLeft: 15
  },

  labelItems: {
    fontSize: 14,
    color: "#787B7D",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 17
  },
});

export default styles;