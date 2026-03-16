import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    headerTop: {
        flexDirection: "row",
        paddingTop:8,
        paddingLeft:16,
        paddingRight:16,
        paddingBottom:8,
        justifyContent: "space-between",
        height: 56,
        // flex: 1,
        backgroundColor: "#FFF",
    },
    headerBottom:{
        // display: "none",
        // position: "absolute",
        flexDirection: "row",
        // flex: 1,
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

    imgWorld:{
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        

    },
    buttonCon:{
        width:140,
        height:40,
        gap:10,
        flexDirection:"row",
    },
    button:{
        width:40,
        height:40,
        borderRadius:1234,
        borderWidth:1  ,
        borderColor: "#543C52",
        padding:10,
        gap:8,
        // color:"#543C52",
        alignItems:"center",
        justifyContent:"center",
    },
    selected:{
        borderTopWidth: 2,
        borderTopColor: "#543C52",
    }
})