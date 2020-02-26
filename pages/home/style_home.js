import { StyleSheet } from "react-native"

export default StyleSheet.create({
    home:{
        flex:1
    }, 
    navigator:{
        paddingTop:32,
        height:64,
        width:"100%",
        // backgroundColor:"transparent",
        // opacity:0,
        // position:"absolute",
        // zIndex: 1000000,
        flexDirection: "row"
    },
    boyIcon:{
        width:15,
        height:15
    },
    iconWrap:{
        marginLeft: 19,
        marginRight: 78
    },
    tag:{
        marginRight: 31,
        height:26,
        width: 29,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderColor:"#fff"
    },
    tag_text:{
        fontSize: 14,
        color: "#757575",
        fontWeight: "bold"
    },
    tag_text_active:{
        color: "#3d3d3d"
    },
    tag_active:{
        borderColor:"#3d3d3d"
    },
    top_left:{
         marginLeft:16,
         flexDirection: "row",
         width: 49,
         justifyContent: "space-between"
    }
})