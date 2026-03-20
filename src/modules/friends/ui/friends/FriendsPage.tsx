import { Text, View } from 'react-native';
import { Link } from '../../../../shared/ui/Links/Links';
import { styles } from './friends.styles';

export function FriendsPage(){
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
                link='/friends/recommendations'
                disabeled={true}
            ></Link>
            <Link 
                text = "Всі друзі"
                linePosition={false}
            ></Link>
        </View>
        <Text>Всі друзі</Text>
    </View>
}