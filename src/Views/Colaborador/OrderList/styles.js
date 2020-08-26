import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  orderList: {
    alignItems: "center",
  },
  
  flatListEstilo:{
    marginTop: 30,
    marginVertical:200
  },

  title: {
    width: screenWidth * 0.9,
    marginVertical: 15,
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
    width: screenWidth * 0.9,
    alignSelf: "center",
    borderRadius: 8,
  },

  active: {
    display: "flex",
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