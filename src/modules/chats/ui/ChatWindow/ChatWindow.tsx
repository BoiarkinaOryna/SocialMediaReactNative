import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
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
  if (!user || !token) return null;
  const { chatId } = params

  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    

    ClientSocket.emit("sendMessage", { chatId, text }, (response: any) => {
      if (response?.status === "error") {
        console.log("send message error:", response.message);
      }
    });

    setText("");
  };

  const handlePickAndSendPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      base64: true,
      quality: 0.7,
    });

    if (result.canceled) return;

    const image = result.assets[0]?.base64;
    if (!image) return;

    ClientSocket.emit(
      "sendMessage",
      {
        chatId,
        text: text.trim(),
        images: [image],
      },
      (response: any) => {
        if (response?.status === "error") {
          console.log("send image message error:", response.message);
        }
      },
    );

    setText("");
  };

  const [chatMessages, setChatMessages] = useState<any[]>([])
  

  // ClientSocket.on("newMessage", (message) => {
  //     console.log("message:", message);
  //     setChatMessages(chatMessages.push(message))
  // });
  useEffect(() => {
    const handler = (message: any) => {
      if (Number(message.chat_id) !== Number(chatId)) return;
      setChatMessages((prev) => [...prev, message]);
    };

    ClientSocket.on("newMessage", handler);

    return () => {
      ClientSocket.off("newMessage", handler);
    };
  }, [chatId]);

  const [getChatInfo, {data, error, isLoading}] = useLazyGetChatInfoQuery()
  // const {data, error, isLoading} = useGetChatInfoQuery({chatId, token})

  useEffect(() => {
    getChatInfo({ chatId, token });
  }, [chatId]);
  
  // обработка данных
  useEffect(() => {
    if (!data) return;
  
    console.log("info is here", data);
  
    setChatMessages(data.chat_app_message);
  }, [data]);

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
            onPress={handlePickAndSendPhoto}
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
