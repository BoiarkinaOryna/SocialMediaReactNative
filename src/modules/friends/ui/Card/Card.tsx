import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './card.styles';
import React from 'react';

interface CardProps {
    type: 'request' | 'recommendation' | 'friend';
    name: string;
    username: string;
    avatarUrl?: string;
    onPrimaryPress?: () => void;
    onSecondaryPress?: () => void;
}

export function Card({ 
    type, 
    name, 
    username, 
    avatarUrl, 
    onPrimaryPress, 
    onSecondaryPress 
}: CardProps) {
    
    const getPrimaryText = () => {
        if (type === 'request') return 'Підтвердити';
        if (type === 'recommendation') return 'Додати';
        return 'Повідомлення';
    };

    return (
        <View style={styles.card}>
            <Image
                source={{ uri: avatarUrl || 'pravatar.cc' }}
                style={styles.avatar}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.username}>{username}</Text>

            <View style={styles.buttons}>
                <TouchableOpacity 
                    style={styles.primaryBtn} 
                    onPress={onPrimaryPress}
                    activeOpacity={0.8}
                >
                    <Text style={styles.primaryText}>{getPrimaryText()}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.secondaryBtn} 
                    onPress={onSecondaryPress}
                    activeOpacity={0.7}
                >
                    <Text style={styles.secondaryText}>Видалити</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
