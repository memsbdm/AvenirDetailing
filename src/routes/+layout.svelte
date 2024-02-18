<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';

	let menuOpen = false;

	function handleMenuClicked() {
		menuOpen = !menuOpen;
		if (menuOpen) {
			document.body.addEventListener('click', handleMenuClose)
			document.body.style.overflow = 'hidden'
		} else {
			document.body.removeEventListener('click', handleMenuClose)
		}
	}

	function handleMenuClose() {
		menuOpen = false
		document.body.removeEventListener('click', handleMenuClose)
		document.body.style.overflow = 'auto'
	}
</script>

<Header on:menuClicked={handleMenuClicked} />
{#if menuOpen}
	<Menu />
{/if}
<main class="container mx-auto x-spacing py-10 lg:py-20 xl:py-28">
	<slot />
</main>

<footer class="md:flex justify-between x-spacing mt-10 border-t py-5 text-links">
	<p class="opacity-100">Copyright © 2024 Avenir Detailing. Tous droits réservés.</p>
	<div class="flex flex-wrap gap-3 mt-1 md:mt-0">
		<a href="/mentions-legales">Mentions légales</a>
		<span>|</span>
		<a href="/cgv">Conditions générales de vente</a>
	</div>
</footer>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.black);
		color: theme(colors.white);
	}

	:global(h1, h2, h3, a, label, caption, button) {
		font-family: 'Monument Extended';
	}

	:global(p, ul, input, th, td, small) {
		@apply text-justify opacity-80;
		font-family: 'Kumbh Sans', sans-serif;
	}

	:global(p, input) {
		font-weight: 400;
	}

	:global(ul li) {
		font-weight: 500;
	}

	:global(a) {
		@apply text-xs sm:text-sm lg:text-base xl:text-lg;
	}

	:global(.text-links a) {
		@apply text-base opacity-80 hover:opacity-100 duration-150;
		font-family: 'Kumbh Sans', sans-serif;
	}

	:global(.title) {
		@apply text-lg md:text-xl lg:text-2xl xl:text-3xl;
	}

	:global(.subtitle) {
		@apply text-sm md:text-base lg:text-lg xl:text-xl;
	}

	:global(.x-spacing) {
		@apply px-3 md:px-6;
	}

	:global(.icon) {
		width: 32px;
	}

	:global(.small-icon) {
		width: 10px;
	}

	:global(.title-spacing) {
		@apply mb-10 xl:mb-16;
	}

	footer,
	footer a {
		@apply text-sm;
	}
</style>
