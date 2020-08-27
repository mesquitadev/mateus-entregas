import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  orderItem: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    shadowColor: '#00000033',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginBottom: 15,
    padding: 15,
    width: screenWidth * 0.9,
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

  horizontalRule: {
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
  },

  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },

  status: {
    backgroundColor: "#B8E8FF",
    padding: 7,
    borderRadius: 30,
  },
  
  barText: {
    color: "#0070A3",
    fontSize: 12,
  },

  checkBox: {
    position: "absolute",
    top: 15,
    right: 15,
  },

  hide: {
    display: "none",
  },
});

export default styles;