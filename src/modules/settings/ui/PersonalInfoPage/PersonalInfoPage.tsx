import { Text, View } from 'react-native';
import { Link } from '../../../../shared/ui/Links/Links';
import { styles } from './personal-info.styles';

export function PersonalInfoPage(){
    return <View style={styles.mainContainer}>
        <View style={styles.linksContainer}> 
            <Link 
                text = "Особиста інформація"
                linePosition={false}
                ></Link>
            <Link 
                text = "Альбоми"
                link = "/settings/album"                
                disabeled={true}
            ></Link>
        </View>
        <Text>Особиста інформація</Text>
    </View>
}