import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    formHeading: {
        marginTop: 20,
        fontSize: 25,
        alignSelf: "center",
        fontWeight: "bold",
    },
    formView: {
        paddingHorizontal: 20
    },
    submitBtn: {
        height: 50,
        borderRadius: 20,  
        backgroundColor: "dodgerblue",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    submitText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    errorText: {
        color: 'red', 
        marginTop: 0, 
        marginLeft: 10
    }
})