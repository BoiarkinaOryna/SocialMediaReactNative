import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './friends.styles';
import { RequestsPage } from '../requests/RequestsPage';
import { RecommendationsPage } from '../recommendations/RecommendationsPage';
import { FriendsListPage } from '../main/MainFriendsPage';

type TabType = 'requests' | 'recommendations' | 'friends';

export function FriendsPage() {
    const [activeTab, setActiveTab] = useState<TabType>('requests');

    return (
        <View style={styles.mainContainer}>
            <View style={styles.tabs}>
                <Tab text="Запити" active={activeTab === 'requests'} onPress={() => setActiveTab('requests')} />
                <Tab text="Рекомендації" active={activeTab === 'recommendations'} onPress={() => setActiveTab('recommendations')} />
                <Tab text="Всі друзі" active={activeTab === 'friends'} onPress={() => setActiveTab('friends')} />
            </View>

            {activeTab === 'requests' && <RequestsPage />}
            {activeTab === 'recommendations' && <RecommendationsPage />}
            {activeTab === 'friends' && <FriendsListPage />}
        </View>
    );
}

function Tab({ text, active, onPress }: any) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.tabText, active && styles.activeTab]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}