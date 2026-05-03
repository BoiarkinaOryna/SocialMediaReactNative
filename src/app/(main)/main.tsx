import { useUserContext } from '@modules/auth/context/user.context';
import { useGetUserData } from '@modules/auth/hooks/useGetUserData';
import { FirstVisitModal } from '@modules/auth/ui/FirstVisitModal/FirstVisistModal';
import { View } from 'react-native';


export default function Home(){
    const { token, user, setUser } = useUserContext()
    useGetUserData()
    // console.log("user in main", user)

    return <View>
        { !user?.username && <FirstVisitModal/> }
    </View>
}