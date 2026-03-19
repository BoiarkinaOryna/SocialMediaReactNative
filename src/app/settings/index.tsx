import { StyleSheet, Text, View } from 'react-native';
import { Link } from '../../shared/ui/Links/links';


export default function PersonalInfo(){
    return <View>
        <Text>
        
        </Text>
        <View>
            <Link 
                text = "Особиста інформація"
                disabeled={true}
            ></Link>
            <Link 
                text = "Альбоми"
                link = "/settings/album"                
            ></Link>
        </View>
    </View>
}