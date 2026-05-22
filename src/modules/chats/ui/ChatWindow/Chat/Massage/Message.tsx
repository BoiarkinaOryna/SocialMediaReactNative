import { View, Text } from "react-native"
import { styles } from "./message.styles"
import { ChatMessageProps } from "./message.types"



export function ChatMessage(props: ChatMessageProps){
    const {data, isMy} = props
    return <View style={isMy ? styles.myMessage : styles.message}>
        <Text style={styles.text}>{data.text}</Text>
        <Text style={styles.time}>20:10</Text>
    </View>
}