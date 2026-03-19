import { View, Text, TouchableOpacity, Image, Pressable } from "react-native"
import { styles } from "./header.styles"
import { ICONS } from "../../icons/"
import { router } from "expo-router";



export function Header(){
    return <View style={styles.headerTop} >
        <View style={styles.imgWorld} >
            <ICONS.SvgLogo/>
            <ICONS.SvgLogoText/>

        </View>
        <View style={styles.buttonCon} >
            <TouchableOpacity style={styles.button} >
                <ICONS.SvgPlus/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Pressable
                    // style = {styles.}
                    onPress={() => router.push("/settings")}
                >
                    <ICONS.SvgSettings/>
                </Pressable>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <ICONS.SvgBack/>
            </TouchableOpacity>
        </View>
    </View>

}

