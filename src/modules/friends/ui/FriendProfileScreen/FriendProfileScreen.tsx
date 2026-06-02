import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { styles } from './profile.styles';
import { ICONS } from '@shared/icons';
import { router } from 'expo-router';
import { useAcceptRequestMutation, useDeclineRequestMutation, useSendRequestMutation } from '@modules/friends/api/friends.api';
import { useUserContext } from '@modules/auth/context/user.context';
import { FriendScreenProps } from './FriendProfileScreen.types';

export function FriendProfileScreen(props: FriendScreenProps) {
    const {id, type} = props
    console.log("friend id in profile screen:", id, type)
    const {token} = useUserContext()

    const [sendRequest, {error, isLoading}] = useSendRequestMutation()
    const [accept, {isLoading: isAcceptLoading, error: acceptError}] = useAcceptRequestMutation()
    const [decline, {isLoading: isDeclineLoading, error: declineError}] = useDeclineRequestMutation()

    function goBack(){
        if (router.canGoBack()){
            router.back()
        } else {
            router.push("/friends")
        }
    }

    return (
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={true}
        >
            <View style={styles.profileSection}>
                <View style={{width: "90%"}}>
                    <Pressable onPress={() => {router.canGoBack() && router.back()}}>
                        <ICONS.SvgReturn/>
                    </Pressable>
                </View>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                        style={styles.avatar}
                    />
                    <View style={styles.avatarBadge} />
                </View>

                <Text style={styles.name}>Yehor Aung ({id})</Text>
                <Text style={styles.username}>@thelili</Text>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>3</Text>
                        <Text style={styles.statLabel}>Дописи</Text>
                    </View>
                    
                    <View style={styles.statDivider} />

                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>12.1K</Text>
                        <Text style={styles.statLabel}>Читачі</Text>
                    </View>
                    
                    <View style={styles.statDivider} />

                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>222</Text>
                        <Text style={styles.statLabel}>Друзі</Text>
                    </View>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.primaryBtn} onPress={
                        () => {
                            if (type === "sendRequest"){
                                console.log("sending request")
                                token && sendRequest({token, id}).unwrap()
                                goBack()
                            } else {
                                token && accept({token, id}).unwrap()
                                goBack()
                            }
                        }
                    }>
                        <Text style={styles.primaryText}>Підтвердити</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryBtn} onPress={
                        () => {
                            if (type === "sendRequest"){
                                goBack()
                            } else {
                                token && decline({token, id}).unwrap()
                                goBack()
                            }
                        }
                    }>
                        <Text style={styles.secondaryText}>Видалити</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.blockContainer}>
                <View style={styles.sectionHeader}>
                    <View style={styles.albumTitleBlock}>
                        <ICONS.SvgMound/>
                        <Text style={styles.sectionTitle}>
                            Альбоми
                        </Text>
                    </View>
                </View>

                <View style={styles.albumMeta}>
                    <Text style={styles.albumTitle}>Настрій</Text>
                    <View style={styles.albumSubtitleContainer}>
                        <Text style={styles.albumSubtitle}>Природа</Text>
                        <Text style={styles.albumYear}>2025 рік</Text>
                    </View>
                </View>

                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee' }}
                    style={styles.albumImage}
                    resizeMode="cover"
                />
            </View>
        </ScrollView>
    );
}
