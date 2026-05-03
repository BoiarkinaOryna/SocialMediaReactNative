

import { Image, ScrollView, View, Text } from "react-native";
import { styles } from "./album.style";
import { Link } from "@shared/ui/Links/Links";
import { SettingsCard } from "../SettingsCard/SettingsCard";
import { Button } from "@shared/ui/Button/Button";
import { ICONS } from "@shared/icons";


import * as ImagePicker from "expo-image-picker";
import { useAddImageMutation, useGetAlbumsQuery } from "@modules/settings/api/api";

export function AlbumPage({ token }: { token: string }) {
    const { data: albums, isLoading } = useGetAlbumsQuery(token);
    const [addImage] = useAddImageMutation();

    const pickAndUpload = async (albumId: number) => {
        const result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            quality: 0.7,
        });

        if (result.canceled) return;

        const asset = result.assets[0];

        if (!asset.base64) return;

        await addImage({
            base64: asset.base64,
            albumId,
            token,
        });
    };

    if (isLoading) {
        return (
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <Text>Завантаження...</Text>
            </ScrollView>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            {/* LINKS */}
            <View style={styles.linksContainer}>
                <Link
                    text="Особиста інформація"
                    link="/settings"
                    disabeled={true}
                />
                <Link text="Альбоми" linePosition={false} />
            </View>

            {/* ALBUMS */}
            {albums?.length ? (
                albums.map((album: any) => (
                    <SettingsCard
                        key={album.id}
                        title={album.title}
                        button={
                            <Button
                                icon={<ICONS.SvgMound />}
                                text="Додати фото"
                                textPosition="right"
                                onPress={() => pickAndUpload(album.id)}
                            />
                        }
                    >
                        <View style={styles.albumImagesContainer}>
                            {album.images?.length ? (
                                album.images.map((img: any) => (
                                    <View
                                        key={img.id}
                                        style={styles.albumImageContainer}
                                    >
                                        <Image
                                            style={styles.albumImage}
                                            source={{ uri: img.url }}
                                        />

                                        <View style={styles.albumImageButtons}>
                                            <Button icon={<ICONS.SvgEyeOpen />} />
                                            <Button icon={<ICONS.SvgTrashcan />} />
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <Text>Немає фотографій</Text>
                            )}
                        </View>
                    </SettingsCard>
                ))
            ) : (
                <SettingsCard title="Немає ще жодного альбому" button={<Button icon={<ICONS.SvgPlus/>}/>}/>
            )}
        </ScrollView>
    );
}