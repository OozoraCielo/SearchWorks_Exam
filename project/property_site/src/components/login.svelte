<script>
	import { createEventDispatcher } from 'svelte';
	import { authHandlers, authStore } from '../store/store';
	const dispatch = createEventDispatcher();
	export let show = true;
	let error = false;
	let email = '';
	let password = '';
	let confirmPassword = '';
    let loginForm = true;

	const close = () => {
		show = false;
		dispatch('close');
		error = false;
		email = '';
		password = '';
		confirmPassword = '';
        loginForm = true;
	};

	

	let authenticating = false;

    async function handleSubmit() {

        error = false;
		if (authenticating) {
			return;
		}

		if (!email || !password || (!loginForm && !confirmPassword)) {
            error = true;
			return;
		}
        authenticating = true;

		if (!loginForm && password === confirmPassword) {
			try {
				await authHandlers.signup(email, password);
                close();
                authenticating = false;
			} catch (err) {
				console.log(err);
                error = true;
                authenticating = false;
			}
		} else {
			try {
				await authHandlers.login(email, password);
                close();
                authenticating = false;
			} catch (err) {
				console.log(err);
                error = true;
                authenticating = false;
			}
		}
	}

	// async function handleAuthenticate() {
    //     error = false;
	// 	if (authenticating) {
	// 		return;
	// 	}

	// 	if (!email || !password || (!loginForm && (!confirmPassword || password !== confirmPassword))) {
	// 		error = true;
	// 		console.log(error);
	// 		return;
	// 	}
	// 	authenticating = true;

	// 	try {
	// 		if (loginForm) {
	// 			await authHandlers.login(email, password);
    //             close();
    //             authenticating = false;
	// 		} else {
	// 			await authHandlers.signup(email, password);
    //             close();
    //             authenticating = false;
	// 		}
	// 	} catch (err) {
	// 		console.log('there was an auth error', err);
	// 		error = true;
    //         authenticating = false;
	// 	}
	// }
</script>

{#if show}
	<div
		tabindex="0"
		role="button"
		class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-30 flex"
		on:click={close}
		on:keydown={(e) => {
			if (e.key !== 'Enter' && e.key !== ' ') return;
			e.preventDefault();
			e.target.click();
		}}
	>
		<div
			tabindex="0"
			role="button"
			class="mx-auto my-auto max-w-[300px] bg-gray-200 rounded-tl-[40px] shadow-xl flex flex-col px-10 pb-10 hover:cursor-auto"
			on:click|stopPropagation
			on:keydown={(e) => {
				if (e.key !== 'Enter' && e.key !== ' ') return;
				e.preventDefault();
				e.target.click();
			}}
		>
			<button
				class="bg-gradient-to-tr from-black via-yellow-950 to-yellow-950 text-white rounded-full w-8 h-8 ml-auto mt-5 -mr-5"
				on:click={close}>X</button
			>
			<div class="h-1 w-[169px] bg-gradient-to-r from-yellow-500 to-black rounded-sm"></div>

			{#if loginForm}
				<h1 class="font-dmsans text-[20px] text-black font-bold mt-4">Login</h1>

				{#if error}
					<p class="text-red-500 font-dmsans text-[12px] mt-4">
						The information you have entered is not correct
					</p>
				{/if}
                <form>

				<input
					type="email"
					placeholder="email"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={email}
				/>
				<input
					type="password"
					placeholder="password"
					class="mt-8 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={password}
				/>

				<div class={` mt-8 h-[50px] w-[150px]`}>
					<button class="hover:opacity-80" on:click={handleSubmit}>
						<div
							class={`bg-black rounded-tr-[20px] flex items-center justify-center h-[50px] w-[150px]`}
						>
							<h1 class={`text-white font-dmsans text-[17px]`}>
								{#if authenticating}
									...
								{:else}
									Confirm
								{/if}
							</h1>
							<h1 class={`font-dmsans text-yellow-500 text-[30px] ml-2 mb-1`}>&rarr;</h1>
						</div>
					</button>
				</div>
				<div class="mt-8 flex">
					<p class="text-[12px] font-dmsans">Don't have an account?</p>
					<button
						class="ml-2 text-[12px] font-dmsans font-bold text-yellow-500 hover:brightness-75"
						on:click={() => {
							loginForm = !loginForm;
							error = false;
						}}>Register Here</button
					>
				</div>
            </form>
			{:else}
				<h1 class="font-dmsans text-[20px] text-black font-bold mt-4">Register</h1>

				{#if error}
					<p class="text-red-500 font-dmsans text-[12px] mt-4">
						The information you have entered is not correct
					</p>
				{/if}

				<!-- <input
					type="text"
					placeholder="username"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
				/> -->
                <form>
				<input
					type="email"
					placeholder="email"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={email}
				/>
				<input
					type="password"
					placeholder="password"
					class="mt-8 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={password}
				/>
				<input
					type="password"
					placeholder="confirm password"
					class="mt-8 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={confirmPassword}
				/>

				<div class={` mt-8 h-[50px] w-[150px]`}>
					<button class="hover:opacity-80" on:click={handleSubmit}>
						<div
							class={`bg-black rounded-tr-[20px] flex items-center justify-center h-[50px] w-[150px]`}
						>
							<h1 class={`text-white font-dmsans text-[17px]`}>Confirm</h1>
							<h1 class={`font-dmsans text-yellow-500 text-[30px] ml-2 mb-1`}>&rarr;</h1>
						</div>
					</button>
				</div>
				<div class="mt-8 flex">
					<p class="text-[12px] font-dmsans">Already have an account?</p>
					<button
						class="ml-2 text-[12px] font-dmsans font-bold text-yellow-500 hover:brightness-75"
						on:click={() => {
							loginForm = !loginForm;
							error = false;
						}}>Login Here</button
					>
				</div>
            </form>
			{/if}
		</div>
	</div>
{/if}
