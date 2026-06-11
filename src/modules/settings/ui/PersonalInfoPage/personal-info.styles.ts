import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    mainContainer: {
        paddingBottom: 200,
        gap: 12,
    },
    linksContainer: {
        flexDirection: "row",
        gap: 20,
        margin: 20,
    },
    profileCard: {
        alignItems: "center",
        gap: 12
    },
    photoHint: {
        fontSize: 13,
        color: COLORS.black,
        textAlign: "center",
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 100
    },
    photoActions: {
        flexDirection: "row",
        gap: 22,
        alignItems: "center",
        justifyContent: "center",
    },
    flatButton: {
        borderWidth: 0,
        padding: 4,
        minWidth: 0,
    },
    nameContainer: {
        gap: 6,
        alignItems: "center"
    },
    currentName: {
        fontWeight: "700",
        fontSize: 20,
        color: COLORS.black
    },
    currentUsername: {
        fontWeight: "500",
        fontSize: 15,
        color: COLORS.blue50
    },
    profileInputs: {
        gap: 8,
        alignItems: "center",
        width: "100%",
    },
    profileInputWide: {
        width: 260,
        alignSelf: "center",
    },
    inputContainer: {
        gap: 16,
        width: "100%",
    },
    errorText: {
        color: COLORS.red,
        fontSize: 14,
    },
    personalPreview: {
        gap: 8,
    },
    previewText: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: "600",
    },
    previewMuted: {
        color: COLORS.blue50,
        fontSize: 15,
    },
    passwordContainer: {
        width: "100%",
        height:40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    passwordText: {
        fontWeight: "500",
        fontSize: 16,
        color: COLORS.black,
    },
    checkListItem: {
        flexDirection: "row",
        opacity: 0.5,
        gap: 10,
    },
    signatureText: {
        fontSize: 16
    },
    pseudonym: {
        fontSize: 16,
        fontWeight: "400"
    },
    signatureContainer: {
        alignItems: "center",
        width: "100%",
    },
    signature: {
        width: 200,
        height: 100
    }

})
