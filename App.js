import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './sreens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './sreens/RegisterScreen';
import HomeScreen from './sreens/HomeScreen';
import AddchatScreen from './sreens/AddchatScreen';

const Stack = createStackNavigator();
const globalscreenOptions = {
	headerStyle: { backgroundColor: '#2C6BED' },
	headerTitleStyle: { color: 'white' },
	headerTintColor: 'white',
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={globalscreenOptions}>
				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Register' component={RegisterScreen} />
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Addchat' component={AddchatScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
