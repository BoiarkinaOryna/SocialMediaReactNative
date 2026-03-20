import { Text, View } from 'react-native';
import { Link } from '../../../../shared/ui/Links/Links';
import { styles } from './main.styles';

export function MainFriendsPage(){
    return <View style={styles.mainContainer}>
        <View style={styles.linksContainer}>
            <Link
                text = "Головна"
                linePosition={false}
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
                link='/friends/friends'
                disabeled={true}
            ></Link>
        </View>
        <Text>Головна</Text>
    </View>
}