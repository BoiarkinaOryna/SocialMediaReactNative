import { Pressable, View, Text } from "react-native";
import { ICONS } from "../../icons";
import { styles } from "./tab-bar.styles";
import { router } from "expo-router";

export function TabBar(){
    return <View style={styles.container}>
        <View style={styles.headerBottom} >
            <View style={styles.linksContainer} >
                <Pressable onPress={() => router.push("/(main)/main")} style={[styles.links, styles.selected]} >
                    <ICONS.SvgHome />
                    <Text style = {styles.h1} >Головна</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/(publications)/publications")} style={styles.links} >
                    <ICONS.SvgMound/>
                    <Text numberOfLines={1}  style = {styles.h1}>Мої Публікіції</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/friends/friends")} style={styles.links} >
                    <ICONS.SvgPeople/>
                    <Text style = {styles.h1}>Друзі</Text>

                </Pressable>
                <Pressable onPress={() => router.push("/chats")} style={styles.links} >
                    <ICONS.SvgChat/>
                    <Text style = {styles.h1}>Чати</Text>

                </Pressable>
            </View>

        </View>
    </View>
}