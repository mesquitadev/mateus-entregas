import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
        paddingTop: 20
        
    },

    textmsg: {
        color: "#0095DA",
        fontSize: 14,
        textAlign: "center",
        width: screenWidth * 0.4,
        marginTop: 10
    },

    nameDeliveryman: {
        color: "#2B2D2E",
        fontSize: 18,
        fontWeight: "500",
        marginTop: 20
    },
    cpfDeliveryman: {
        color: "#2B2D2E",
        fontSize: 12,
        marginTop: 10
    },

    divider: {
        width: screenWidth * 0.9,
        borderBottomColor: "#DAE0E3",
        borderBottomWidth: 1,
        marginTop: 30
    },

    msg: {
        width: screenWidth * 0.7,
        lineHeight: 15,
        textAlign: "center",
        paddingVertical: 20,
        color: "#787B7D",
        fontSize: 10
    },

    approved: {
        fontSize: 16
    },
    
    resultConfirm: {
        fontSize: 12,
        color: "#787B7D"
    }

 });

 export default styles;