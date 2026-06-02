import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useState } from "react";

import { ICONS } from "@shared/icons";
import { Input } from "@shared/ui/Input/Input";
import { Button } from "@shared/ui/Button/Button";

import { Chat } from "./Chat/Chat";

// import {
//   useGetChatMessagesQuery,
//   useSendMessageMutation,
// } from "@modules/chats/api/chat.api";
import { styles } from "./chat-window.style";
import { useUserContext } from "@modules/auth/context/user.context";
import { ClientSocket } from "@shared/api/socket/socket";

export function ChatWindow() {
  const { token } = useUserContext()
  const { id } = useLocalSearchParams();

  const chatId = String(id);
  const userId = 6;

  // const { data: messages = [] } = useGetChatMessagesQuery({
  //   chatId,
  //   token: token!,
  // });

  // const [sendMessage] = useSendMessageMutation();
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    

    // sendMessage({
    //   chatId,
    //   text,
    //   senderId: userId,
    // });

    ClientSocket.emit("sendMessage", text);

    setText("");
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.head}>
        <View style={styles.groupInfo}>
          <Pressable onPress={() => router.back()}>
            <ICONS.SvgReturn />
          </Pressable>

          <View style={styles.info}>
            <View style={styles.avatar}>
              <Text>NG</Text>
            </View>

            <View>
              <Text>Chat #{id}</Text>
              <Text>online</Text>
            </View>
          </View>
        </View>

        <ICONS.SvgOpenMenu />
      </View>

      {/* CHAT */}
      <View style={styles.messageBlock}>
        <Chat messages={[]} userId={userId} />

        <View style={styles.sendMessageBlock}>
          <Input
            style={{ flex: 1 }}
            placeholder="Сообщение"
            value={text}
            onChangeText={setText}
          />

          <Button
            icon={<ICONS.SvgMound />}
          />

          <Button
            isDark
            icon={<ICONS.SvgCross />}
            onPress={() => handleSend()}
          />
        </View>
      </View>
    </View>
  );
}