<script>
	//get screen size
	$: innerWidth = 1000;
	$: innerHeight = 1000;
	import Navbar from '../components/navbar.svelte';
	
	// let properties;

	

	//getting data from firebase
	import { onMount } from 'svelte';
	import { collection, getDocs } from 'firebase/firestore';
	import { db } from '../lib/firebase/firebase';
	import {property, properties, getProperty, getAllProperties, loading} from '../store/store';

	// async function getAllProperties() {
	// 	const propertiesCollection = collection(db, 'properties');
	// 	const querySnapshot = await getDocs(propertiesCollection);
	// 	const prop = [];
	// 	querySnapshot.forEach((doc) => {
	// 		prop.push({ id: doc.id, ...doc.data() });
	// 	});
	// 	properties = prop;
	// 	return prop;
	// }

  

	onMount(() => {
		loading.set(true);
		
		getAllProperties();
		console.log($properties);
	});
	
</script>

<svelte:window bind:innerWidth bind:innerHeight />



<!--top part-->
<div class="min-w-[100%] inner-shadow container relative">
	<img
		src="./bg_house.jpg"
		alt="house"
		class="w-[100%] min-h-[1000px] low-z relative brightness-[90%] object-cover"
	/>
	<Navbar />

	<div class="absolute top-[20%] left-[15%] h-28 w-[70%]">
		<h1
			class={`font-bold text-white font-dmsans ${innerWidth > 1100 ? 'text-[80px] leading-[80px]' : 'text-[40px] leading-[40px]'}`}
		>
			Beautiful <br /> homes made <br /> for you
		</h1>
		<p
			class={`text-white mt-6  font-dmsans  opacity-70 ${innerWidth > 1100 ? 'text-[20px] leading-[28px]' : 'text-[15px] leading-[20px]'}`}
		>
			askdhfks klsahdkfhksd skdhakjhf skdhakjhf <br /> askdhfks klsahdkfhksd skdhakjhf skdhakjhf
			<br />
			askdhfks klsahdkfhksd skdhakjhf skdhakjhf <br /> askdhfks klsahdkfhksd skdhakjhf skdhakjhf
		</p>
	</div>

	<div
		class={`absolute bg-white bottom-0 left-[15%] w-[70%] flex items-center ${innerWidth > 1100 ? 'h-[100px]' : 'h-[50px]'}`}
	>
		<a href="/floor1" class={` hover:opacity-70 flex items-center`}>
			<h1
				class={`text-black ml-8 font-dmsans ${innerWidth > 1100 ? 'text-[20px]' : 'text-[10px]'}`}
			>
				See all listings
			</h1>
			<h1
				class={`font-dmsans text-yellow-500 ${innerWidth > 1100 ? 'text-[30px] ml-2' : 'text-[15px] ml-1 mb-1'}`}
			>
				&rarr;
			</h1>
		</a>
	</div>
</div>

<!--youre in good hands 1-->
<div
	class={`min-w-[100%] bg-white flex pt-[100px]  ${innerWidth > 1100 ? 'pb-[100px]' : 'flex-col pb-[150px]'}`}
