import { Text, View } from "react-native";
import { Image } from "expo-image";
import { PublicationItem } from "@modules/publication/context/publications.context";
import { styles } from "./publication-card.styles";

interface PublicationCardProps {
  publication: PublicationItem;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.header}>
          <View style={styles.authorRow}>
            <View style={styles.avatarWrap} />
            <Text style={styles.authorName}>Lina Li</Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.body}>
        <Text style={styles.title}>{publication.title}</Text>
        <Text style={styles.content}>{publication.content}</Text>
        {!!publication.link && <Text style={styles.link}>{publication.link}</Text>}
        {!!publication.images?.length && (
          <View style={styles.imagesGrid}>
            {publication.images.map((uri) => (
              <Image key={uri} source={uri} style={styles.postImage} />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
