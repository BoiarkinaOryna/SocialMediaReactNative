import { ChatWindow } from "@modules/chats/ui/ChatWindow/ChatWindow";
import { styles } from "@modules/chats/ui/GroupsPage/groups.styles";
import { ClientSocket } from "@shared/api/socket/socket";
import { ICONS } from "@shared/icons";
import { Link } from "@shared/ui/Links/Links";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function Chat(){
    const params = useLocalSearchParams<{ chatId: string }>();
    const chatId = Number(params.chatId);
    console.log("chatId", chatId)

    useEffect(() => {
        console.log("in use effect")
		if (Number.isNaN(chatId)) return;
		ClientSocket.emit("joinChat", { chatId }, (response: any) => {
			console.log(`Joined chat ${chatId} with response:`, response);
		});
		return () => {
			ClientSocket.emit("leaveChat", { chatId });
		};
	}, [chatId]);

    return <View style={styles.mainContainer}>
            <View style={styles.linksContainer}>
            <Link
                text="Контакти"
                logo
                logoComponent={<ICONS.SvgContacts />}
                link="/chats/contacts"
            />
            <Link
                text="Повідомлення"
                logo
                logoComponent={<ICONS.SvgChat />}
                linePosition={true}
            />
            <Link
                text="Групові чати"
                logo
                logoComponent={<ICONS.SvgChat />}
                link="/chats/groups"
            />
        </View>
        <ChatWindow />
    </View>
}