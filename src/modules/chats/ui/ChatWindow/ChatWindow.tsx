import { ICONS } from "@shared/icons";
import { View, Text } from "react-native";
import { Chat } from "./Chat/Chat";
import { Input } from "@shared/ui/Input/Input";
import { Button } from "@shared/ui/Button/Button";
import { styles } from "./chat-window.style";

export function ChatWindow (){
    return <View style={styles.container}>
        <View style={styles.head}>
            <View style={styles.groupInfo}>
                <ICONS.SvgReturn/>
                <View style={styles.info}>
                    <View style={styles.avatar}><Text>NG</Text></View>
                    <View>
                        <Text>
                            New Group
                        </Text>
                        <Text>
                            3 учасники, 1 в мережі
                        </Text>
                    </View>
                </View>
            </View>
            <ICONS.SvgOpenMenu/>
        </View>
        <View style={styles.messageBlock}>
            <Chat/>
            <View style={styles.sendMessageBlock}>
                <Input style={{flex: 1}} placeholder="Повідомлення"/>
                <Button icon={<ICONS.SvgMound/>}/>
                <Button isDark={true} icon={<ICONS.SvgCross/>}/>
            </View>
        </View>
    </View>
}