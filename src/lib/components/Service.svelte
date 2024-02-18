<script>
	import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';

	export let serviceDetails;
</script>

<div class="flex items-center gap-3 opacity-70 mb-5">
	<a href="/">accueil</a>
	<span class="small-icon"><FaChevronRight /></span>
	<a href="/prestations">prestations</a>
</div>

<h1 class="title title-spacing">{serviceDetails.label}</h1>
<div class="flex gap-10">
	<div class="2xl:w-3/4">
		<div
			class="h-96 bg-no-repeat bg-cover bg-center"
			style="background-image: url('{serviceDetails.image}'); filter: grayscale(100%);"
		></div>
		<p class="my-10 xl:my-15">{serviceDetails.description}</p>
		<table class="w-full text-left">
			<caption class="text-left">tarifs de la prestation</caption>
			<thead>
				<tr>
					<th scope="col">service</th>
					<th scope="col">tarif (à partir de)</th>
				</tr>
			</thead>
			<tbody>
				{#each serviceDetails.services as { label, price }}
					<tr>
						<th scope="row" class="opacity-100">{label}</th>
						<td class="centered pb-2">{price}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<aside class="hidden 2xl:flex flex-col w-1/4 text-links gap-10">
		<div class="contact-card">
			<h2 class="mb-2">adresses</h2>
			<a href="https://maps.app.goo.gl/zfqm2HHLGGLwkmBD8" target="_blank"
				>49 Rue de Morat, 68000 Colmar</a
			>
			<a href="https://maps.app.goo.gl/71V3Cf8ocD84VQyJ6" target="_blank"
				>33 Av. de Belgique, 68110 Illzach</a
			>
		</div>
		<div class="contact-card">
			<h2 class="mb-2">contact</h2>
			<a href="tel:+33771104470">07 71 10 44 70</a>
			<a href="mailto:contact@avenirdetailing.fr" class="mb-1">contact@avenirdetailing.fr</a>
			<a
				href="https://www.instagram.com/avenir.detailing/"
				target="_blank"
				class="flex items-center"
				><div class="w-5 mr-2"><FaInstagram /></div>
				avenir.detailing</a
			>
		</div>
		<div class="contact-card">
			<h2 class="mb-2">horaires d'ouverture</h2>
			<p class="font-semibold">Illzach</p>
			<p>lundi à vendredi : 8h - 12h / 13h30 - 17h30</p>
			<p class="font-semibold">Colmar</p>
			<p>sur rendez-vous</p>
		</div>
	</aside>
</div>

<style lang="postcss">
	.contact-card {
		@apply flex flex-col px-5;
	}

	th[scope='col'] {
		@apply pt-5 xl:pt-10 xl:pb-5;
	}
</style>
