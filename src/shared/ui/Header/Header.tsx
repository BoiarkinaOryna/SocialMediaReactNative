import { View, Text, TouchableOpacity, Image, Pressable } from "react-native"
import { styles } from "./header.styles"
import { ICONS } from "../../icons/"
import { router } from "expo-router";
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";


export function Header(){
    const [ currentPage, setCurrentPage ] = useState<string | null>(null)
    const route = useRoute()
    const routeName = route.name
    
    useEffect(() => {
        if (
            routeName === "chats/index" ||
            routeName === "chats/groups" ||
            routeName === "chats/contacts"
        ) {
            setCurrentPage("chats");
        } else if (
            routeName === "friends/index" ||
            routeName === "friends/requests" ||
            routeName === "friends/friends" ||
            routeName === "friends/recommendations"
        ) {
            setCurrentPage("friends");
        } else if (
            routeName === "settings/index" ||
            routeName === "settings/album"
        ) {
            setCurrentPage("settings")
        }
        else {
            setCurrentPage(null);
        }
    }, [routeName]);

    return <View style={styles.headerTop} >
        <View style={styles.imgWorld} >
            <ICONS.SvgLogo/>
            <ICONS.SvgLogoText/>
        </View>
        <View style={styles.buttonCon} >
            {currentPage !== "friends" && <TouchableOpacity style={styles.button} >
                <ICONS.SvgPlus/>
            </TouchableOpacity>}

            {currentPage !== "chats" && <TouchableOpacity style={[styles.button, currentPage === "settings" && styles.chosenIcon]}>
                <Pressable onPress={() => router.push("/settings")}>
                    <ICONS.SvgSettings/>
                </Pressable>
            </TouchableOpacity>}

            <TouchableOpacity style={styles.button} onPress={() => router.push("/auth")}>
                <ICONS.SvgBack/>
            </TouchableOpacity>
        </View>
    </View>

}

