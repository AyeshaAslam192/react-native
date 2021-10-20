import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    appCard : {
        width: 370,
        height: 300,
        borderRadius: 20,
        elevation: 30,
        alignSelf: "center",
        marginBottom: 20,
        marginTop: 20,
        overflow: "hidden",
    },
    cardImg : {
        height: 205,
        width: 370,
    },
    cardBody : {
        padding: 15,
    },
    name : {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 5,
    },
    price : {
        fontSize: 20,
        fontWeight: "600",
        color: "green",
    }
})