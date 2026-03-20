import { View, Text, TouchableOpacity, Image, Pressable } from "react-native"
import { styles } from "./header.styles"
import { ICONS } from "../../icons/"
import { router } from "expo-router";
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";


export function Header(){
    const [ hideButton, setHideButton ] = useState<string | null>(null)

    const route = useRoute()
    const routeName = route.name
    useEffect(() => {
        if (
            routeName === "chats/index" ||
            routeName === "chats/groups" ||
            routeName === "chats/contacts"
        ) {
            setHideButton("settings");
        } else if (
            routeName === "friends/index" ||
            routeName === "friends/requests" ||
            routeName === "friends/friends" ||
            routeName === "friends/recommendations"
        ) {
            setHideButton("plus");
        } else {
            setHideButton(null);
        }
    }, [routeName]);

    return <View style={styles.headerTop} >
        <View style={styles.imgWorld} >
            <ICONS.SvgLogo/>
            <ICONS.SvgLogoText/>
        </View>
        <View style={styles.buttonCon} >
            {hideButton !== "plus" && <TouchableOpacity style={styles.button} >
                <ICONS.SvgPlus/>
            </TouchableOpacity>}

            {hideButton !== "settings" && <TouchableOpacity style={styles.button}>
                <Pressable
                    onPress={() => router.push("/settings")}
                >
                    <ICONS.SvgSettings/>
                </Pressable>
            </TouchableOpacity>}

            <TouchableOpacity style={styles.button}>
                <ICONS.SvgBack/>
            </TouchableOpacity>
        </View>
    </View>

}

