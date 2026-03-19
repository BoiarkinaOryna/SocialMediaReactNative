import { Pressable ,Text} from "react-native";
import { LinksProps } from "./links.types";
import { styles } from "./links.styles"
import { router } from "expo-router";

export function Link(prop: LinksProps){
    const {text, link, logo, logoComponent, disabeled, linePosition} = prop

    return <Pressable onPress={() => link && router.push(link)} style={[styles.button, linePosition ? styles.topLine : styles.bottomLine]} >
        {logo && logoComponent}
        {disabeled ? <Text style={styles.disabeled}>{text}</Text>
        : <Text>{text}</Text>}
    
   </Pressable>
}