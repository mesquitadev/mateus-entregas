import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginBottom: 230
  },

  orderList: {
    alignItems: "center"
  },

  title: {
    width: screenWidth * 0.9,
    marginVertical: 15,
    fontSize: 14,
    fontWeight: "bold",
    color: "#2B2D2E",
  },
});

export default styles;