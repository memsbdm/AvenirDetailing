<script>
	import Logo from '$lib/components/svg/Logo.svelte';
	import { page } from '$app/stores';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import FaPhone from 'svelte-icons/fa/FaPhone.svelte';
	import SlideCta from './SlideCta.svelte';

	const navigationLinks = [
		{ label: 'accueil', href: '/' },
		{ label: 'prestations', href: '/prestations' },
		{ label: 'contact', href: '/contact' }
	];
</script>

<header class="x-spacing py-3">
	<nav>
		<div class="hidden lg:flex justify-between items-center">
			<a href="/" aria-label="Page d'accueil"><Logo /></a>
			<ul class="flex">
				{#each navigationLinks as { label, href }}
					<li>
						<a
							{href}
							class="px-5 py-2 hover:opacity-100 duration-150 {$page.url.pathname === href
								? ''
								: 'opacity-60'}">{label}</a
						>
					</li>
				{/each}
			</ul>
			<SlideCta label="07 71 10 44 70" href="tel:+33771104470" />
		</div>
		<div class="flex lg:hidden justify-between items-center">
			<button class="icon" aria-label="Bouton menu"><FaBars /></button>
			<a href="/"><Logo /></a>
			<a href="tel:+33771104470" class="icon" aria-label="Nous joindre par téléphone"><FaPhone /></a>
		</div>
	</nav>
</header>
