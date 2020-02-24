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
        fontSize: 14,
        color: "#757575",
        marginRight: 31,
        height:26,
        width: 29,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderColor:"#fff"
    },
    tag_r:{
        color: "#fff"
    },
    tag_active:{
        color: "#3d3d3d",
        borderColor:"#3d3d3d"
    },
    tag_active_r:{
        color: "#3d3d3d",
        borderColor:"#fff"
    },
    top_left:{
         marginLeft:16,
         flexDirection: "row",
         width: 49,
         justifyContent: "space-between"
    }
})