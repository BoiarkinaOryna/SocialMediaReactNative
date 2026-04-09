import { Pressable } from "react-native";
import { ButtonProps } from "./types";
import { styles } from "./button.styles";


export function Button(props: ButtonProps){
    const { icon, text, textPosition } = props
    return <Pressable style={styles.container}>
        { textPosition === "left" && text }
        { icon }
        { textPosition === "right" && text }
    </Pressable>
}