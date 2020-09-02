import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "flex-start",
        paddingTop: 10,
    
    },
    border: {
        width: screenWidth * 1,
        borderBottomWidth: 1,
        borderBottomColor: "#ECEFF1",
       
    
    },

    headerTitle: {
        fontSize: 16,
        color: "#2B2D2E",
        fontWeight: "500",
        marginLeft: 16,
        padding: 10
    
    },
    body: {
        fontSize: 14,
        color: "#787B7D",
        textAlign: "left",
        lineHeight: 20,
        marginTop: 10,
        marginLeft: 16,
        padding: 10
    },
    suporte: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10
    },  

    link: {
        color: "#0095DA",
        marginBottom: 32
    }








});

export default styles;