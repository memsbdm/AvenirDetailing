import { FIREBASE_API_KEY } from '$env/static/private';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: 'avenirdetailing-988cd.firebaseapp.com',
	projectId: 'avenirdetailing-988cd',
	storageBucket: 'avenirdetailing-988cd.appspot.com',
	messagingSenderId: '582632469472',
	appId: '1:582632469472:web:406fa7944de02ef6f73185',
	measurementId: 'G-5WVK7L3LRM'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
