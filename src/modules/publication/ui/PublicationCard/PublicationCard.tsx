import { Text, View } from "react-native";
import { Image } from "expo-image";

import { styles } from "./publication-card.styles";

import { Post } from "@modules/publication/types/publication.types";

import { ICONS } from "@shared/icons";

interface PublicationCardProps {
  publication: Post;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  console.log("POST", JSON.stringify(publication, null, 2));

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

        <Text style={styles.content}>{publication.content}</Text>

        {publication.images?.[0] && (
          <Image
            source={{
              uri: `http://192.168.0.124:3000/uploads/${publication.images[0].original_image}`,
            }}
            style={{
              width: "100%",
              height: 240,
              borderRadius: 16,
              marginTop: 12,
            }}
            contentFit="cover"
          />
        )}

        {!!publication.links?.length && (
          <Text style={styles.link}>
            {publication.links.map((link: any) => link.url).join(", ")}
          </Text>
        )}

        <View style={styles.activityView}>
          <View style={styles.activity}>
            <ICONS.SvgHeart />
            <Text>0 вподобань</Text>
          </View>

          <View style={styles.activity}>
            <ICONS.SvgThumbUp />
            <Text>0 лайків</Text>
          </View>

          <View style={styles.activity}>
            <ICONS.SvgEyeOpen />
            <Text>0 переглядів</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
