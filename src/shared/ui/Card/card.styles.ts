import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        borderRadius: 16,
        padding: 16,
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 10,
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10,
    },

    name: {
        fontSize: 16,
        fontWeight: "600",
    },

    username: {
        fontSize: 13,
        color: "#777",
        marginBottom: 10,
    },

    buttons: {
        flexDirection: "row",
        gap: 10,
    },

    primaryBtn: {
        backgroundColor: "#6C4AB6",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
    },

    primaryText: {
        color: "#FFF",
        fontSize: 13,
    },

    secondaryBtn: {
        borderWidth: 1,
        borderColor: "#6C4AB6",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
    },

    secondaryText: {
        color: "#6C4AB6",
        fontSize: 13,
    },
});