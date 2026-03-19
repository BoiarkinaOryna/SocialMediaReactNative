
import { StyleSheet, Text, View } from 'react-native';
import { Link } from '../../shared/ui/Links/links';


export default function Albums(){
    return <View>
        <Text>
            ALBUMS
        </Text>
        <View>
            <Link 
                text = "Особиста інформація"
                link='/settings'
            ></Link>
            <Link 
                text = "Альбоми"
                disabeled={true}               
            ></Link>
        </View>
    </View>
}