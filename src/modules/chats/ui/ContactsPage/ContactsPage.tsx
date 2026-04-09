import { Text, View } from 'react-native';
import { styles } from './contacts.styles';
import { Link } from '@shared/ui/Links/Links';
import { ICONS } from '@shared/icons';

export function ContactsPage(){
    return <View style={styles.mainContainer}>
        <View style={styles.linksContainer}>
            <Link
                text = "Контакти"
                logo = {true}
                logoComponent={<ICONS.SvgContacts />}
                linePosition={true}
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
                link='/chats/groups'
            ></Link>
        </View>
        <Text>Контакти</Text>
    </View>
}