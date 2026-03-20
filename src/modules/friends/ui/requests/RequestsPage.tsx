import { Text, View } from 'react-native';
import { Link } from '../../../../shared/ui/Links/Links';
import { styles } from './requests.styles';

export function FriendsRequestsPage(){
    return <View style={styles.mainContainer}>
        <View style={styles.linksContainer}>
            <Link
                text = "Головна"
                link='/friends'
                disabeled={true}
            ></Link>
            <Link
                text = "Запити"
                linePosition={false}
                ></Link><Link
                text = "Рекомендації"
                link='/friends/recommendations'
                disabeled={true}   
            ></Link>
            <Link 
                text = "Всі друзі"
                link='/friends/friends'
                disabeled={true}
            ></Link>
        </View>
        <Text>Запити</Text>
    </View>
}