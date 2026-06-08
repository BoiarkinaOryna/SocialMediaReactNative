import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ICONS } from "@shared/icons";
import { Input } from "@shared/ui/Input/Input";
import { Button } from "@shared/ui/Button/Button";
import { Chat } from "./Chat/Chat";
import { styles } from "./chat-window.style";
import { useUserContext } from "@modules/auth/context/user.context";
import { ClientSocket } from "@shared/api/socket/socket";
import { useLazyGetChatInfoQuery } from "@modules/chats/api/chat.api";

export function ChatWindow(params: {chatId: number}) {
  const { token, user } = useUserContext()
  if (!user || !token) return
  const { chatId } = params

  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    

    ClientSocket.emit("sendMessage", {chatId, text});

    setText("");
  };

  const [chatMessages, setChatMessages] = useState<any[]>([])
  

  // ClientSocket.on("newMessage", (message) => {
  //     console.log("message:", message);
  //     setChatMessages(chatMessages.push(message))
  // });
  useEffect(() => {
    const handler = (message: any) => {
      setChatMessages((prev) => [...prev, message]);
    };

    ClientSocket.on("newMessage", handler);

    return () => {
      ClientSocket.off("newMessage", handler);
    };
  }, []);

  const [getChatInfo, {data, error, isLoading}] = useLazyGetChatInfoQuery()
  // const {data, error, isLoading} = useGetChatInfoQuery({chatId, token})

  useEffect(() => {
    getChatInfo({chatId, token})
    // while (true){
    //   if (isLoading) continue
    //   else {
        console.log("info is here", data)
        if (!data) return
        setChatMessages(data.chat_app_message)
      //   break
      // }
    // }
  }, [chatId])

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.groupInfo}>
          <Pressable onPress={() => router.back()}>
            <ICONS.SvgReturn />
          </Pressable>

          <View style={styles.info}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>NG</Text>
            </View>

            <View>
              <Text>{data?.name} {chatId}</Text>
              <Text>online</Text>
            </View>
          </View>
        </View>

        <ICONS.SvgDots />
      </View>

      <View style={styles.messageBlock}>
        <Chat messages={chatMessages} userId={user?.id} />

        <View style={styles.sendMessageBlock}>
          <Input
            style={{ flex: 1 }}
            placeholder="Повідомлення"
            value={text}
            onChangeText={setText}
          />

          <Button
            icon={<ICONS.SvgMound />}
          />

          <Button
            isDark
            icon={<ICONS.SvgPlane />}
            onPress={() => handleSend()}
          />
        </View>
      </View>
    </View>
  );
}