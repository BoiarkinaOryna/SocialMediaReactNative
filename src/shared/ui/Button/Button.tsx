import { Pressable, Text } from "react-native";
import { ButtonProps } from "./types";
import { styles } from "./button.styles";


export function Button(props: ButtonProps){
    const { icon, text, textPosition, style } = props
    return <Pressable style={[styles.container, style]}>
        { textPosition === "left" && <Text>{text}</Text> }
        { icon }
        { textPosition === "right" && <Text>{text}</Text> }
    </Pressable>
}