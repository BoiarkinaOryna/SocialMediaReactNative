import { Pressable ,Text} from "react-native";
import { LinksProps } from "./links.types";
import { styles } from "./links.styles"
import { router } from "expo-router";

export function Link(prop: LinksProps){
    const {text, link, logo, logoComponent, disabeled, linePosition} = prop

    return <Pressable
        onPress={() => link && router.push(link)}
        style={[styles.button, logo && styles.hasLogo, linePosition ? styles.topLine
            : linePosition == false && styles.bottomLine
        ]}
    >
        {logo && logoComponent}
        {disabeled ? <Text style={[styles.disabeled, styles.text]}>{text}</Text>
        : <Text style={styles.text}>{text}</Text>}
    
   </Pressable>
}