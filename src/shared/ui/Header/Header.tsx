import { View, Text, TouchableOpacity,Image } from "react-native"
import { styles } from "./header.styles"
import { ICONS } from "../../icons/"


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
                <ICONS.SvgSettings/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <ICONS.SvgBack/>
            </TouchableOpacity>
        </View>
    </View>

}

