import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './card.styles';
import React from 'react';
import { router } from 'expo-router';

interface CardProps {
    id: number
    type: 'request' | 'recommendation' | 'friend';
    name: string | null;
    username: string | null;
    avatarUrl?: string | null;
    // onPrimaryPress?: () => void;
    // onSecondaryPress?: () => void;
}

export function Card({ 
    id,
    type, 
    name, 
    username, 
    avatarUrl, 
    // onPrimaryPress, 
    // onSecondaryPress 
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
                    onPress={() => {
                        if (type === "request"){
                            router.push(`/friends/${id}?type=${"acceptRequest"}`)
                        } else if (type === "recommendation"){
                            router.push(`/friends/${id}?type=${"sendRequest"}`)
                        }
                        else {
                            router.push("/chats")
                        }
                    }}
                    activeOpacity={0.8}
                >
                    <Text style={styles.primaryText}>{getPrimaryText()}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.secondaryBtn} 
                    onPress={() => {
                        if (type === "request"){
                            router.push(`/friends/${id}?type=${"acceptRequest"}`)
                        } else if (type === "recommendation"){
                            router.push(`/friends/${id}?type=${"sendRequest"}`)
                        }
                        else {
                            router.push(`/friends/${id}?type=${"deleteFriend"}`)
                        }
                    }}
                    activeOpacity={0.7}
                >
                    <Text style={styles.secondaryText}>Видалити</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
