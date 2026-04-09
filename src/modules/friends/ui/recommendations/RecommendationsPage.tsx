import { Text, View } from 'react-native';
import { styles } from './recommendations.styles';
import { Link } from '@shared/ui/Links/Links';

export function FriendsRecommendationsPage(){
    return <View style={styles.mainContainer}>
        <View style={styles.linksContainer}>
            <Link
                text = "Головна"
                link='/friends'
                disabeled={true}
            ></Link>
            <Link
                text = "Запити"
                link='/friends/requests'
                disabeled={true}
            ></Link><Link
                text = "Рекомендації"
                linePosition={false}
            ></Link>
            <Link 
                text = "Всі друзі"
                link='/friends/friends'
                disabeled={true}   
            ></Link>
        </View>
        <Text>Рекомендації</Text>
    </View>
}