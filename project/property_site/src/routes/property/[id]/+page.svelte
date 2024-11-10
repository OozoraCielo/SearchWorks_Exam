<script>
	import Navbar from '../../../components/navbar.svelte';
	import { onMount } from 'svelte';
	import {
		property,
		properties,
		getProperty,
		getAllProperties,
		loading,
		getAllPropertiesExceptSelected
	} from '../../../store/store';

	import { browser } from '$app/environment';

	//get screen size
	$: innerWidth = 1100;
	$: innerHeight = 1100;

	function numComma(price) {
		const formattedNumber = price.toLocaleString();
		return formattedNumber;
	}

	//on mount, get the necessary data
	//if clicked from the landing page, data is queried before directing to property page
	onMount(() => {
		loading.set(true);
		const url_string = window.location.href.split('/');
		const url_ID = url_string[url_string.length - 1];
		getAllPropertiesExceptSelected(url_ID);
		getProperty(url_ID);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="w-[100%] bg-gradient-to-tr from-black to-yellow-950 pt-1">
	<Navbar></Navbar>
	<!-- data below navbar -->
	<div class="w-[100%] mx-auto mt-[125px] h-[1px] bg-gray-500"></div>
	<div class={`w-[70%] mx-auto flex mt-[25px] ${innerWidth > 1100 ? '' : 'flex-col'}`}>
		<h1
			class={`font-dmsans font-bold text-white ${innerWidth > 1100 ? 'text-[32px]' : 'text-[20px]'}`}
		>
			{$property.name}
		</h1>
		<h1
			class={`font-dmsans font-bold text-white ${innerWidth > 1100 ? 'text-[32px] ml-auto' : 'text-[20px]'}`}
		>
			${numComma($property.price)}
		</h1>
	</div>
	<div class={`w-[70%] mx-auto flex mt-2 ${innerWidth > 1100 ? '' : 'flex-col'}`}>
		<h1
			class={`font-dmsans opacity-70 text-white ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
		>
			{$property.address}
		</h1>
		<h1
			class={`font-dmsans opacity-70 text-white ${innerWidth > 1100 ? 'text-[15px] ml-auto' : 'text-[10px]'}`}
		>
			{numComma($property.size)}/sq ft
		</h1>
	</div>
	<div class="w-[70%] mx-auto flex mt-[25px]"></div>
</div>

<div class="w-[100%] pt-[100px] pb-[100px] bg-gray-100">
	<div class={`w-[70%] flex mx-auto ${innerWidth > 1100 ? '' : 'flex-col'}`}>
		<div class={` flex flex-col flex-wrap ${innerWidth > 1100 ? 'w-[70%]' : 'w-[100%]'}`}>
			<!--big pic-->
			<img
				src={$property.room_pics[0]}
				alt="room"
				class="w-[100%] h-[500px] object-cover rounded-tr-[57px]"
			/>
			<!--small pics-->
			<div class="flex flex-wrap">
				{#each { length: Math.min(7, $property.room_pics.length - 1) } as _, i}
					<img
						src={$property.room_pics[i + 1]}
						alt="room"
						class=" mt-[25px] w-[80px] h-[80px] mx-auto rounded-tr-[20px] object-cover"
					/>
				{/each}
			</div>

			<!--details-->
			<div class="bg-white w-[100%] rounded-2xl mt-[50px] h-[125px]">
				<div class="flex h-[75px] items-center">
					<h1
						class={`text-black text-[20px] font-dmsans font-bold ${innerWidth > 1100 ? 'mx-8' : 'mx-auto'}`}
					>
						Details
					</h1>
				</div>
				<div class="h-[1px] w-[100%] bg-gray-200"></div>
				<div class="flex items-center h-[50px] w-[100%]">
					<div class="flex w-[20%] items-center justify-center">
						<img
							src="/bedroom.png"
							alt="bedroom"
							class={`${innerWidth > 1100 ? 'w-[25px] h-[25px] mr-2' : 'w-[15px] h-[15px]'}`}
						/>
						<p class={`font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
							{$property.bedrooms}
						</p>
					</div>
					<div class="h-[100%] w-[1px] bg-gray-200"></div>
					<div class="flex w-[20%] items-center justify-center">
						<img
							src="/bathroom.png"
							alt="bathroom"
							class={`${innerWidth > 1100 ? 'w-[25px] h-[25px] mr-2' : 'w-[15px] h-[15px]'}`}
						/>
						<p class={`font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
							{$property.bathrooms}
						</p>
					</div>
					<div class="h-[100%] w-[1px] bg-gray-200"></div>
					<div class="flex w-[20%] items-center justify-center">
						<img
							src="/hashtag.png"
							alt="hashtag"
							class={`${innerWidth > 1100 ? 'w-[25px] h-[25px] mr-2' : 'w-[15px] h-[15px]'}`}
						/>
						<p class={`font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
							{$property.plot}
						</p>
					</div>
					<div class="h-[100%] w-[1px] bg-gray-200"></div>
					<div class="flex w-[20%] items-center justify-center">
						<img
							src="/car.svg"
							alt="hashtag"
							class={`${innerWidth > 1100 ? 'w-[25px] h-[25px] mr-2' : 'w-[15px] h-[15px]'}`}
						/>
						<p class={`font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
							{$property.garage}
						</p>
					</div>
					<div class="h-[100%] w-[1px] bg-gray-200"></div>
					<div class="flex w-[20%] items-center justify-center">
						<img
							src="/calendar.png"
							alt="hashtag"
							class={`${innerWidth > 1100 ? 'w-[25px] h-[25px] mr-2' : 'w-[15px] h-[15px]'}`}
						/>
						<p class={`font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
							{$property.year}
						</p>
					</div>
				</div>
			</div>

			<!--description-->
			<div class="bg-white w-[100%] rounded-2xl mt-[50px]">
				<div class="flex h-[75px] items-center">
					<h1
						class={`text-black text-[20px] font-dmsans font-bold ${innerWidth > 1100 ? 'mx-8' : 'mx-auto'}`}
					>
						Description
					</h1>
				</div>
				<div class="h-[1px] w-[100%] bg-gray-200"></div>
				<p
					class={`text-black  leading-[22px] opacity-70 font-dmsans  ${innerWidth > 1100 ? 'text-[15px] m-8' : 'text-[10px] m-4'}`}
				>
					{$property.description}
				</p>
			</div>

			<!--features-->
			<div class="bg-white w-[100%] rounded-2xl mt-[50px]">
				<div class="flex h-[75px] items-center">
					<h1
						class={`text-black text-[20px] font-dmsans font-bold ${innerWidth > 1100 ? 'mx-8' : 'mx-auto'}`}
					>
						Features
					</h1>
				</div>
				<div class="h-[1px] w-[100%] bg-gray-200"></div>
				<div
					class={`grid auto-grid  justify-center items-center ${innerWidth > 1100 ? 'm-8' : 'm-4'}`}
				>
					{#each $property.features as feature}
						<div class="flex items-center mx-auto">
							<img src="/check.webp" alt="check" class="w-[25px] h-[25px]" />
							<p
								class={`text-black  leading-[22px] opacity-70 font-dmsans mx-2 my-2 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
							>
								{feature}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- view profile -->
		<div
			class={` h-[500px] bg-white ml-auto rounded-2xl shadow-lg flex flex-col p-4 ${innerWidth > 1100 ? 'w-[25%]' : 'w-[100%] mt-[50px]'}`}
		>
			<div class="h-[60px] w-[100%] mx-auto rounded-lg bg-gray-200 flex items-center">
				<img src="/profile_pic.jpg" alt="profile pic" class="rounded-full h-[35px] w-[35px] ml-3" />
				<div class="flex flex-col ml-2">
					<p class="font-dmsans text-black text-[15px]">Firstname Lastname</p>
					<a href="/#" class="font-dmsans text-yellow-500 text-[13px] hover:brightness-75 mr-auto"
						>View Profile</a
					>
				</div>
			</div>
			<input
				type="text"
				class="h-[60px] w-[100%] mt-4 mx-auto rounded-lg bg-white border-gray-200 border-[1px] flex items-center p-3"
				placeholder="Name"
			/>
			<input
				type="text"
				class="h-[60px] w-[100%] mt-2 mx-auto rounded-lg bg-white border-gray-200 border-[1px] flex items-center p-3"
				placeholder="Phone"
			/>
			<input
				type="text"
				class="h-[60px] w-[100%] mt-2 mx-auto rounded-lg bg-white border-gray-200 border-[1px] flex items-center p-3"
				placeholder="Email"
			/>
			<textarea
				class="h-[100px] w-[100%] mt-2 mx-auto rounded-lg bg-white border-gray-200 border-[1px] flex p-3"
				placeholder="Hello, I am interested in..."
			></textarea>
			<div class={`h-[70px] w-[100%]`}>
				<a href="/" class="hover:opacity-80">
					<div
						class={`mt-3 bg-black rounded-tr-[20px] flex items-center justify-center h-[70px] w-[100%]`}
					>
						<h1 class={`text-white  font-dmsans text-[17px]`}>Learn more</h1>
						<h1 class={`font-dmsans text-yellow-500 text-[30px] ml-2 mb-1`}>&rarr;</h1>
					</div>
				</a>
			</div>
		</div>
	</div>

	<!--similar listings-->
	<!-- limited to 10 items -->
	<div class="ml-[15%] mt-[100px]">
		<div class="h-1 w-[169px] bg-gradient-to-r from-yellow-500 to-black rounded-sm"></div>
		<h1 class={`mt-4 font-dmsans font-bold ${innerWidth > 1100 ? 'text-[50px]' : 'text-[30px]'}`}>
			Similar Listings
		</h1>
		<div class="w-[100%] flex mt-8 overflow-x-scroll overflow-y-hidden">
			{#each $properties as property}
				<a
					href={`/property/${property.id}`}
					class="hover:brightness-75 mr-8"
					on:click={() => {
						loading.set(true);
						getProperty(property.id);
						getAllPropertiesExceptSelected(property.id);
					}}
				>
					<div
						class={` bg-white rounded-2xl mt-6 ${innerWidth > 1100 ? 'w-[330px] h-[375px]' : 'w-[250px] h-[375px]'}`}
					>
						<img
							src={property.pic}
							alt="house pic"
							class="rounded-tr-2xl rounded-tl-2xl w-[100%] h-[250px] object-cover"
						/>
						<div class="flex h-[75px] items-center">
							<h1 class="text-black text-[24px] font-dmsans font-bold ml-8">{property.name}</h1>
						</div>
						<div class="h-[1px] w-[100%] bg-gray-200"></div>
						<div class="flex items-center h-[50px] w-[100%]">
							<div class="flex w-[33%] items-center justify-center">
								<img
									src="/bedroom.png"
									alt="bedroom"
									class={`${innerWidth > 1100 ? 'w-[25px] h-[25px] mr-2' : 'w-[15px] h-[15px]'}`}
								/>
								<p class={`font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
									{property.bedrooms}
								</p>
							</div>
							<div class="h-[100%] w-[1px] bg-gray-200"></div>
							<div class="flex w-[33%] items-center justify-center">
								<img
									src="/bathroom.png"
									alt="bathroom"
									class={`${innerWidth > 1100 ? 'w-[25px] h-[25px] mr-2' : 'w-[15px] h-[15px]'}`}
								/>
								<p class={`font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
									{property.bathrooms}
								</p>
							</div>
							<div class="h-[100%] w-[1px] bg-gray-200"></div>
							<div class="flex w-[33%] items-center justify-center">
								<img
									src="/hashtag.png"
									alt="hashtag"
									class={`${innerWidth > 1100 ? 'w-[25px] h-[25px] mr-2' : 'w-[15px] h-[15px]'}`}
								/>
								<p class={`font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
									{property.plot}
								</p>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.auto-grid {
		grid-template-columns: repeat(auto-fit, minmax(min-content, 200px));
	}
	::placeholder {
		color: black;
		opacity: 1; /* Firefox */
	}
	textarea {
		resize: none;
	}
</style>
