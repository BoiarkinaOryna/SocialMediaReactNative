import { ScrollView, View } from "react-native";
import { usePublications } from "@modules/publication/context/publications.context";
import { PublicationCard } from "@modules/publication/ui/PublicationCard/PublicationCard";
import { styles } from "./my-publications.styles";

export function MyPublicationsPage() {
  const { publications } = usePublications();

  if (!publications.length) {
    return <View />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {publications.map((publication) => (
        <PublicationCard key={publication.id} publication={publication} />
      ))}
    </ScrollView>
  );
}
