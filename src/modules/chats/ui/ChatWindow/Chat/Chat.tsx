import { View } from "react-native";
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

    if (!prev || prev.sender.id === message.sender.id) {
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
    <View style={styles.chatContainer}>
      {groupedMessages.map((group, i) => (
        <View
          key={i}
          style={[
            styles.sameSenderMessages,
            userId === group[0].sender.id && styles.myMessages,
          ]}
        >
          {group.map((msg) => (
            <ChatMessage
              key={msg.id}
              data={msg}
              isMy={msg.sender.id === userId}
            />
          ))}
        </View>
      ))}
    </View>
  );
}