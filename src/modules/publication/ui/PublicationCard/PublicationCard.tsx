import { Text, View } from "react-native";
import { Image } from "expo-image";
// import { PublicationItem } from "@modules/publication/context/publications.context";
import { styles } from "./publication-card.styles";
import { Post } from "@modules/publication/types/publication.types";
import { ICONS } from "@shared/icons";

interface PublicationCardProps {
  publication: Post;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.header}>
          <View style={styles.authorRow}>
            <View style={styles.avatarWrap}>
              <Image
                source={require("@assets/LinaLi.jpg")}
                style={styles.avatar}
              />
            </View>

            <Text style={styles.authorName}>Lina Li</Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.body}>
        <Text style={styles.title}>{publication.title}</Text>
        <Text style={styles.content}>{publication.text}</Text>
        {!!publication.url && (
          <Text style={styles.link}>{publication.url}</Text>
        )}
        <View style={styles.activityView}>
          <View style={styles.activity}>
            <ICONS.SvgHeart/>
            <Text>0 вподобань</Text>
          </View>
          <View style={styles.activity}>
            <ICONS.SvgThumbUp/>
            <Text>0 Лайків</Text>
          </View>
          <View style={styles.activity}>
            <ICONS.SvgEyeOpen/>
            <Text>0 Переглядів</Text>
          </View>
        </View>
      </View>

    </View>
  );
}
