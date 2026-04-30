import { useUserContext } from '@modules/auth/context/user.context';
import { FirstVisitModal } from '@modules/auth/ui/FirstVisitModal/FirstVisistModal';
import { View } from 'react-native';


export default function Home(){
    const { user } = useUserContext()
    console.log("user in main", user)

    return <View>
        { !user?.username && <FirstVisitModal/> }
    </View>
}