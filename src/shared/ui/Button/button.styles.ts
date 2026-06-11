import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";


export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        minWidth: 42,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 190,
        borderWidth: 1,
        borderColor: COLORS.pulm,
        backgroundColor: COLORS.white
    },
    text: {
        color: COLORS.pulm,
        fontSize: 12,
        fontWeight: "500",
    },
    dark: {
        backgroundColor: COLORS.pulm,
    },
    darkText: {
        color: COLORS.white
    }
})
