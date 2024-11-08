import { writable } from 'svelte/store';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';
import { collection, query, where, doc, getDocs, getDoc } from 'firebase/firestore';
import { ref, get } from 'firebase/database';
import { db } from '../lib/firebase/firebase';


export const authStore = writable({
	currentUser: null,
	isLoading: true,
	data: {}
});

export const authHandlers = {
	signup: async (email, pass) => {
		await createUserWithEmailAndPassword(auth, email, pass);
		console.log('register');
	},
	login: async (email, pass) => {
		await signInWithEmailAndPassword(auth, email, pass);
		console.log('login');
	},
	logout: async () => {
		await signOut(auth);
		console.log('logout');
	}
};

export const loading = writable(true);

export const property = writable({
    id : null,
    price: 0,
    size: 0,
    room_pics: [],
});

export const properties = writable([]);

export async function getProperty(url_ID) {
	const PropertyDoc = doc(db, 'properties', url_ID);
	try {
		const PropertySnapshot = await getDoc(PropertyDoc);
		if (PropertySnapshot.exists()) {
            const prop = PropertySnapshot.data();
            prop['id'] = url_ID;
			property.set(prop);
			return;
		} else {
			console.log('error in getting property');
		}
	} catch (error) {
		console.error('Error fetching users:', error);
	}
    setTimeout(() => loading.set(false), 1000);
}

export async function getAllProperties() {
	const propertiesCollection = collection(db, 'properties');
	try {
		const querySnapshot = await getDocs(propertiesCollection);
		const prop = [];
		querySnapshot.forEach((doc) => {
			prop.push({ id: doc.id, ...doc.data() });
		});
		properties.set(prop);
	} catch (error) {
		console.error('Error fetching users:', error);
	}
    setTimeout(() => loading.set(false), 1000);
}
