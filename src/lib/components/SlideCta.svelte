<script>
	export let label;
	export let href = '/';
	export let centered = false;
	export let button = false;
</script>

<div class={centered ? 'flex justify-center' : ''}>
	{#if button}
		<button type="submit">{label}</button>
	{:else}
		<a {href}>{label}</a>
	{/if}
</div>

<style lang="postcss">
	a,
	button {
		position: relative;
		padding: 0.5rem 0.5rem;
		transition: color 250ms;
	}

	a:hover,
	button:hover {
		color: theme(colors.black);
	}

	a::after,
	button::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: theme(colors.white);
		z-index: -1;
		transition: all 400ms;
	}

	a:hover::after,
	button:hover::after {
		height: 100%;
	}
</style>
