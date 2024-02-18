<script>
	import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte';

	export let services;
</script>

<div class="mt-10 mb-8 xl:mt-16 xl:mb-14 grid-cols-3 flex flex-col gap-3 xl:grid xl:gap-12">
	{#each services as { icon, label, description, href }}
		<div class="py-6 border-t hover:border-white duration-500">
			<div class="icon">
				<svelte:component this={icon} />
			</div>
			<h3 class="subtitle my-3">{label}</h3>

			<p class="text-justify mb-4">{description}</p>
			<a {href} class="flex items-center gap-3 opacity-70 hover:opacity-100 duration-200"
				><div class="small-icon"><FaChevronRight /></div>
				en savoir plus</a
			>
		</div>
	{/each}
</div>
