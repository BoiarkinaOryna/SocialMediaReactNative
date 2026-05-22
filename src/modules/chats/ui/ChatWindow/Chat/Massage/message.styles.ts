import { COLORS } from "@shared/constants/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    message: {
        flexDirection: "row",
        alignItems: "flex-end",
        padding: 10,
        borderRadius: 6,
        borderColor: COLORS.blue50,
        borderWidth: 0.5
    },
    myMessage: {
        flexDirection: "row",
        alignItems: "flex-end",
        padding: 10,
        borderRadius: 6,
        backgroundColor: COLORS.blue20
    },
    text: {
        flex: 1,
        fontSize: 14
    },
    time: {
        width: 25,
        fontSize: 10
    }
})