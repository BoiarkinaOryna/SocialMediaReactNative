import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { Link } from "@shared/ui/Links/Links";
import { ICONS } from "@shared/icons";

import { styles } from "./groups.styles";

const GROUPS = [
  { id: "1", name: "New group", message: "Привіт! Як справи ?", date: "09:41", unread: true },
  { id: "2", name: "Ann Ti", message: "Привіт!", date: "25.04.2025" },
  { id: "3", name: "Ness Ty", message: "Привіт!", date: "25.04.2025" },
  { id: "4", name: "Ann Ti", message: "Привіт!", date: "25.04.2025" },
  { id: "5", name: "Ann Ti", message: "Привіт!", date: "25.04.2025" },
  { id: "6", name: "Ann Ti", message: "Привіт!", date: "25.04.2025" },
];

export function GroupsPage() {
  const [search, setSearch] = useState("");

  const filteredGroups = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return GROUPS;
    }

    return GROUPS.filter(
      ({ name, message }) =>
        name.toLowerCase().includes(query) ||
        message.toLowerCase().includes(query)
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
          link="/chats"
        />
        <Link
          text="Групові чати"
          logo
          logoComponent={<ICONS.SvgChat />}
          linePosition={true}
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
            <Text style={styles.title}>Групові чати</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchField}>
            <ICONS.SvgSearch />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Пошук"
              placeholderTextColor="#8F90A6"
              style={styles.searchInput}
            />
          </View>
        </View>

        <View style={styles.listWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          >
            {filteredGroups.map((item) => (
              <Pressable
                key={item.id}
                style={[styles.groupRow, item.unread && styles.unreadRow]}
              >
                <ICONS.SvgNP />

                <View style={styles.groupContent}>
                  <View style={styles.groupHeader}>
                    <Text style={styles.groupName}>{item.name}</Text>
                    <Text style={styles.groupDate}>{item.date}</Text>
                  </View>
                  <Text style={styles.groupMessage}>{item.message}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
