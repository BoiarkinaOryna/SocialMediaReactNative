import { View, Text, Pressable, Image, Modal } from "react-native";
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
import { API_BASE_URL } from "@shared/api/api";
import { GroupOptionsModal } from "../GroupModals/GroupOptionsModal/GroupOptionsModal";
import * as ImagePicker from "expo-image-picker";



export function ChatWindow(params: {chatId: number}) {

  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState<boolean>(false)

  const { token, user } = useUserContext()
  if (!user || !token) return
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
  const getImageUrl = (img: string) => {
      const uri = `${API_BASE_URL}/uploads/${img}`
      console.log("uri", uri)
      return uri
  }

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

  useEffect(() => {
    getChatInfo({ chatId, token });
  }, [chatId]);
  

  const [secondPersonalChatUser, setSecondPersonalChatUser] = useState<any>(null);

  useEffect(() => {
    if (!data) return;

    const users = data.chat_app_chat_users;

    const secondUser = users.find(
      (chatUser: any) => chatUser.user_id !== user.id
    );

    setSecondPersonalChatUser(secondUser ?? null);

    console.log("selected user", secondUser);

    setChatMessages(data.chat_app_message);
  }, [data, user.id]);
  
  const groupName = () => {
    if (data && data.is_group){
      return data.name
    } else{
      if (secondPersonalChatUser?.user_app_user?.first_name){
        return secondPersonalChatUser?.user_app_user?.first_name + " " + secondPersonalChatUser?.user_app_user.last_name
      } else {
        return secondPersonalChatUser?.user_app_user?.profile_app_profile.pseudonym
      }
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.groupInfo}>
            <Pressable onPress={() => router.back()}>
              <ICONS.SvgReturn />
            </Pressable>

            <View style={styles.info}>
              <Image source={{ uri:
                ((data && !data.is_group) && secondPersonalChatUser?.user_app_user?.profile_app_profile?.avatar)
                ? getImageUrl(secondPersonalChatUser?.user_app_user?.profile_app_profile?.avatar) 
                : data && getImageUrl(data.avatar)
              }} style={styles.avatar}/>

              <View>
                <Text>
                  {
                    groupName()
                  }
                </Text>
                <Text>online</Text>
              </View>
            </View>
          </View>

          <Pressable onPress={() => {setIsOptionsModalOpen(true)}}>
              <ICONS.SvgDots />
          </Pressable>
        </View>

        <View style={styles.messageBlock}>
          <Chat messages={chatMessages} userId={user?.id} />
          <View style={styles.sendMessageBlock}>
            <Input
              style={{ flex: 1 }}
              placeholder="Повідомлення"
              value={text}
              keyboardType="ascii-capable"
              onChangeText={setText}
            />

            <Button icon={<ICONS.SvgMound />} onPress={handlePickAndSendPhoto} />

            <Button
              isDark
              icon={<ICONS.SvgPlane />}
              onPress={() => handleSend()}
            />
          </View>
        </View>
      </View>
        <Modal
          visible={isOptionsModalOpen}
          style={styles.modal}
          transparent
        >
        <View style={styles.modalContainer}>
          <GroupOptionsModal setIsOpen={setIsOptionsModalOpen} chatId={chatId}/>
        </View>
      </Modal>
    </View>
  );
}