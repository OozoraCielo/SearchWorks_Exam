<script>
    //get screen size
	$: innerWidth = 1100;
	$: innerHeight = 1100;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="fixed w-[100%] h-[100%] bg-gradient-to-tr from-black to-yellow-950 z-30 flex flex-col">
    <img src="/loading.png" alt="loading" class="spin mx-auto my-auto h-[100px] w-[100px]" >
    
</div>

<div class={`fixed z-40 aspect-square bg-black bottom-0 -mb-[20%] -ml-[20%] animate-spin6 opacity-40 pointer-events-none select-none touch-none ${innerWidth > innerHeight ? 'w-[60%]' : 'h-[50%] -ml-[30%]'}`}></div>

<div class={`fixed z-40 aspect-square bg-black bottom-0 -mb-[20%] -ml-[20%] animate-spin5 opacity-100 pointer-events-none select-none touch-none ${innerWidth > innerHeight ? 'w-[50%]' : 'h-[40%] -ml-[30%]'}`}></div>

<div class={`fixed z-40 aspect-square bg-black right-0 -mr-[20%] -mt-[20%] animate-spin4 opacity-20 pointer-events-none select-none touch-none ${innerWidth > innerHeight ? 'w-[50%]' : 'h-[40%] -ml-[30%]'}`}></div>

<div class="fixed w-[100%] h-[100%] z-40 flex">
    <img src="/logo.png" alt="logo" class="relative h-[46px] w-[168px] mt-auto mb-[50px] mx-auto" />
</div>
<style>
    @keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.spin {
    animation: spin infinite 3s linear;
}
</style>