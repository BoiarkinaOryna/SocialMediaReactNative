import { View, Text } from "react-native";
import { styles } from "./chat.styles";
import { Message } from "./chat.types";
import { ChatMessage } from "./Massage/Message";



export function Chat(){
    // const { user } = useUserContext()
    const user = {id: 6}
    const messages: Message[] = [
        {
            id: 1,
            text: "bla-bla-bla",
            chat: {},
            created_at: "",
            sender: {id: 6},
            readers: []
        },
        {
            id: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor fermentum tempus. Integer et augue accumsan leo cursus suscipit ac.",
            chat: {},
            created_at: "",
            sender: {id: 6},
            readers: []
        },
        {
            id: 1,
            text: "bla-bla-bla",
            chat: {},
            created_at: "",
            sender: {id: 3},
            readers: []
        },
        {
            id: 1,
            text: "bla-bla-bla",
            chat: {},
            created_at: "",
            sender: {id: 1},
            readers: []
        },
    ]

    const groupedMessages: Message[][] = [];
    let currentGroup: Message[] = [];

    messages.forEach((message: Message, index: number) => {
        if (
            currentGroup.length === 0 ||
            currentGroup[currentGroup.length - 1].sender.id === message.sender.id
        ) {
            currentGroup.push(message);
        } else {
            groupedMessages.push(currentGroup);
            currentGroup = [message];
        }

        if (index === messages.length - 1) {
            groupedMessages.push(currentGroup);
        }
    });

    return (
        <View style={styles.chatContainer}>
            {groupedMessages.map(
                (group: Message[], groupIndex: number) => (
                    <View
                        key={groupIndex}
                        style={[
                            styles.sameSenderMessages,
                            user?.id === group[0].sender.id && styles.myMessages
                        ]}
                    >
                        {group.map((sameSenderMessage: Message) => (
                            <ChatMessage
                                key={sameSenderMessage.id}
                                data={sameSenderMessage}
                                isMy={
                                    user?.id ===
                                    sameSenderMessage.sender.id
                                    ? true : false
                                }
                            />
                        ))}
                    </View>
                )
            )}
        </View>
    );
}