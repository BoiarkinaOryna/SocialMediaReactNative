import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';
import { Header } from "../shared/ui/Header/Header";


export default function Page() {
	return <Redirect href={"/main"} />;
}