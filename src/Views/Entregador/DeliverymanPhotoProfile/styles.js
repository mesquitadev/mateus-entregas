import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 20,
        
    },

    textoCnh: {
        fontSize: 22,
        textAlign: "center",
    },

    btnPrimary: {
        justifyContent: "center",  
        backgroundColor: "#0095DA",
        width: screenWidth * 0.9,
        alignItems: "center",
        paddingVertical: 18,
        borderRadius: 5,
        marginBottom: 50
      },

      btnPrimaryText: {
        color: "#FFF",
        fontWeight: "bold",
      }






 });

 export default styles;