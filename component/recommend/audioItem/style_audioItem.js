import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrap:{
        width: 108,
        marginBottom: 16
    },
    top:{
        width: 108,
        height: 108,
        shadowColor:'#a9a6a6',
        shadowOffset:{h:-10,w:-10},
        shadowRadius:3,
        shadowOpacity:0.5,
        elevation: 2,
        marginBottom: 5
    },
    topBg:{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative"
    },
    top_container:{
        position: "absolute",
        width:"100%",
        paddingRight: 4,
        paddingLeft: 4,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "#000",
        // opacity: 0.2
    },
    top_box:{
        flexDirection: "row",
        alignItems:"center",
        marginBottom: 3
    },
    top_text:{
        color: "#fff",
        fontSize: 10,
        marginLeft: 2
    },
    bottom:{
        fontSize: 12,
        color: "#3d3d3d",
        lineHeight: 15
    }
})