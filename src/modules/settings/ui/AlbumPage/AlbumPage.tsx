import { Text, View } from 'react-native';
import { styles } from './album.style';
import { Link } from '@shared/ui/Links/Links';

export function AlbumPage(){
    return <View style={styles.mainContainer}>
        <View style={styles.linksContainer}>
            <Link
                text = "Особиста інформація"
                link='/settings'
                disabeled={true}               
            ></Link>
            <Link 
                text = "Альбоми"
                linePosition={false}
            ></Link>
        </View>
        <Text>Альбоми</Text>
    </View>
}