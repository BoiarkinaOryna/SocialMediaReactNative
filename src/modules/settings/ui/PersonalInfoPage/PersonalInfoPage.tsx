import { ScrollView, Text, View } from 'react-native';
import { styles } from './personal-info.styles';
import { SettingsCard } from '../SettingsCard/SettingsCard';
import { Image } from 'expo-image';
import { Link } from '@shared/ui/Links/Links';
import { Input } from '@shared/ui/Input/Input';
import { Button } from '@shared/ui/Button/Button';
import { ICONS } from '@shared/icons';
import { Controller, useForm } from 'react-hook-form';
import { MyDataSchema } from '../../types/my-data.types';
import { myDataValidator } from '../../models/my-data.validation';
import { yupResolver } from '@hookform/resolvers/yup';


export function PersonalInfoPage(){
    const { handleSubmit, control } = useForm<MyDataSchema>({
        // resolver: yupResolver(myDataValidator),
        mode: "onChange",
    });

    return <ScrollView contentContainerStyle={styles.mainContainer}>
            <View style={styles.linksContainer}> 
                <Link 
                    text = "Особиста інформація"
                    linePosition={false}
                    ></Link>
                <Link 
                    text = "Альбоми"
                    link = "/settings/album"                
                    disabeled={true}
                ></Link>
            </View>
            <SettingsCard title='Картка профілю' button={<Button icon={<ICONS.SvgPen/>}/>}>
                <View style={styles.profileCard}>
                    <Image style={styles.avatar} source={require("@assets/LinaLi.jpg")} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.currentName}>Lina Li</Text>
                        <Text>@thelili</Text>
                    </View>
                </View>
            </SettingsCard>

            <SettingsCard title='Особиста інформація' button={<Button icon={<ICONS.SvgPen/>}/>}>
                <View style={styles.inputContainer}>
                    {/* <Controller
                        name="name"
                        control={control}
                        render={({field, fieldState}) => {
                            return <Input
                                label = "Ім'я"
                                placeholder = "Введіть ім'я"
                            />
                        }}
                    /> */}
                    <Input
                        label = "Ім'я"
                        placeholder = "Введіть ім'я"
                        />
                    <Input
                        label = "Прізвище"
                        placeholder = "Введіть прізвище"
                        />
                    <Input
                        label = "Дата народження"
                        placeholder = "15.04.2001"
                        />
                    <Input
                        label = "Електорна адреса"
                        placeholder = "you@gmail.com"
                        />
                </View>
                <View style={styles.passwordContainer}> 
                    <Text style = {styles.passwordText} >Пароль</Text>
                    <Button icon={<ICONS.SvgPen/>}/>
                </View>
                <Input
                    label = "Пароль"
                    placeholder = "*******"
                    iconRight = {<ICONS.SvgEyeClosed />}
                />
            </SettingsCard>

            <SettingsCard title="Варіанти підпису" button={<Button icon={<ICONS.SvgPen/>}/>}>
                <View style={styles.checkListItem}>
                    <ICONS.SvgTick/>
                    <Text style={styles.signatureText}>Псевдонім автора</Text>
                </View>
                <Text style={styles.pseudonym}>Lina Li</Text>
                <View style={styles.checkListItem}>
                    <ICONS.SvgTick/>
                    <Text style={styles.signatureText}>Мій електронний підпис</Text>
                </View>
                <View style={styles.signatureContainer}>

                    <Image
                        source={require("@assets/signature3.png")}
                        contentFit="contain"
                        style={styles.signature}
                    />
                </View>
            </SettingsCard>

    </ScrollView>
}