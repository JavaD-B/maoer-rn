import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrap:{
        width: "100%",
        paddingLeft: 14,
        paddingRight: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginBottom: 30
    },
    button_wrap:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    }, 
    button:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width:128,
        height: 32,
        borderStyle: "solid",
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: "#e0e0e0"
    },
    button_text:{
        fontSize: 13,
        color: "#3d3d3d"
    }
})