import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { db } from '../firebase';

const AddchatScreen = ({ navigation }) => {
	const [input, setInput] = useState('');
	const createChat = async () => {
		await db
			.collection('chats')
			.add({
				chatName: input,
			})
			.then(() => {
				navigation.goBack();
			})
			.catch((error) => alert(error.message));
	};

	// This hook checj of any changes tha occur in the navigation then renders the new update
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Add New Chat',
			headerBackTitle: 'chat',
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
			<Input
				placeholder='Enter chat name'
				value={input}
				onChangeText={(text) => setInput(text)}
				onSubmitEditing={createChat}
				leftIcon={
					<Icon name='wechat' type='antidesign' size={24} color='black' />
				}
			/>
			<Button onPress={createChat} title='Create new chat' />
		</View>
	);
};

export default AddchatScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height:'100%'
    },
});
