import { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { skipToken } from "@reduxjs/toolkit/query";

import { useUserContext } from "@modules/auth/context/user.context";
import { useGetFriendsQuery } from "@modules/friends/api/friends.api";
import { COLORS } from "@shared/constants/colors";
import { ICONS } from "@shared/icons";
import { Link } from "@shared/ui/Links/Links";
import { filterBySearch } from "@modules/chats/utils/search";

import { styles } from "./contacts.styles";

const FALLBACK_AVATAR = require("@assets/LinaLi.jpg");

export function ContactsPage() {
  const [search, setSearch] = useState("");
  const { token } = useUserContext();
  const { data = [], isLoading } = useGetFriendsQuery(token ?? skipToken);

  
  const contacts = filterBySearch(data, search, (friend) => {
    const name = friend.pseudonym || friend.username || `User ${friend.id}`;

    return name;
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.linksContainer}>
        <Link
          text="Контакти"
          logo
          logoComponent={<ICONS.SvgContacts />}
          linePosition={true}
        />
        <Link
          text="Повідомлення"
          logo
          logoComponent={<ICONS.SvgChat />}
          link="/chats"
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
            <ICONS.SvgContacts />
            <Text style={styles.title}>Контакти</Text>
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
          {isLoading && (
            <View style={styles.contactRow}>
              <Text style={styles.contactName}>Завантаження...</Text>
            </View>
          )}

          {contacts.map((friend) => {
            const name = friend.pseudonym || friend.username || `User ${friend.id}`;
            const avatar = friend.avatar ? { uri: friend.avatar } : FALLBACK_AVATAR;

            return (
              <View key={friend.id} style={styles.contactRow}>
                <Image source={avatar} style={styles.avatar} />
                <Text style={styles.contactName}>{name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
