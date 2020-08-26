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

      btnSecondary: {
        width: screenWidth * 0.9,
        alignItems: "flex-start",
        paddingVertical: 18,
        paddingHorizontal: 80,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#00000029",
        marginTop: 20,
      },

      btnSecondaryText: {
        color: "#333",
      },

      divider: { 
        width: screenWidth * 1.0,
        borderWidth: .5,  
        borderColor: "#00000029",
        marginTop: 300,
        elevation: 1,
        shadowColor: "#000",
        shadowOpacity: 0.5
     
      },

      btnPrimary: {
        justifyContent: "flex-end",  
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
      },



});

export default styles;