import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from '../../Card/Card';
import { COLORS } from '@shared/constants/colors';
import { SettingsCard } from '@shared/ui/SettingsCard/SettingsCard';


interface OverviewProps {
    activeTab: 'main' | 'requests' | 'recommendations' | 'friends'
}

export function OverviewPage(props: OverviewProps) {
    const { activeTab } = props
    return <View>
        <ScrollView contentContainerStyle={overviewStyles.container} showsVerticalScrollIndicator={false}>
            { (activeTab === "main" || activeTab === "requests") && (
                <SettingsCard title='Запити' button={<Text>Дивитись всі</Text>}>
                    <Card
                        type="request"
                        name="Yehor Aung"
                        username="@thelili"
                    />
                    <Card
                        type="request"
                        name="Yehor Aung"
                        username="@thelili"
                    />
                </SettingsCard>
            )}
            { (activeTab === "main" || activeTab === "recommendations") && (
                <SettingsCard title='Рекомендації' button={<Text>Дивитись всі</Text>}>
                    <Card
                        type="recommendation"
                        name="Yehor Aung"
                        username="@thelili"
                    />
                </SettingsCard>
            )}
            { (activeTab === "main" || activeTab === "friends") && (
                <SettingsCard title='Всі друзі' button={<Text>Дивитись всі</Text>}>
                    <Card
                        type="friend"
                        name="Yehor Aung"
                        username="@thelili"
                    />
                </SettingsCard>
            )}
            
            <View style={overviewStyles.bottomSpacing} />
        </ScrollView>
    </View>
}


const overviewStyles = StyleSheet.create({
    container: {
        gap: 8,
        paddingBottom: 300
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 12,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.black,
    },
    seeAllText: {
        fontSize: 13,
        fontWeight: '500',
        color: COLORS.blue50,
    },
    bottomSpacing: {
        height: 30,
    }
});
