import { View, Text } from "react-native"
import { styles } from "./message.styles"
import { ChatMessageProps } from "./message.types"


export function ChatMessage(props: ChatMessageProps){
    const {data, isMy} = props
    let time = new Date(data.created_at).toLocaleTimeString("uk-UA")
    time = time.split(":")[0] + ":" + time.split(":")[1]

    return <View style={isMy ? styles.myMessage : styles.message}>
        <Text style={styles.text}>{data.text}</Text>
        <Text style={styles.time}>{time}</Text>
    </View>
}