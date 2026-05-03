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
import { useUpdateProfileMutation } from '@modules/settings/api/api';
import { useUserContext } from '@modules/auth/context/user.context';
import { useGetUserData } from '@modules/auth/hooks/useGetUserData';
import { useEffect, useState } from 'react';


export function PersonalInfoPage(){
    const { handleSubmit, control } = useForm<MyDataSchema>({
        resolver: yupResolver(myDataValidator),
        mode: "onChange",
    });

    const [ update, {error, isLoading} ] = useUpdateProfileMutation()

    const { token, user } = useUserContext()
    console.log("user in personal info", user)

    const { refetchUser } = useGetUserData();

    
    async function sendForm(data: MyDataSchema){
        console.log("button pressed")
        try{
            token && await update({body: data, token})
            refetchUser(true);
        } catch(error){
            console.log("error:", error)
        }
    }

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
                        <Text style={styles.currentName}>{user?.firstName} {user?.lastName}</Text>
                        <Text>{user?.username}</Text>
                    </View>
                </View>
            </SettingsCard>

            <SettingsCard title='Особиста інформація' button={<Button onPress={handleSubmit(
                (data) => {
                    console.log("VALID");
                    sendForm(data);
                },
                (errors) => {
                    console.log("INVALID", errors);
                }
            )} icon={<ICONS.SvgPen/>}/>}>
                <View style={styles.inputContainer}>
                    <Controller
                        name="name"
                        control={control}
                        render={({field, fieldState}) => {
                            return <Input
                                label = "Ім'я"
                                placeholder = {user?.firstName ? String(user?.firstName) : "Введіть ім'я"}
                                onChangeText={field.onChange}
                                value={field.value}
                                error={fieldState.error?.message}
                            />
                        }}
                    />
                    <Controller
                        name="surname"
                        control={control}
                        render={({field, fieldState}) => {
                            return <Input
                                label = "Прізвище"
                                placeholder = {user?.lastName ? String(user?.lastName) : "Введіть прізвище"}
                                onChangeText={field.onChange}
                                value={field.value}
                                error={fieldState.error?.message}
        />
                        }}
                    />
                    <Controller
                        name="birthDate"
                        control={control}
                        render={({field, fieldState}) => {
                            return <Input
                                label = "Дата народження"
                                placeholder = {user?.birthDate ? String(user?.birthDate) : "15.04.2001"}
                                onChangeText={field.onChange}
                                value={field.value && String(field.value)}
                                error={fieldState.error?.message}
                            />
                        }}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({field, fieldState}) => {
                            return <Input
                                label = "Електорна адреса"
                                placeholder = {user?.email ? String(user?.email) : "you@gmail.com"}
                                inputMode="email"
								autoCapitalize="none"
								autoComplete="off"
								autoCorrect={false}
								// inputContainerStyle={styles.inputContainer}
								// style={styles.input}
								onChangeText={field.onChange}
								value={field.value}
								error={fieldState.error?.message}
                            />
                        }}
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