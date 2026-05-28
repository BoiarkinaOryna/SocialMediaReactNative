import { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./messages.styles";
import { ICONS } from "@shared/icons";
import { COLORS } from "@shared/constants/colors";
import { Link } from "@shared/ui/Links/Links";
import { router } from "expo-router";

const MESSAGES = [
  {
    id: "1",
    name: "Mona Lisa",
    message: "Привіт! Як справи ?",
    date: "09:14",
    avatar: require("@assets/LinaLi.jpg"),
    online: true,
    unread: true,
  },
  {
    id: "2",
    name: "Ann Ti",
    message: "Привіт!",
    date: "25.04.2025",
    avatar: require("@assets/LinaLi.jpg"),
    online: false,
    unread: false,
  },
  {
    id: "3",
    name: "Ann Ti",
    message: "Привіт!",
    date: "25.04.2025",
    avatar: require("@assets/LinaLi.jpg"),
    online: false,
    unread: false,
  },
  {
    id: "4",
    name: "Ann Ti",
    message: "Привіт!",
    date: "25.04.2025",
    avatar: require("@assets/LinaLi.jpg"),
    online: false,
    unread: false,
  },
  {
    id: "5",
    name: "Ann Ti",
    message: "Привіт!",
    date: "25.04.2025",
    avatar: require("@assets/LinaLi.jpg"),
    online: false,
    unread: false,
  },
];

export function MessagesPage() {
  const [search, setSearch] = useState("");

  const filteredMessages = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return MESSAGES;
    }

    return MESSAGES.filter(
      (item) =>
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.message.toLowerCase().includes(normalizedSearch)
    );
  }, [search]);

  return (
    <View style={styles.mainContainer}>
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

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <View style={styles.titleIconWrap}>
              <ICONS.SvgChat />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </View>
            <Text style={styles.title}>Повідомлення</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchField}>
            <ICONS.SvgSearch />
            <TextInput
              placeholder="Пошук"
              placeholderTextColor={COLORS.blue50}
              value={search}
              onChangeText={setSearch}
              style={styles.searchInput}
            />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator
        >
          {filteredMessages.map((item) => (
            <Pressable onPress={() => {router.push("/chats/chat")}}>
              <View
                key={item.id}
                style={[styles.messageRow, item.unread && styles.unreadRow]}
              >
                <View style={styles.avatarWrap}>
                  <Image source={item.avatar} style={styles.avatar} />
                  <View
                    style={[
                      styles.statusDot,
                      item.online ? styles.onlineDot : styles.offlineDot,
                    ]}
                  />
                </View>

                <View style={styles.messageContent}>
                  <View style={styles.messageHeader}>
                    <Text style={styles.messageName}>{item.name}</Text>
                    <Text style={styles.messageDate}>{item.date}</Text>
                  </View>
                  <Text style={styles.messageText}>{item.message}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
