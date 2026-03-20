import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import HomeIcon from '../shared/icons/home';
import { Stack } from  "expo-router"
import { Header } from '../shared/ui/Header/Header';
import { TabBar } from '../shared/ui/TabBar/TabBar';

export default function App() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style="auto" />
            <Stack
                screenOptions={{
                    header: () => <View><Header /><TabBar/></View>,
                    animation: 'none',
                }}
            >
            </Stack>
        </SafeAreaView>
    </SafeAreaProvider>
  
  );
}