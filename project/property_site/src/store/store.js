import { writable } from 'svelte/store';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';
import { collection, query, where, doc, getDocs, getDoc, addDoc, limit } from 'firebase/firestore';
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
	},
	login: async (email, pass) => {
		await signInWithEmailAndPassword(auth, email, pass);
	},
	logout: async () => {
		await signOut(auth);
	}
};

export const loading = writable(true);

export const property = writable({
	id: null,
	price: 0,
	size: 0,
	room_pics: []
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
		const querySnapshot = await getDocs(propertiesCollection, limit(6));
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

export async function getAllPropertiesExceptSelected(url_ID) {
	const propertiesCollection = collection(db, 'properties');
	const q = query(propertiesCollection, where('__name__', '!=', url_ID), limit(10));
	try {
		const querySnapshot = await getDocs(q);
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

export async function getAllPropertiesFiltered(
	searchFilter,
	locationFilter,
	typeFilter,
	priceFilter,
	showAll
) {
	const propertiesCollection = collection(db, 'properties');

	const conditions = [];

	if (searchFilter != '') {
		// conditions.push(where("name", ">=", searchFilter));
		// conditions.push(where("name", "<=", searchFilter + '~'));

		conditions.push(where('name_lowercase', '>=', searchFilter.toLowerCase()));
		conditions.push(where('name_lowercase', '<=', searchFilter.toLowerCase() + '~'));
	}

	if (locationFilter != 'All Locations') {
		conditions.push(where('location', '==', locationFilter));
	}

	if (typeFilter != 'All Types') {
		conditions.push(where('type', '==', typeFilter));
	}

	if (priceFilter == '500000') {
		conditions.push(where('price', '>=', Number(priceFilter)));
	} else if (priceFilter.includes(',')) {
		const temp_arr = priceFilter.split(',');
		conditions.push(where('price', '>=', Number(temp_arr[0])));
		conditions.push(where('price', '<=', Number(temp_arr[1])));
	}

	if (showAll == false) {
		conditions.push(limit(6));
	}

	const q = query(propertiesCollection, ...conditions);
	try {
		const querySnapshot = await getDocs(q);
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

export async function addNewProperty(
	name,
	location,
	address,
	price,
	size,
	type,
	description,
	features,
	bedrooms,
	bathrooms,
	garage,
	plot,
	year,
	pic,
	room_pics
) {
	const data = {
		name: name,
		name_lowercase: name.toLowerCase(),
		location: location,
		address: address,
		price: price,
		size: size,
		type: type,
		description: description,
		features: features.split(','),
		bedrooms: bedrooms,
		bathrooms: bathrooms,
		garage: garage,
		plot: plot,
		year: year,
		pic: pic,
		room_pics: room_pics.split(',')
	};
	try {
		const docRef = await addDoc(collection(db, 'properties'), data);
		// console.log("Document written with ID: ", docRef.id);
	} catch (error) {
		console.error('Error adding document: ', error);
	}
}
