import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './sreens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './sreens/RegisterScreen';

const Stack = createStackNavigator();
const globalscreenOptions = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTitleStyle: { color: 'white' },
  headerTintColor:'white',
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={globalscreenOptions}>
				<Stack.Screen
					options={{
						title: 'Lets sign up',
					}}
					name='Login'
					component={LoginScreen}
        />
        <Stack.Screen options={{
            title:'Register'
        }}
          name='Register'
          component={RegisterScreen}
          />
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
