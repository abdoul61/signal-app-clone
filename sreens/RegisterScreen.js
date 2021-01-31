import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [photourl, setPhotourl] = useState('');
useLayoutEffect(() => {
    navigation.setOptions({
        headerBackTitle:'Back to Login'
    })
    return () => {
    };
}, [navigation])

	const register = () => {};
	return (
		<KeyboardAvoidingView behavior={'padding'} style={styles.container}>
			<StatusBar style={'light'} />
			<Text h3 style={{ marginBottom: 50 }}>
				Create a Signal account
			</Text>
			<View style={styles.InputContainer}>
				<Input
					autoFocus
					value={name}
					placeholder='name'
					onChangeText={(text) => setName(text)}
				/>
				<Input
					value={email}
					placeholder='Email'
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					secureTextEntry
					value={password}
					placeholder='password'
					onChangeText={(text) => setPassword(text)}
				/>
				<Input
					value={photourl}
					placeholder='Profile picture url (Optional)'
					onChangeText={(text) => setPhotourl(text)}
					onSubmitEditing={register}
				/>
				
            </View>
            <Button
					raised
					onPress={register}
					title='Register'
					containerStyle={styles.button}
				/>
			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		padding: 10,
    },
    button: {
        width: 200,
        marginTop:10
    },
    InputContainer: {
        width:300
    }
});
