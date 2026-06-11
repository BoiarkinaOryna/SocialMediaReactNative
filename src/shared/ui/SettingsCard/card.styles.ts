import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        padding: 14,
        gap: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.blue20,
        backgroundColor: COLORS.white,
    },
    headline: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 13,
        fontWeight: "600",
        color: COLORS.black
    }
})
