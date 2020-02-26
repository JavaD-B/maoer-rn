import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrap:{
        width: "100%",
        height: 80,
        paddingLeft: 14,
        paddingRight: 14,
        flexDirection: "row",
        marginBottom: 4
    },
    item:{
        width: 156,
        height: "100%",
        marginRight: 10,
        borderRadius: 4,
        overflow: "hidden",
        position: "relative"
    },
    item_title:{
        position: "absolute",
        width: "100%",
        bottom: 7,
        zIndex: 999
    },
    item_title_text:{
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12,
        color: "#fff"
    },
    item_tag:{
        width: 40,
        height: 16,
        backgroundColor: "#d96f57",
        textAlign: "center",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 8,
        position: "absolute",
        top: 4,
        right: 5
    },
    item_tag_text:{
        fontSize: 10,
        color: "#fff"
    }
})