>
	<img
		src="./work_together.jpg"
		alt="house"
		class={`rounded-tr-[40px] shadow1 object-cover ${innerWidth > 1100 ? '-mb-[100px] w-[50%] h-[700px]' : 'w-[90%] h-[500px]'}`}
	/>
	<div
		class={` ${innerWidth > 1100 ? 'ml-auto mr-[15%] mt-[100px] w-[31%] pb-[100px]' : 'w-[70%] mx-[15%] mt-[100px]'}`}
	>
		<div class="h-1 w-[169px] bg-gradient-to-r from-yellow-500 to-black rounded-sm"></div>
		<h1 class={`mt-4  font-dmsans font-bold ${innerWidth > 1100 ? 'text-[50px]' : 'text-[30px]'}`}>
			You're in good hands
		</h1>
		<p
			class={`mt-4  text-[20px] font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[20px] w-[100%]' : 'text-[10px]'}`}
		>
			jhasgfj sdjhafbjksagfsa hjsadfjdskjfias jhagfigasddkfiasd jhsagfhkasgdifgs jafhgasgfis
			hagfigsaifgsd hasuhgfiadsgifgdsa augfisagifgasd sagfiusadgi segfuiasgfuas uiasgfigasif
			asugfisadgifgsa asugfasgfigsa ayugfiouasgfigs augfsagigfs gasugfiasgfiesgh augfiaesgfiagsif
			auigsigaisfdagfa iuagfiosgifgisag agfsiagfidsgag
		</p>
		<div class={` ${innerWidth > 1100 ? 'h-[70px] w-[210px]' : 'h-[30px] w-[100px]'}`}>
			<a href="/" class="hover:opacity-80">
				<div
					class={`mt-6 bg-black rounded-tr-[20px] flex items-center justify-center ${innerWidth > 1100 ? 'h-[70px] w-[210px]' : 'h-[30px] w-[100px]'}`}
				>
					<h1
						class={`text-white  font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}
					>
						Learn more
					</h1>
					<h1
						class={`font-dmsans text-yellow-500 ${innerWidth > 1100 ? 'text-[30px] ml-2 mb-1' : 'text-[15px] ml-1 mb-1'}`}
					>
						&rarr;
					</h1>
				</div>
			</a>
		</div>
	</div>
</div>

<!--property list-->
<div class="min-w-[100%] bg-gray-200 min-h-auto -mt-[100px]">
	<div
		class={`mx-auto w-[70%] ${innerWidth > 1100 ? 'pt-[300px] pb-[300px]' : 'pt-[100px] pb-[100px]'}`}
	>
		<div class="h-1 w-[169px] bg-gradient-to-r from-yellow-500 to-black rounded-sm"></div>
		<h1 class={`mt-4 font-dmsans font-bold ${innerWidth > 1100 ? 'text-[50px]' : 'text-[30px]'}`}>
			Find your next place to live
		</h1>
		<div
			class={`mt-12 bg-white w-[100%] rounded-2xl ${innerWidth > 1100 ? 'h-[100px]' : 'h-[200px]'}`}
		>
			<ul class="h-[100%] w-[100%]">
				<li
					class={`flex h-[100%] w-[100%] ${innerWidth > 1100 ? 'items-center' : 'flex-col justify-center'}`}
				>
					<div class={`flex items-center ${innerWidth > 1100 ? 'w-[25%]' : 'h-[25%]'}`}>
						<p class={`ml-8 font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
							Looking for
						</p>
						<p class={`ml-2  ${innerWidth > 1100 ? 'text-[25px] -mt-4' : 'text-[15px] -mt-2'}`}>
							&#x2304;
						</p>
					</div>
					<div
						class={`bg-gray-200 ${innerWidth > 1100 ? 'h-[100%] w-[1px]' : 'h-[1px] w-[100%]'}`}
					></div>

					<div class={`flex items-center ${innerWidth > 1100 ? 'w-[25%]' : 'h-[25%]'}`}>
						<p class={`ml-8 font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
							Location
						</p>
						<p class={`ml-2  ${innerWidth > 1100 ? 'text-[25px] -mt-4' : 'text-[15px] -mt-2'}`}>
							&#x2304;
						</p>
					</div>
					<div
						class={`bg-gray-200 ${innerWidth > 1100 ? 'h-[100%] w-[1px]' : 'h-[1px] w-[100%]'}`}
					></div>

					<div class={`flex items-center ${innerWidth > 1100 ? 'w-[25%]' : 'h-[25%]'}`}>
						<p class={`ml-8 font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
							Property Type
						</p>
						<p class={`ml-2  ${innerWidth > 1100 ? 'text-[25px] -mt-4' : 'text-[15px] -mt-2'}`}>
							&#x2304;
						</p>
					</div>
					<div
						class={`bg-gray-200 ${innerWidth > 1100 ? 'h-[100%] w-[1px]' : 'h-[1px] w-[100%]'}`}
					></div>

					<div class={`flex items-center ${innerWidth > 1100 ? 'w-[25%]' : 'h-[25%]'}`}>
						<p class={`ml-8 font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
							Price
						</p>
						<p class={`ml-2  ${innerWidth > 1100 ? 'text-[25px] -mt-4' : 'text-[15px] -mt-2'}`}>
							&#x2304;
						</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="w-[100%] flex flex-wrap mt-8">
			{#each $properties as property}
				<a href={`/property/${property.id}`} class="hover:brightness-75 mx-auto" on:click={() => {
					getProperty(property.id);
					getAllProperties();
				}}>
					<div
						class={` bg-white rounded-2xl mt-6 ${innerWidth > 1100 ? 'w-[330px] h-[375px]' : 'w-[250px] h-[375px]'}`}
					>
						<img
							src={"https://drive.google.com/thumbnail?id=1AxSrteIQktni-D9c-HXusNQ1k_O6aTQw&sz=w1000"}
							alt="house pic"
							class="rounded-tr-2xl rounded-tl-2xl w-[100%] h-[250px] object-cover"
						/>
						<div class="flex h-[75px] items-center">
							<h1 class="text-black text-[24px] font-dmsans font-bold ml-8">{property.name}</h1>
						</div>
						<div class="h-[1px] w-[100%] bg-gray-200"></div>
						<div class="flex items-center h-[50px] w-[100%]">
							<div class="flex w-[33%] items-center justify-center">
								<img src="/bedroom.png" alt="bedroom" class="w-[25px] h-[25px] mr-2" />
								<p class="text-[17px] font-dmsans">{property.bedrooms}</p>
							</div>
							<div class="h-[100%] w-[1px] bg-gray-200"></div>
							<div class="flex w-[33%] items-center justify-center">
								<img src="/bathroom.png" alt="bathroom" class="w-[25px] h-[25px] mr-2" />
								<p class="text-[17px] font-dmsans">{property.bathrooms}</p>
							</div>
							<div class="h-[100%] w-[1px] bg-gray-200"></div>
							<div class="flex w-[33%] items-center justify-center">
								<img src="/hashtag.png" alt="hashtag" class="w-[25px] h-[25px] mr-2" />
								<p class="text-[17px] font-dmsans">{property.plot}</p>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<!--youre in good hands 2-->
<div class={`min-w-[100%] bg-white flex ${innerWidth > 1100 ? '' : 'flex-col'}`}>
	<div
		class={` ${innerWidth > 1100 ? 'mr-auto ml-[15%] mt-[200px] w-[31%]' : 'w-[70%] mx-[15%] mb-[50px]  pt-[100px]'}`}
	>
		<div class="h-1 w-[169px] bg-gradient-to-r from-yellow-500 to-black rounded-sm"></div>
		<h1 class={`mt-4  font-dmsans font-bold ${innerWidth > 1100 ? 'text-[50px]' : 'text-[30px]'}`}>
			You're in good hands
		</h1>
		<p
			class={`mt-4  text-[20px] font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[20px] w-[100%]' : 'text-[10px]'}`}
		>
			jhasgfj sdjhafbjksagfsa hjsadfjdskjfias jhagfigasddkfiasd jhsagfhkasgdifgs jafhgasgfis
			hagfigsaifgsd hasuhgfiadsgifgdsa augfisagifgasd sagfiusadgi segfuiasgfuas uiasgfigasif
			asugfisadgifgsa asugfasgfigsa ayugfiouasgfigs augfsagigfs gasugfiasgfiesgh augfiaesgfiagsif
			auigsigaisfdagfa iuagfiosgifgisag agfsiagfidsgag
		</p>
		<div class={` ${innerWidth > 1100 ? 'h-[70px] w-[210px]' : 'h-[30px] w-[100px]'}`}>
			<a href="/" class="hover:opacity-80">
				<div
					class={`mt-6 bg-black rounded-tr-[20px] flex items-center justify-center ${innerWidth > 1100 ? 'h-[70px] w-[210px]' : 'h-[30px] w-[100px]'}`}
				>
					<h1
						class={`text-white  font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}
					>
						Learn more
					</h1>
					<h1
						class={`font-dmsans text-yellow-500 ${innerWidth > 1100 ? 'text-[30px] ml-2 mb-1' : 'text-[15px] ml-1 mb-1'}`}
					>
						&rarr;
					</h1>
				</div>
			</a>
		</div>
	</div>
	<img
		src="./work_together.jpg"
		alt="house"
		class={`rounded-tl-[40px] shadow2 object-cover ${innerWidth > 1100 ? '-mt-[100px] w-[50%] h-[700px]' : 'w-[90%] ml-auto h-[500px]'}`}
	/>
</div>

<!--youre in good hands 3-->
<div
	class={`w-[100%] bg-gradient bg-gradient-to-tr from-black to-yellow-950  flex flex-col items-center ${innerWidth > 1100 ? 'mt-[200px] py-[150px]' : 'mt-[100px] py-[100px]'}`}
>
	<div
		class="h-1 w-[169px] bg-gradient-to-r from-yellow-500 via-transparent to-transparent rounded-sm"
	></div>

	<h1
		class={`mt-4 font-dmsans font-bold text-white text-center ${innerWidth > 1100 ? 'text-[50px]' : 'text-[30px]'}`}
	>
		You're in good hands
	</h1>
	<p
		class={`mt-4 w-[70%] font-dmsans leading-[28px] opacity-70 text-white text-center ${innerWidth > 1100 ? 'text-[20px]' : 'text-[10px]'}`}
	>
		jhasgfj sdjhafbjksagfsa hjsadfjdskjfias jhagfigasddkfiasd jhsagfhkasgdifgs jafhgasgfis
		hagfigsaifgsd hasuhgfiadsgifgdsa augfisagifgasd sagfiusadgi segfuiasgfuas uiasgfigasif
		asugfisadgifgsa asugfasgfigsa ayugfiouasgfigs augfsagigfs gasugfiasgfiesgh augfiaesgfiagsif
		auigsigaisfdagfa iuagfiosgifgisag agfsiagfidsgag
	</p>
	<a href="/#" class={`hover:brightness-75 mx-auto mt-8`}>
		<div
			class={`bg-yellow-600 rounded-tr-[10px] flex items-center justify-center ${innerWidth > 1100 ? 'h-[70px] w-[210px] ' : 'h-[30px] w-[100px] '}`}
		>
			<h1 class={`text-black font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
				Learn more
			</h1>
			<h1
				class={`font-dmsans text-white ${innerWidth > 1100 ? 'text-[30px] ml-2 mb-1' : 'text-[15px] ml-1 mb-1'}`}
			>
				&rarr;
			</h1>
		</div>
	</a>
</div>

<!--people quoutes-->
<div class="w-[100%] bg-gradient bg-white flex flex-col items-center py-[150px]">
	<div
		class={`h-1 bg-gradient-to-r from-yellow-500 to-black rounded-sm ${innerWidth > 1100 ? 'w-[30%]' : 'w-[70%]'}`}
	></div>
	<p
		class={`text-black text-left font-dmsans font-medium ${innerWidth > 1100 ? 'w-[30%] text-[24px]' : 'w-[70%] text-[15px]'}`}
	>
		"jhasgfj sdjhafbjksagfsa hjsadfjdskjfias jhagfigasddkfiasd jhsagfhkasgdifgs jafhgasgfis
		hagfigsaifgsd hasuhgfiadsgifgdsa augfisagifgasd sagfiusadgi segfuiasgfuas uiasgfigasif
		asugfisadgifgsa asugfasgfigsa ayugfiouasgfigs augfsagigfs gasugfiasgfiesgh augfiaesgfiagsif
		auigsigaisfdagfa iuagfiosgifgisag agfsiagfidsgag.""
	</p>
	<div class={`mt-[50px] w-[70%] flex mx-auto ${innerWidth > 1100 ? '' : 'flex-col'}`}>
		<div
			class={`bg-white flex justify-center items-center ${innerWidth > 1100 ? 'w-[33%] h-[150px]' : 'w-[100%] h-[100px]'}`}
		>
			<img
				src="profile_pic.jpg"
				alt="profile_pic"
				class={`object-cover mx-2 rounded-full ${innerWidth > 1100 ? 'h-[75px] w-[75px]' : 'h-[50px] w-[50px]'}`}
			/>
			<div class="flex flex-col mx-2">
				<h1 class={`font-dmsans text-black ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}>
					Firstname Lastname
				</h1>
				<h1
					class={`font-dmsans text-black opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
				>
					Client
				</h1>
			</div>
		</div>
		<div
			class={`bg-gray-900 flex justify-center items-center ${innerWidth > 1100 ? 'w-[33%] h-[150px]' : 'w-[100%] h-[100px]'}`}
		>
			<img
				src="profile_pic.jpg"
				alt="profile_pic"
				class={`object-cover mx-2 rounded-full ${innerWidth > 1100 ? 'h-[75px] w-[75px]' : 'h-[50px] w-[50px]'}`}
			/>
			<div class="flex flex-col mx-2">
				<h1 class={`font-dmsans text-white ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}>
					Firstname Lastname
				</h1>
				<h1
					class={`font-dmsans text-white opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
				>
					Client
				</h1>
			</div>
		</div>
		<div
			class={`bg-white flex justify-center items-center ${innerWidth > 1100 ? 'w-[33%] h-[150px]' : 'w-[100%] h-[100px]'}`}
		>
			<img
				src="profile_pic.jpg"
				alt="profile_pic"
				class={`object-cover mx-2 rounded-full ${innerWidth > 1100 ? 'h-[75px] w-[75px]' : 'h-[50px] w-[50px]'}`}
			/>
			<div class="flex flex-col mx-2">
				<h1 class={`font-dmsans text-black ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}>
					Firstname Lastname
				</h1>
				<h1
					class={`font-dmsans text-black opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
				>
					Client
				</h1>
			</div>
		</div>
	</div>
</div>



<style>
	.inner-shadow {
		box-shadow: inset 0px -600px 1000px 100px rgba(0, 0, 0, 0.692);
	}
	.shadow1 {
		box-shadow: -40px 40px 50px 20px rgba(0, 0, 0, 0.318);
	}
	.shadow2 {
		box-shadow: 40px 40px 50px 20px rgba(0, 0, 0, 0.318);
	}
	.low-z {
		z-index: -2;
	}
</style>
