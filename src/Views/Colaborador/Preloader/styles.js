import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#0095DA"
  },

  entrega: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center"
    
  },
  wrapper: {
    marginVertical: 300
  },    
  logo: {
    height: 20,
    width: 80,
    marginBottom: 50
     
  }
  
});

export default styles;  