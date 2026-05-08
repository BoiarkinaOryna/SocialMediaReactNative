import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },

    tabs: {
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 20,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
    },

    tabText: {
        fontSize: 14,
        color: "#999",
        paddingBottom: 10,
    },

    activeTab: {
        color: "#6C4AB6",
        borderBottomWidth: 2,
        borderBottomColor: "#6C4AB6",
    },
});