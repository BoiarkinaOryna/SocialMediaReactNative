import { ScrollView, View } from "react-native";
import { styles } from "./chat.styles";
import { Message } from "./chat.types";
import { ChatMessage } from "./Massage/Message";

type Props = {
  messages: Message[];
  userId: number;
};

export function Chat({ messages, userId }: Props) {
  const groupedMessages: Message[][] = [];
  let group: Message[] = [];

  messages.forEach((message, index) => {
    const prev = group[group.length - 1];

    if (!prev || prev.sender_id === message.sender_id) {
      group.push(message);
    } else {
      groupedMessages.push(group);
      group = [message];
    }

    if (index === messages.length - 1) {
      groupedMessages.push(group);
    }
  });

  return (
    <ScrollView contentContainerStyle={styles.chatContainer}>
      {groupedMessages.map((group, i) => (
        <View
          key={i}
          style={[
            styles.sameSenderMessages,
            userId === group[0].sender_id && styles.myMessages,
          ]}
        >
          {group.map((msg) => (
            <ChatMessage
              key={msg.id}
              data={msg}
              isMy={msg.sender_id === userId}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}