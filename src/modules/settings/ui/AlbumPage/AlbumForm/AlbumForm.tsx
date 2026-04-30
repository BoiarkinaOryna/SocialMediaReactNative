import { View } from "react-native";
import { styles } from "./album-form.styles";
import { ICONS } from "@shared/icons";
import { Button } from "@shared/ui/Button/Button";
import { Input } from "@shared/ui/Input/Input";


export function AlbumForm(){
    return <View style={styles.modal}>
        <View style={styles.container}>
            <ICONS.SvgCross/>
        </View>
        <View style={styles.inputsContainer}>
            <Input
                label="Назва альбому"
                placeholder="Настрій"
            />
            <Input
                label="Оберіть тему"
                placeholder="Природа"
                iconRight={<ICONS.SvgOpenMenu/>}
            />
            <Input
                label="Рік альбому"
                placeholder="Оберіть рік"
                iconRight={<ICONS.SvgOpenMenu/>}
            />
        </View>
        <View style={styles.container}>
            <Button text="Скасувати" textPosition="left"/>
            <Button isDark={true} text="Зберегти" textPosition="left"/>
        </View>
    </View>
}