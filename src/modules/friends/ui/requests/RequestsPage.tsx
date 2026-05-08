import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card } from '../../../../shared/ui/Card/Card';

const MOCK_REQUESTS = [
    { id: '1', name: 'Yehor Aung', username: '@theliiii' },
    { id: '2', name: 'Ann Ann', username: '@theliiii' }
];

export function RequestsPage() {
    const [requests, setRequests] = useState(MOCK_REQUESTS);

    const handleAccept = (id: string) => {
        setRequests(prev => prev.filter(item => item.id !== id));
        // Тут будет вызов функции API для подтверждения
    };

    const handleReject = (id: string) => {
        setRequests(prev => prev.filter(item => item.id !== id));
        // Тут будет вызов функции API для удаления запроса
    };

    return (
        <FlatList
            data={requests}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
                <Card 
                    type="request"
                    name={item.name}
                    username={item.username}
                    onPrimaryPress={() => handleAccept(item.id)}
                    onSecondaryPress={() => handleReject(item.id)}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: { paddingBottom: 20 }
});
