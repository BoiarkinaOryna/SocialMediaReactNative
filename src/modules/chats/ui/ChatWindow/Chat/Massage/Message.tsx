import { View, Text } from "react-native"
import { Image } from "expo-image"
import { styles } from "./message.styles"
import { ChatMessageProps } from "./message.types"

function getMessageImageUri(image: string) {
    if (image.startsWith("data:") || image.startsWith("http")) {
        return image;
    }

    return `data:image/jpeg;base64,${image}`;
}

export function ChatMessage(props: ChatMessageProps){
    const {data, isMy} = props
    let time = new Date(data.created_at).toLocaleTimeString("uk-UA")
    time = time.split(":")[0] + ":" + time.split(":")[1]
    const images = data.chat_app_messageimage ?? [];

    return <View style={isMy ? styles.myMessage : styles.message}>
        <View style={styles.content}>
            {!!data.text && <Text style={styles.text}>{data.text}</Text>}

            {images.map((image) => (
                <Image
                    key={image.id}
                    source={{ uri: getMessageImageUri(image.image) }}
                    style={styles.image}
                    contentFit="cover"
                />
            ))}
        </View>

        <Text style={styles.time}>{time}</Text>
    </View>
}
