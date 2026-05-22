import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './card.styles';
import React from 'react';
import { useAcceptRequestMutation, useDeclineRequestMutation, useSendRequestMutation } from '@modules/friends/api/friends.api';
import { useUserContext } from '@modules/auth/context/user.context';
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
    const {token} = useUserContext()
    const getPrimaryText = () => {
        if (type === 'request') return 'Підтвердити';
        if (type === 'recommendation') return 'Додати';
        return 'Повідомлення';
    };

    const [sendRequest, {isLoading: isSendLoading, error: sendError}] = useSendRequestMutation()
    const [accept, {isLoading: isAcceptLoading, error: acceptError}] = useAcceptRequestMutation()
    const [decline, {isLoading: isDeclineLoading, error: declineError}] = useDeclineRequestMutation()

    async function sendFriendRequest(id: number){
        token &&
        await sendRequest({token, id}).unwrap()
    }
    async function acceptFriendRequest(id: number){
        console.log("accept id", id)
        token &&
        await accept({token, id}).unwrap()
    }
    async function declineFriendRequest(id: number){
        token &&
        await decline({token, id}).unwrap()
    }

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
                            // acceptFriendRequest(id)
                            router.push("/friends/friends_profile")
                        } else if (type === "recommendation"){
                            router.push("/friends/friends_profile")
                            // sendFriendRequest(id)
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
                            declineFriendRequest(id)
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
