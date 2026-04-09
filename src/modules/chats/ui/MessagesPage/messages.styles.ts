import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    mainContainer: {
        gap: 10,
    },
    linksContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.white
    }
})