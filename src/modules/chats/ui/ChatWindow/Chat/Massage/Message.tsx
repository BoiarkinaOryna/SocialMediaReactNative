import { View, Text } from "react-native"
import { styles } from "./message.styles"
import { ChatMessageProps } from "./message.types"



export function ChatMessage(props: ChatMessageProps){
    const {data, isMy} = props
    const time = data.created_at.toLocaleTimeString("uk-UA")
    return <View style={isMy ? styles.myMessage : styles.message}>
        <Text style={styles.text}>{data.text}</Text>
        <Text style={styles.time}>{time}</Text>
    </View>
}