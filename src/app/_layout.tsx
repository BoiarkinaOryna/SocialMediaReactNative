import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import HomeIcon from '../shared/icons/home';
import { router, Stack } from  "expo-router"
import { Header } from '../shared/ui/Header/Header';
import { TabBar } from '../shared/ui/TabBar/TabBar';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { baseApi } from '@shared/api/api';
import { UserContextProvider, useUserContext } from '@modules/auth/context/user.context';
import { useEffect } from 'react';

export default function App() {
  return (
    <ApiProvider api={baseApi}>
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <UserContextProvider>
                    <StatusBar style="auto" />
                    <AppStack/>
                </UserContextProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    </ApiProvider>
  );
}

function AppStack(){
    const { token } = useUserContext()
    console.log("main layout is rendered")
    // useEffect(() => {
        
    // }, [token])
    
    if (!token) {
        return <Stack 
        screenOptions={{
            header: () => <Header />,
            animation: "none"
        }}
        />
    } 
    return <Stack
        screenOptions={{
            header: () => <View><Header /><TabBar/></View>,
            animation: 'none',
        }}
    />
}