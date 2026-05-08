import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card } from '../../../../shared/ui/Card/Card';

const MOCK_RECOMMENDS = [
    { id: '1', name: 'Yehor Aung', username: '@theliiii' },
    { id: '2', name: 'Ann Ann', username: '@theliiii' }
];

export function RecommendationsPage() {
    const [recommends, setRecommends] = useState(MOCK_RECOMMENDS);

    const handleAddFriend = (id: string) => {
        setRecommends(prev => prev.filter(item => item.id !== id));
        // Логика API: добавить в друзья
    };

    const handleRemoveRecommend = (id: string) => {
        setRecommends(prev => prev.filter(item => item.id !== id));
        // Логика API: скрыть из рекомендаций
    };

    return (
        <FlatList
            data={recommends}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
                <Card 
                    type="recommendation"
                    name={item.name}
                    username={item.username}
                    onPrimaryPress={() => handleAddFriend(item.id)}
                    onSecondaryPress={() => handleRemoveRecommend(item.id)}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: { paddingBottom: 20 }
});
