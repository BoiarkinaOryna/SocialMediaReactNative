import { Image, ScrollView, View, Text } from 'react-native';
import { styles } from './album.style';
import { Link } from '@shared/ui/Links/Links';
import { SettingsCard } from '../SettingsCard/SettingsCard';
import { Button } from '@shared/ui/Button/Button';
import { ICONS } from '@shared/icons';

export function AlbumPage(){
    return <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.linksContainer}>
            <Link
                text = "Особиста інформація"
                link='/settings'
                disabeled={true}               
            ></Link>
            <Link 
                text = "Альбоми"
                linePosition={false}
            ></Link>
        </View>
        <SettingsCard
            title="Мої фото"
            button={<Button icon={<ICONS.SvgMound/>}text='Додати фото' textPosition='right'/>}
        >
            <View style={styles.horizontalContainer}>
                <View style={styles.avatarImageContainer}>     
                    <Image style={styles.avatarImage} source={require("@assets/LinaLi.jpg")} />
                    <View style={styles.imageButtons}>
                        <Button icon={<ICONS.SvgEyeOpen/>}/>
                        <Button icon={<ICONS.SvgTrashcan/>}/>
                    </View>
                </View>
            </View>
        </SettingsCard>

        <SettingsCard
            title="Настрій"
            button={<Button icon={<ICONS.SvgEyeOpen/>}/>}
        >
            <View style={styles.horizontalContainer}>
                <Text style={styles.topic}>Природа</Text>
                <Text style={[styles.topic, styles.lightText]}>2025 рік</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View>
                <Text style={styles.fotosText}>Фотографії</Text>
            </View>
            <View style={styles.albumImagesContainer}>
                <View style={styles.albumImageContainer}>     
                    <Image style={styles.albumImage} source={require("@assets/LinaLi.jpg")} />
                    <View style={styles.albumImageButtons}>
                        <Button icon={<ICONS.SvgEyeOpen/>}/>
                        <Button icon={<ICONS.SvgTrashcan/>}/>
                    </View>
                </View>
                <View style={styles.albumImageContainer}>     
                    <Image style={styles.albumImage} source={require("@assets/LinaLi.jpg")} />
                    <View style={styles.albumImageButtons}>
                        <Button icon={<ICONS.SvgEyeOpen/>}/>
                        <Button icon={<ICONS.SvgTrashcan/>}/>
                    </View>
                </View>
                <View style={styles.albumImageContainer}>     
                    <Image style={styles.albumImage} source={require("@assets/LinaLi.jpg")} />
                    <View style={styles.albumImageButtons}>
                        <Button icon={<ICONS.SvgEyeOpen/>}/>
                        <Button icon={<ICONS.SvgTrashcan/>}/>
                    </View>
                </View>
                <View style={styles.albumImageContainer}>     
                    <Image style={styles.albumImage} source={require("@assets/LinaLi.jpg")} />
                    <View style={styles.albumImageButtons}>
                        <Button icon={<ICONS.SvgEyeOpen/>}/>
                        <Button icon={<ICONS.SvgTrashcan/>}/>
                    </View>
                </View>
            </View>

        </SettingsCard>

        <SettingsCard title="Немає ще жодного альбому" button={<Button icon={<ICONS.SvgPlus/>}/>} />
    </ScrollView>
}