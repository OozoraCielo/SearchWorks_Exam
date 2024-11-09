<script>
	//get screen size
	$: innerWidth = 1100;
	$: innerHeight = 1100;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="w-[100%] pt-[50px] pb-[100px] bg-gradient-to-tr from-black via-black to-yellow-950">
	<div class="w-[70%] flex mx-auto">
		<!-- upper part  -->
		<div class="flex items-center justify-center">
			<h1
				class={`text-white font-dmsans font-bold ${innerWidth > 1100 ? 'text-[42px]' : 'text-[20px]'}`}
			>
				Make your dreams a
				<span
					class={`text-yellow-500 font-dmsans font-bold ${innerWidth > 1100 ? 'text-[42px]' : 'text-[20px]'}`}
					>reality</span
				>
			</h1>
		</div>
		<a href="/#" class={`hover:brightness-75 ml-auto`}>
			<div
				class={`bg-yellow-600 rounded-tr-[10px] flex items-center justify-center ${innerWidth > 1100 ? 'h-[70px] w-[210px] ' : 'h-[30px] w-[100px] '}`}
			>
				<h1 class={`text-black font-dmsans ${innerWidth > 1100 ? 'text-[17px]' : 'text-[10px]'}`}>
					Work with us
				</h1>
				<h1
					class={`font-dmsans text-white ${innerWidth > 1100 ? 'text-[30px] ml-2 mb-1' : 'text-[15px] ml-1 mb-1'}`}
				>
					&rarr;
				</h1>
			</div>
		</a>
	</div>

	<div class="w-[70%] mx-auto mt-[50px] h-[1px] bg-gray-500"></div>

	<!-- lower part -->

	<div class={`w-[70%] flex mx-auto mt-[50px] ${innerWidth > 1100 ? '' : 'flex-col items-center'}`}>
		<div class={`flex flex-col ${innerWidth > 1100 ? 'w-[40%]' : ''}`}>
			<a href="/floor1" class="hover:brightness-75">
				<img src="/logo.png" alt="logo" class="h-[34px w-[128px]" />
			</a>
			<div class="flex">
				<a href="/" class="hover:brightness-75">
					<img src="/facebook.png" alt="facebook" class="w-[22px] h-[22px] mt-6" />
				</a>
				<a href="/" class="hover:brightness-75">
					<img src="/twitter.png" alt="twitter" class="w-[22px] h-[22px] ml-8 mt-6" />
				</a>
				<a href="/" class="hover:brightness-75">
					<img src="/instagram.png" alt="instagram" class="w-[22px] h-[22px] ml-8 mt-6" />
				</a>
			</div>
		</div>

		<div class={`flex flex-wrap${innerWidth > 1100 ? 'w-[60%] ml-auto' : 'mx-auto'}`}>
			<div class={`flex flex-col ${innerWidth > 1100 ? 'ml-auto mr-[100px]' : 'mt-[25px] mx-4'}`}>
				<h1
					class={`text-white font-bold font-dmsans ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
				>
					Column Heading
				</h1>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
			</div>
			<div class={`flex flex-col ${innerWidth > 1100 ? 'mr-[100px]' : 'mt-[25px] mx-4'}`}>
				<h1
					class={`text-white font-bold font-dmsans ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
				>
					Column Heading
				</h1>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
			</div>
			<div class={`flex flex-col ${innerWidth > 1100 ? '' : 'mt-[25px] mx-4'}`}>
				<h1
					class={`text-white font-bold font-dmsans ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
				>
					Column Heading
				</h1>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
				<a
					href="/"
					class={`hover:brightness-75 text-white mt-2 font-dmsans opacity-70 ${innerWidth > 1100 ? 'text-[15px]' : 'text-[10px]'}`}
					>Link goes here</a
				>
			</div>
		</div>
	</div>
</div>
