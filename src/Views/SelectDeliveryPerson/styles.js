import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    alignSelf: "center",
    marginVertical: 15,
  },

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
    padding: 20,
    width: screenWidth * 0.9,
  },

  image: {
    width: 40,
    height: 40,
    marginRight: 15,
  },

  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  cpf: {
    fontSize: 12,
    color: "#787B7D",
  },
});

export default styles;