import { View, Text, Image, TouchableOpacity } from 'react-native';
import { cardStyles } from './card.styles';
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
        <View style={cardStyles.card}>
            <Image
                source={{ uri: avatarUrl || 'pravatar.cc' }}
                style={cardStyles.avatar}
            />
            <Text style={cardStyles.name}>{name}</Text>
            <Text style={cardStyles.username}>{username}</Text>

            <View style={cardStyles.buttons}>
                <TouchableOpacity 
                    style={cardStyles.primaryBtn} 
                    onPress={onPrimaryPress}
                    activeOpacity={0.8}
                >
                    <Text style={cardStyles.primaryText}>{getPrimaryText()}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={cardStyles.secondaryBtn} 
                    onPress={onSecondaryPress}
                    activeOpacity={0.7}
                >
                    <Text style={cardStyles.secondaryText}>Видалити</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
