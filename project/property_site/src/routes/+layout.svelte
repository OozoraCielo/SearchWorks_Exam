<script>
	import '../app.css';
	import Footer from '../components/footer.svelte';
	let { children } = $props();

	//backend
	import {onMount} from "svelte";
	import { auth, db } from "../lib/firebase/firebase";
	import { getDoc, doc, setDoc } from "firebase/firestore";
	import { authStore } from "../store/store";
	import {loading} from '../store/store';
	import LoadingScreen from '../components/loadingScreen.svelte';
	import { fade } from 'svelte/transition';

	onMount(() => {
		//for login
		const unsubscribe = auth.onAuthStateChanged((user) => {
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});
		});

		return unsubscribe;
		});
</script>

<!-- every time something is loading, refreshing, or initial query -> display a loading screen -->
{#if $loading}
<div out:fade>
<LoadingScreen></LoadingScreen>
</div>
{/if}

{@render children()}

<Footer></Footer>