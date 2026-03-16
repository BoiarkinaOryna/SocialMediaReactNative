import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        position: "absolute",
        bottom: -785,
        left: 0,
        right: 0,
       

    },
    headerBottom:{
        // position: "absolute",
        flexDirection: "row",
        // left: 0,
        // right: 0,
        // bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        height: 70,
        paddingBottom: 16,
        backgroundColor: "#FFF",
    },
    linksContainer:{
        flexDirection: "row",
        justifyContent:"space-between",
        height:54,
        paddingLeft: 16,
        paddingRight: 16, 
        gap: 20,   
    },
    links:{
        height: 54,
        borderRadius:2,
        paddingTop: 8 ,
        paddingRight:8,
        paddingBottom:4,
        paddingLeft:8,  
        alignItems:"center",
        justifyContent: "center",
        // boxSizing:"border-box",
        gap: 6,
    },
    h1:{
        fontWeight: 500,
        textAlign: "center",
    },
    selected:{
        borderTopWidth: 2,
        borderTopColor: "#543C52",
    }
})