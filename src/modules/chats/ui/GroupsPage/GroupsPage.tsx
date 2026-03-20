import { Text, View } from 'react-native';
import { Link } from '../../../../shared/ui/Links/Links';
import { styles } from './groups.styles';
import { ICONS } from '../../../../shared/icons';

export function GroupsPage(){
    return <View style={styles.mainContainer}>
        <View style={styles.linksContainer}>
            <Link
                text = "Контакти"
                logo = {true}
                logoComponent={<ICONS.SvgContacts />}
                link='/chats/contacts'
            ></Link>
            <Link 
                text = "Повідомлення"
                logo = {true}
                logoComponent={<ICONS.SvgChat />}
                link='/chats'
            ></Link>
            <Link
                text = "Групові чати"
                logo = {true}
                logoComponent={<ICONS.SvgChat />}
                linePosition={true}
            ></Link>
        </View>
        <Text>Групові чати</Text>
    </View>
}