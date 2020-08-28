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

  btnAction: {
    backgroundColor: "#0095DA",
    width: screenWidth * 0.9,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
  },

  btnActionText: {
    color: "#FFF",
    padding: 15
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

  receiptImg: {
    width: 28,
    height: 28,
    marginRight: 10
  },

  receiptText: {
    fontWeight: "bold"
  }
});

export default styles;