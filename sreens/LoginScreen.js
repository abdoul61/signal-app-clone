import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassowrd] = useState('');
	const signIn = () => {};

	const register = () => {};
	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<StatusBar style='light' />
			<Image
				source={{
					uri:
						'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
				}}
				style={{
					width: 200,
					height: 200,
				}}
			/>
			<View style={styles.inputContainer}>
				<Input
					value={email}
					placeholder='Email'
					autoFocus
					type='email'
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					value={password}
					onChangeText={(text) => setPassowrd(text)}
					placeholder='Password'
					secureTextEntry
					Ttype='password'
				/>
			</View>
			<Button containerStyle={styles.button} title='Login' onPress={signIn} />
			<Button
				containerStyle={styles.button}
				type='outline'
				title='Register'
				onPress={register}
            />
            <View style={{height:100}} />
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: 'white',
	},
    inputContainer: {
        width:'100%'
    },
    button: {
        width: 200,
        marginTop:10,
    }
});
