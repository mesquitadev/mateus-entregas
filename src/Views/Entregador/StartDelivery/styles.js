import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF"
  },

  body: {
    flexGrow: 2,
    alignItems: "center"
  },

  info: {
    width: screenWidth * 0.9,
    alignSelf: "center",
    marginVertical: 15,
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
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

  btnViewMoreText: {
    fontSize: 12,
    color: "#0095DA"
  },

  contact: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#CCC",
    width: screenWidth * 0.9,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginVertical: 30
  },

  contactTouchable: {
    alignItems: "center"
  },

  contactTouchableText: {
    fontSize: 12,
    color: "#0095DA",
    fontWeight: "bold"
  },

  receipt: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CCC",
    width: screenWidth * 0.9,
    borderWidth: 1,
    borderRadius: 5,
    padding: 20
  },

  receiptActive: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00A349",
    width: screenWidth * 0.9,
    borderWidth: 2,
    borderRadius: 5,
    padding: 20
  },

  receiptImg: {
    width: 28,
    height: 28,
    marginRight: 10
  },

  receiptText: {
    fontWeight: "bold"
  },

  startTouchable: {
    backgroundColor: "#0095DA",
    width: screenWidth * 0.9,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
  },

  returnTouchable: {
    display: "flex",
    backgroundColor: "#D98016",
    width: screenWidth * 0.9,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
  },

  startTouchableText: {
    color: "#FFF",
    padding: 15
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth * 0.9,
    marginBottom: 15
  },

  actionsTouchableLight: {
    alignItems: "center",
    borderColor: "#0095DA",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    width: screenWidth * 0.42,
  },

  actionsTouchableLightText: {
    fontWeight: "bold",
    color: "#0095DA"
  },

  actionsTouchable: {
    alignItems: "center",
    backgroundColor: "#DAE0E3",
    borderColor: "#DAE0E3",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    width: screenWidth * 0.42,
  },

  actionsTouchableText: {
    fontWeight: "bold",
    color: "#787B7D"
  },

  actionsTouchableActive: {
    alignItems: "center",
    backgroundColor: "#0095DA",
    borderColor: "#0095DA",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    width: screenWidth * 0.42,
  },

  actionsTouchableActiveText: {
    fontWeight: "bold",
    color: "#FFF"
  },

  hide: {
    display: "none"
  }
});

export default styles;