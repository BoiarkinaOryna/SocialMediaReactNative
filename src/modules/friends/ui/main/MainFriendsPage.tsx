import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card } from '../../../../shared/ui/Card/Card';

const MOCK_FRIENDS = [
    { id: '1', name: 'Yehor Aung', username: '@theliiii' },
    { id: '2', name: 'Ann Ann', username: '@theliiii' }
];

export function FriendsListPage() {
    const [friends, setFriends] = useState(MOCK_FRIENDS);

    const handleOpenChat = (id: string) => {
        // Логика роутинга: переход в чат с пользователем через router.push() из expo-router
    };

    const handleRemoveFriend = (id: string) => {
        setFriends(prev => prev.filter(item => item.id !== id));
        // Логика API: удалить из друзей
    };

    return (
        <FlatList
            data={friends}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
                <Card 
                    type="friend"
                    name={item.name}
                    username={item.username}
                    onPrimaryPress={() => handleOpenChat(item.id)}
                    onSecondaryPress={() => handleRemoveFriend(item.id)}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: { paddingBottom: 20 }
});
