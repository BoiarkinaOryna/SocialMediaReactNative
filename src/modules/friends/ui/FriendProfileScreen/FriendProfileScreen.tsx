import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { styles } from './profile.styles';
import { ICONS } from '@shared/icons';
import { router } from 'expo-router';

export function FriendProfileScreen() {
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

                <Text style={styles.name}>Yehor Aung</Text>
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
                    <TouchableOpacity style={styles.primaryBtn}>
                        <Text style={styles.primaryText}>Підтвердити</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryBtn}>
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
