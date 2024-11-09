<script>
	import { onMount } from 'svelte';
	import { property, properties, getProperty, getAllProperties, loading, getAllPropertiesExceptSelected, getAllPropertiesFiltered } from '../store/store';
	import Navbar from '../components/navbar.svelte';
	import Saos from "saos";

	//get screen size
	$: innerWidth = 1000;
	$: innerHeight = 1000;

	const locationItems = ['All Locations', 'Pampanga', 'Bulacan', 'Manila', 'Quezon', 'Cebu'];
	const typeItems = ['All Types', 'House', 'Mansion', 'Apartment', 'Condominium'];
	const priceItems = [ 
		'Any Price',
		[1000, 4999],
		[5000, 24999],
		[25000, 99999],
		[100000, 499999],
		500000
	];

	let searchFilter = '';
	let locationFilter = 'All Locations';
	let typeFilter = 'All Types';
	let priceFilter = 'Any Price';
	let showAll = false;

	onMount(() => {
		loading.set(true);
		getAllPropertiesFiltered(searchFilter, locationFilter, typeFilter, priceFilter, showAll);
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
		<a href="#propertyList" class={` hover:opacity-70 flex items-center`}>
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
<Saos animation={"from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"} >
<div
	class={`min-w-[100%] bg-white flex pt-[100px] pb-[100px]  ${innerWidth > 1100 ? '' : 'flex-col'}`} 
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
			class={`mt-4  font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[20px] w-[100%]' : 'text-[10px]'}`}
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
</Saos>


<!--property list-->

<div class="min-w-[100%] bg-gray-200 min-h-auto mt-[100px]" id="propertyList" >
	
	<div
		class={`mx-auto w-[70%]  ${innerWidth > 1100 ? 'pt-[200px] pb-[200px]' : 'pt-[100px] pb-[100px]'}`}
	>
		<div class="h-1 w-[169px] bg-gradient-to-r from-yellow-500 to-black rounded-sm"></div>
		<h1 class={`mt-4 font-dmsans font-bold ${innerWidth > 1100 ? 'text-[50px]' : 'text-[30px]'}`}>
			Find your next place to live
		</h1>
		<div
			class={`mt-12 w-[100%] bg-white rounded-2xl ${innerWidth > 1100 ? 'h-[100px]' : 'h-[200px]'}`}
		>
			<ul class="h-[100%] w-[100%]">
				<li
					class={`flex h-[100%] w-[100%] ${innerWidth > 1100 ? 'items-center' : 'flex-col justify-center'}`}
				>
					<div
						class={`flex items-center bg-white  ${innerWidth > 1100 ? 'w-[25%] h-[100%] rounded-tl-2xl rounded-bl-2xl' : 'h-[25%] w-[100%] rounded-tl-2xl rounded-tr-2xl'}`}
					>
					<input type="text" id="searchSelect"
					class={`h-[80%] w-[80%] max-h-[40px] my-4 mx-8 pl-3 rounded-lg bg-white border-gray-200 border-[1px] flex items-center ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`} placeholder="Search..."
					on:keyup={() => {
						searchFilter = document.getElementById("searchSelect").value;
						getAllPropertiesFiltered(searchFilter, locationFilter, typeFilter, priceFilter, showAll);
						}}	>
					</div>
					<div
						class={`bg-gray-200 ${innerWidth > 1100 ? 'h-[100%] w-[1px]' : 'h-[1px] w-[100%]'}`}
					></div>

					<select
					id="locationSelect"
						class={`flex items-center px-8 bg-white font-dmsans text-black ${innerWidth > 1100 ? 'w-[25%] h-[100%] text-[17px]' : 'h-[25%] w-[100%] text-[10px]'} hover:brightness-90`}
					
						on:change={() => {
							locationFilter = document.getElementById("locationSelect").value;
							getAllPropertiesFiltered(searchFilter, locationFilter, typeFilter, priceFilter, showAll);
							}}	>
					{#each locationItems as item}
					<option value={item} class=""
						>{item}</option
					>
				{/each}
					</select>

					<div
						class={`bg-gray-200 ${innerWidth > 1100 ? 'h-[100%] w-[1px]' : 'h-[1px] w-[100%]'}`}
					></div>

					<select
					id="typeSelect"
						class={`flex items-center px-8 bg-white font-dmsans text-black ${innerWidth > 1100 ? 'w-[25%] h-[100%] text-[17px]' : 'h-[25%] w-[100%] text-[10px]'} hover:brightness-90`}
						on:change={() => {
							typeFilter = document.getElementById("typeSelect").value;
							getAllPropertiesFiltered(searchFilter, locationFilter, typeFilter, priceFilter, showAll);
							}}>
						{#each typeItems as item}
							<option value={item} class=""
								>{item}</option
							>
						{/each}
					</select>
					<div
						class={`bg-gray-200 ${innerWidth > 1100 ? 'h-[100%] w-[1px]' : 'h-[1px] w-[100%]'}`}
					></div>


					<select
					id="priceSelect"
						class={`flex items-center px-8 bg-white font-dmsans text-black ${innerWidth > 1100 ? 'w-[25%] h-[100%] rounded-tr-2xl rounded-br-2xl text-[17px]' : 'h-[25%] w-[100%] rounded-bl-2xl rounded-br-2xl text-[10px]'} hover:brightness-90`}
						on:change={() => {
							priceFilter = document.getElementById("priceSelect").value;
							getAllPropertiesFiltered(searchFilter, locationFilter, typeFilter, priceFilter, showAll);
							}}>
					{#each priceItems as item}
					<option value={item} class="">
						{#if item == "Any Price"}
						{item}
						{:else if item.length == 2}
						{item[0]} to {item[1]}
						{:else}
						> {item}
						{/if}
						</option
					>
				{/each}
					</select>
				</li>
			</ul>
		</div>
		<div class="w-[150px] flex mt-4 h-[60px] mx-auto bg-white rounded-2xl items-center">
			<input type="checkbox" id="showAll" class={`mx-4 w-[30px] h-[30px] ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`} 
			on:change={() => {
				showAll = !showAll;
				console.log(showAll);
				getAllPropertiesFiltered(searchFilter, locationFilter, typeFilter, priceFilter, showAll);
				}}
				>
			<label for="showAll" class={`${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>Show All Properties</label><br>
		</div>
		<div class="w-[100%] flex flex-wrap mt-8">
			{#each $properties as property}
				<a
					href={`/property/${property.id}`}
					class="hover:brightness-75 mx-auto"
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
<Saos animation={"from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"} >
<div class={`min-w-[100%] bg-white flex ${innerWidth > 1100 ? '' : 'flex-col'}`}>
	<div
		class={` ${innerWidth > 1100 ? 'mr-auto ml-[15%] mt-[150px] w-[31%]' : 'w-[70%] mx-[15%] mb-[50px]  pt-[100px]'}`}
	>
		<div class="h-1 w-[169px] bg-gradient-to-r from-yellow-500 to-black rounded-sm"></div>
		<h1 class={`mt-4  font-dmsans font-bold ${innerWidth > 1100 ? 'text-[50px]' : 'text-[30px]'}`}>
			You're in good hands
		</h1>
		<p
			class={`mt-4 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[20px] w-[100%]' : 'text-[10px]'}`}
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
</Saos>

<!--youre in good hands 3-->
<div
	class={`w-[100%] bg-gradient bg-gradient-to-tr from-black to-yellow-950  flex flex-col items-center ${innerWidth > 1100 ? 'mt-[200px] py-[150px]' : 'mt-[100px] py-[100px]'}`}
>
<Saos class={`w-[100%] flex flex-col items-center justify-center`} animation={"fade 1s linear both"} >
	<div
		class="h-1 w-[169px] bg-gradient-to-r from-yellow-500 via-transparent to-transparent rounded-sm mx-auto"
	></div>

	<h1
		class={`mt-4 font-dmsans font-bold text-white text-center mx-auto ${innerWidth > 1100 ? 'text-[50px]' : 'text-[30px]'}`}
	>
		You're in good hands
	</h1>
	<p
		class={`mt-4 w-[70%] font-dmsans leading-[28px] opacity-70 text-white text-center mx-auto ${innerWidth > 1100 ? 'text-[20px]' : 'text-[10px]'}`}
	>
		jhasgfj sdjhafbjksagfsa hjsadfjdskjfias jhagfigasddkfiasd jhsagfhkasgdifgs jafhgasgfis
		hagfigsaifgsd hasuhgfiadsgifgdsa augfisagifgasd sagfiusadgi segfuiasgfuas uiasgfigasif
		asugfisadgifgsa asugfasgfigsa ayugfiouasgfigs augfsagigfs gasugfiasgfiesgh augfiaesgfiagsif
		auigsigaisfdagfa iuagfiosgifgisag agfsiagfidsgag
	</p>
	<div class={`mx-auto mt-8 ${innerWidth > 1100 ? 'h-[70px] w-[210px] ' : 'h-[30px] w-[100px] '}`}>
	<a href="/#" class={`hover:brightness-75 mx-auto `}>
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
</Saos>
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
	select:focus{
		border: thin solid gray;
		
	}
	@keyframes -global-from-left {
  0% {
    transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
}
@keyframes -global-from-right {
  0% {
    transform: rotateX(50deg) translateX(200vw) skewX(50deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
}
@keyframes -global-fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
	
</style>
