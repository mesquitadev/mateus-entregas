import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
        paddingVertical: 50
        
    },

    infoCadastro: {
        color: "#F92121",
        fontSize: 18,
        fontWeight: "600",
        paddingVertical: 30
    
    },

    infoObs: {
        color: "#787B7D",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 1,
        width: screenWidth * 0.8,
        lineHeight: 20
    },

    wrapper: {
        flexDirection: "row",
        paddingVertical: 50,
    },

    suporte: {
        marginLeft: 10,
        color: "#F92121",
        fontSize: 16
    }

    

    


});

export default styles;