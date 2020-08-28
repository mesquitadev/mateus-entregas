import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  orderList: {
    alignItems: "center",
  },
  
  flatListEstilo:{
    marginTop: 0,
  },

  title: {
    width: screenWidth * 0.9,
    height: 18,
    marginVertical: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#2B2D2E",
  },

  selectedItemsButton: {
    display: "none",
    backgroundColor: "#0095DA",
    alignItems: "center",
    paddingVertical: 15,
    marginVertical: 10,
    width: screenWidth,
    alignSelf: "center",
    borderRadius: 0,
    bottom: 65,
  },

  active: {
    display: "flex",
    position: 'absolute'
  },

  inactive: {
    display: "none",
  },

  selectedItemsButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default styles;