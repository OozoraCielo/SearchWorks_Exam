<script>
	import Login from '../components/login.svelte';
	import { authHandlers, authStore } from '../store/store';

	let showLogin = false;
	const handleClose = () => {
		showLogin = false;
	};

	//get screen size
	$: innerWidth = 1100;
	$: innerHeight = 1100;

	//tailwind css
	const navtext_lg = 'mx-6 text-white text-[15px] font-dmsans';
	const navtext_sm = 'mx-2 text-white text-[10px] font-dmsans';

	//get current route; to be used for knowing which link is active
	import { page } from '$app/stores';
	$: currentRoute = $page.url.pathname;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	class={`absolute top-0 left-[15%] mt-[30px] w-[70%] flex items-center ${innerWidth > 1100 ? '' : 'flex-col'}`}
>
	<ul class={`${innerWidth > 1100 ? 'mr-auto' : 'mx-auto'}`}>
		<li class="flex items-center">
			<a href="/" class="hover:brightness-75">
				<img src="/logo.png" alt="logo" class="h-[34px] w-[128px]" />
			</a>

			{#if innerWidth < 1100}
				<a href="/floor1" class={`hover:brightness-75`}>
					<div
						class={` bg-yellow-600  rounded-tr-[10px] flex items-center justify-center ${innerWidth > 1100 ? 'h-[50px] w-[210px] ml-8' : 'h-[25px] w-[100px] ml-3'}`}
					>
						<h1
							class={`font-dmsans text-black ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}
						>
							Work with us
						</h1>
						<h1
							class={`font-dmsans text-white ${innerWidth > 1100 ? 'text-[5px] ml-2' : 'text-[15px] ml-1 mb-1'}`}
						>
							&rarr;
						</h1>
					</div>
				</a>
			{/if}
		</li>
	</ul>

	<ul class={` ${innerWidth > 1100 ? 'ml-auto' : 'mt-[20px] mx-auto'}`}>
		<li class="flex items-center">
			<a href="/" class={`hover:brightness-75`}>
				<h1 class={`${innerWidth > 1100 ? navtext_lg : navtext_sm}`}>Nav Link</h1>
			</a>

			<a href="/floor1" class={`hover:brightness-75`}>
				<h1 class={`${innerWidth > 1100 ? navtext_lg : navtext_sm}`}>Nav Link</h1>
			</a>

			<a href="/floor1" class={`hover:brightness-75`}>
				<h1 class={`${innerWidth > 1100 ? navtext_lg : navtext_sm}`}>Nav Link</h1>
			</a>

			{#if !$authStore.currentUser}
			<button class={`hover:brightness-75`} on:click={() => showLogin = true}>
				<h1 class={`${innerWidth > 1100 ? navtext_lg : navtext_sm}`}>Login</h1>
			</button>
			{:else}
			<button class={`hover:brightness-75`} on:click={authHandlers.logout}>
				<h1 class={`${innerWidth > 1100 ? navtext_lg : navtext_sm}`}>Logout</h1>
			</button>
			{/if}
			
			
			{#if innerWidth >= 1100}
				<a href="/floor1" class={`hover:brightness-75`}>
					<div
						class={` bg-yellow-600  rounded-tr-[10px] flex items-center justify-center ${innerWidth > 1100 ? 'h-[50px] w-[210px] ml-8' : 'h-[25px] w-[100px] ml-3'}`}
					>
						<h1
							class={`font-dmsans text-black ${innerWidth > 1100 ? 'text-[17px]' : 'text-[8px]'}`}
						>
							Work with us
						</h1>
						<h1
							class={`font-dmsans ml-1 mb-2 text-white ${innerWidth > 1100 ? 'text-[30px] mt-1' : 'text-[15px]'}`}
						>
							&rarr;
						</h1>
					</div>
				</a>
			{/if}
		</li>
	</ul>
</div>

<Login show={showLogin} on:close={handleClose}/>
