import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDB_TzPUCPmdBWfEKK8ujffN80rV_nBJMw',
	authDomain: 'signal-clone-f83b3.firebaseapp.com',
	projectId: 'signal-clone-f83b3',
	storageBucket: 'signal-clone-f83b3.appspot.com',
	messagingSenderId: '570448215958',
	appId: '1:570448215958:web:e86a345c3820c4151527b7',
};

let app;
if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
