import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        width: 375,
        paddingVertical: 24,
        paddingHorizontal: 16, 
        backgroundColor: COLORS.white,
        borderRadius: 20,
    },
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10
    },
    headline: {
        fontSize: 24,
    },
    inputsContainer: {
        paddingVertical: 24
    }
})