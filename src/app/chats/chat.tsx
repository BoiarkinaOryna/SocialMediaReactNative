import { ChatWindow } from "@modules/chats/ui/ChatWindow/ChatWindow";
import { styles } from "@modules/chats/ui/GroupsPage/groups.styles";
import { ICONS } from "@shared/icons";
import { Link } from "@shared/ui/Links/Links";
import { View } from "react-native";

export default function Chat(){
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