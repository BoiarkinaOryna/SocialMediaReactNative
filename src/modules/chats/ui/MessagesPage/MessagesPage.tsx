import { Text, View } from 'react-native';
import { styles } from './messages.styles';
import { Link } from '@shared/ui/Links/Links';
import { ICONS } from '@shared/icons';

export function MessagesPage(){
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
                linePosition={true}
            ></Link>
            <Link
                text = "Групові чати"
                logo = {true}
                logoComponent={<ICONS.SvgChat />}
                link='/chats/groups'
            ></Link>
        </View>
        <Text>Повідомлення</Text>
    </View>
}