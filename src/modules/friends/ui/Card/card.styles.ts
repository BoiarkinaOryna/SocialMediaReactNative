import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
// Вычисляем ширину карточки: экран минус отступы по бокам
const CARD_WIDTH = width - 40; 

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: "center",
        marginHorizontal: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#EAEAEA",
        // Тень для iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        // Тень для Android
        elevation: 2,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 14,
        backgroundColor: "#F0F0F0",
    },
    name: {
        fontSize: 18,
        fontWeight: "700",
        color: "#0F172A",
        marginBottom: 4,
    },
    username: {
        fontSize: 14,
        color: "#64748B",
        marginBottom: 20,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        gap: 12,
    },
    // Фиолетовая кнопка (Підтвердити, Додати, Повідомлення)
    primaryBtn: {
        backgroundColor: "#4B2E63", // Темно-фиолетовый оттенок с макета
        paddingVertical: 10,
        flex: 1, // Кнопки делят пространство поровну
        maxWidth: 130,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    primaryText: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "600",
    },
    // Прозрачная кнопка (Видалити)
    secondaryBtn: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#CBD5E1", // Светло-серый бордер как на скрине
        paddingVertical: 10,
        flex: 1,
        maxWidth: 130,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    secondaryText: {
        color: "#64748B", // Серый текст
        fontSize: 13,
        fontWeight: "600",
    },
});
