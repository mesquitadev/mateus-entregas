import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
     

    },
    wrapper: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 50,
        width: screenWidth * 0.5,
    },
    status: {
        color: "#00A349",
        fontSize: 18,
        textAlign: "center",
        paddingVertical: 30

    },
    btnPrimary: {
        backgroundColor: "#0095DA",
        width: screenWidth * 0.9,
        alignItems: "center",
        paddingVertical: 18,
        borderRadius: 5,
        marginTop: 15,
        marginBottom:15
        
    },
    
    btnPrimaryText: {
        color: "#FFF",
        fontWeight: "400",
    },
















 });

 export default styles;