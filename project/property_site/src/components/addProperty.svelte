<script>
	import { createEventDispatcher } from 'svelte';
	import { addNewProperty } from '../store/store';
	const dispatch = createEventDispatcher();
	export let showAddProperty = true;
	let error = false;

	let name = null;
	let location = null;
	let address = null;
	let price = null;
	let size = null;
	let type = 'House';
	let description = null;
	let features = null;
	let bathrooms = null;
	let bedrooms = null;
	let garage = null;
	let plot = null;
	let year = null;
	let pic = null;
	let room_pics = [];

	const typeItems = ['House', 'Mansion', 'Apartment', 'Condominium'];

	const close = () => {
		showAddProperty = false;
		dispatch('close');
		error = false;

		name = null;
		location = null;
		address = null;
		price = null;
		size = null;
		type = 'House';
		description = null;
		features = null;
		bedrooms = null;
		bathrooms = null;
		garage = null;
		plot = null;
		year = null;
		pic = null;
		room_pics = null;
	};

	let sending = false;

	async function handleSubmit() {
		error = false;
		if (sending) {
			return;
		}

		if (
			!name ||
			!location ||
			!address ||
			!price ||
			!size ||
			!type ||
			!description ||
			!features ||
			!bedrooms ||
			!bathrooms ||
			!garage ||
			!plot ||
			!year ||
			!pic ||
			!room_pics
		) {
			error = true;
			return;
		}
		sending = true;

		try {
			await addNewProperty(
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
			);
			close();
			sending = false;
		} catch (err) {
			console.log(err);
			error = true;
			sending = false;
		}
	}
</script>

{#if showAddProperty}
	<div
		tabindex="0"
		role="button"
		class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-30 flex"
		on:click={close}
		on:keydown={(e) => {
			if (e.key !== 'Enter') return;
			e.preventDefault();
			e.target.click();
		}}
	>
		<div
			tabindex="0"
			role="button"
			class="mx-auto my-auto max-h-[80%] min-w-[300px] w-[50%] bg-gray-200 rounded-tl-[40px] shadow-xl flex flex-col px-10 pb-10 hover:cursor-auto overflow-y-scroll"
			on:click|stopPropagation
			on:keydown={(e) => {
				if (e.key !== 'Enter') return;
				e.preventDefault();
				e.target.click();
			}}
		>
			<button
				class="bg-gradient-to-tr from-black via-yellow-950 to-yellow-950 text-white rounded-full w-8 h-8 ml-auto mt-5 -mr-5"
				on:click={close}>X</button
			>
			<div class="h-1 w-[169px] bg-gradient-to-r from-yellow-500 to-black rounded-sm"></div>

			<h1 class="font-dmsans text-[20px] text-black font-bold mt-4 mx-auto">Add a Property</h1>

			{#if error}
				<p class="text-red-500 font-dmsans text-[12px] mt-4">
					There is something wrong with the data
				</p>
			{/if}
			<form class="flex flex-col">
				<input
					type="text"
					placeholder="Name of Property"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={name}
				/>

				<input
					type="text"
					placeholder="Location"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={location}
				/>

				<input
					type="text"
					placeholder="Complete Address"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={address}
				/>

				<input
					type="number"
					placeholder="Price"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={price}
				/>

				<input
					type="number"
					placeholder="Size in sq ft"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={size}
				/>

				<select
					id="typeSelect"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-1 font-dmsans border-2"
					on:change={() => {
						type = document.getElementById('typeSelect').value;
					}}
				>
					{#each typeItems as item}
						<option value={item} class="">{item}</option>
					{/each}
				</select>

				<textarea
					placeholder="Description"
					class="mt-6 rounded-lg text-[17px] h-[140px] p-2 font-dmsans border-2"
					bind:value={description}
				></textarea>

				<textarea
					placeholder="Features (separated by comma w/o space)"
					class="mt-6 rounded-lg text-[17px] h-[140px] p-2 font-dmsans border-2"
					bind:value={features}
				></textarea>

				<input
					type="number"
					placeholder="No. of Bedrooms"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={bedrooms}
				/>

				<input
					type="number"
					placeholder="No. of Bathrooms"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={bathrooms}
				/>

				<input
					type="number"
					placeholder="No. of Parking Slots"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={garage}
				/>

				<input
					type="number"
					placeholder="No. of Plots"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={plot}
				/>

				<input
					type="number"
					placeholder="Year"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={year}
				/>

				<input
					type="text"
					placeholder="Main Picture Url"
					class="mt-6 rounded-lg text-[17px] h-[35px] p-2 font-dmsans border-2"
					bind:value={pic}
				/>

				<textarea
					placeholder="Picture Urls (separated by comma w/o space)"
					class="mt-6 rounded-lg text-[17px] h-[140px] p-2 font-dmsans border-2"
					bind:value={room_pics}
				></textarea>

				<div class={` mt-8 h-[50px] w-[200px]`}>
					<button class="hover:opacity-80" on:click={handleSubmit}>
						<div
							class={`bg-black rounded-tr-[20px] flex items-center justify-center h-[50px] w-[200px]`}
						>
							<h1 class={`text-white font-dmsans text-[17px]`}>
								{#if sending}
									...
								{:else}
									Add Property
								{/if}
							</h1>
							<h1 class={`font-dmsans text-yellow-500 text-[30px] ml-2 mb-1`}>&rarr;</h1>
						</div>
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
