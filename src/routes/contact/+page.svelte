<script>
	import { enhance } from '$app/forms';
	import { Moon } from 'svelte-loading-spinners';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import SlideCta from '$lib/components/SlideCta.svelte';

	export let form;

	let secondInputServices = {
		nettoyageComplet: false,
		rectificationJantes: false,
		correctionOptiques: false,
		changementPneus: false
	};
	let loading = false;
	const submitForm = () => {
		loading = true;

		return async ({ update }) => {
			loading = false;
			scrollTo(0, 0);
			await update();
		};
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Contact</title>
</svelte:head>

<h1 class="title title-spacing">contact & devis en ligne</h1>

{#if !form?.success}
	<p>
		Remplissez le formulaire ci-dessous pour obtenir immédiatement une estimation de prix
		personnalisée en fonction des prestations que vous souhaitez.
	</p>
	<form method="POST" class="mt-10 mb-8 xl:mt-16 xl:mb-14" use:enhance={submitForm}>
		<div class="flex flex-col xl:grid grid-cols-3 gap-5 xl:gap-x-20 xl:gap-y-5">
			<div class="form__element">
				<label for="fullname">nom complet *</label>
				<input
					type="text"
					id="fullname"
					name="fullname"
					placeholder="ex: Pierre Durand"
					value={form?.fullname ?? ''}
					required
				/>
				{#if form?.errors.fullname}
					{#each form.errors.fullname as error}
						<small>{error}</small>
					{/each}
				{/if}
			</div>
			<div class="form__element">
				<label for="phone">téléphone *</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					placeholder="ex: 06 XX XX XX XX"
					value={form?.phone ?? ''}
					required
				/>
				{#if form?.errors.phone}
					{#each form.errors.phone as error}
						<small>{error}</small>
					{/each}
				{/if}
			</div>
			<div class="form__element">
				<label for="email">email *</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="ex: pierre@email.com"
					value={form?.email ?? ''}
					required
				/>
				{#if form?.errors.email}
					{#each form.errors.email as error}
						<small>{error}</small>
					{/each}
				{/if}
			</div>
			<div class="form__element">
				<label for="carType">type de véhicule *</label>
				<select
					id="carType"
					name="carType"
					required
					class="bg-black border-b py-2"
					value={form?.carType ?? ''}
				>
					<option value="">-- Choisissez le type de véhicule --</option>
					<option value="Berline">Berline</option>
					<option value="Break">Break</option>
					<option value="Cabriolet">Cabriolet</option>
					<option value="Camionnette">Camionnette</option>
					<option value="Coupé">Coupé</option>
					<option value="SUV">SUV</option>
				</select>
				{#if form?.errors.carType}
					{#each form.errors.carType as error}
						<small>{error}</small>
					{/each}
				{/if}
			</div>
			<div class="form__element">
				<label for="carModel">modèle de véhicule *</label>
				<input
					type="text"
					id="carModel"
					name="carModel"
					placeholder="ex: Peugeot 208"
					value={form?.carModel ?? ''}
					required
				/>
				{#if form?.errors.carModel}
					{#each form.errors.carModel as error}
						<small>{error}</small>
					{/each}
				{/if}
			</div>
			<div class="form__element">
				<label for="location">localisation *</label>
				<select
					id="location"
					name="location"
					required
					class="bg-black border-b py-2"
					value={form?.location ?? ''}
				>
					<option value="">-- Choisissez la localisation --</option>
					<option value="Colmar">Colmar</option>
					<option value="Illzach">Illzach</option>-
				</select>
				{#if form?.errors.location}
					{#each form.errors.location as error}
						<small>{error}</small>
					{/each}
				{/if}
			</div>
		</div>
		<p class="ff_title my-3">services</p>
		<div>
			<div class="flex gap-x-10 flex-wrap gap-y-3 checkbox">
				<div>
					<input type="checkbox" id="ceramique" name="service" value="ceramique" />
					<label for="ceramique">Céramique</label>
				</div>
				<div>
					<input type="checkbox" id="film-ppf" name="service" disabled value="film-ppf" />
					<label for="film-ppf">Film PPF (prochainement)</label>
				</div>
				<div>
					<input type="checkbox" id="detailing" name="service" value="detailing" />
					<label for="detailing">Detailing</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="nettoyage-complet"
						name="service"
						value="nettoyage-complet"
						bind:checked={secondInputServices.nettoyageComplet}
					/>
					<label for="nettoyage-complet">Nettoyage complet</label>
				</div>
				<div>
					<input type="checkbox" id="traitement-odeurs" name="service" value="traitement-odeurs" />
					<label for="traitement-odeurs">Traitement odeurs</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="rectification-jantes"
						name="service"
						value="rectification-jantes"
						bind:checked={secondInputServices.rectificationJantes}
					/>
					<label for="rectification-jantes">Rectification jantes</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="correction-optiques"
						name="service"
						value="correction-optiques"
						bind:checked={secondInputServices.correctionOptiques}
					/>
					<label for="correction-optiques">Correction optiques</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="correction-carrosserie"
						name="service"
						value="correction-carrosserie"
					/>
					<label for="correction-carrosserie">Correction carrosserie</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="changement-pneus"
						name="service"
						value="changement-pneus"
						bind:checked={secondInputServices.changementPneus}
					/>
					<label for="changement-pneus">Changement de pneus</label>
				</div>
				<div>
					<input type="checkbox" id="vitres-teintees" name="service" value="vitres-teintees" />
					<label for="vitres-teintees">Vitres teintées</label>
				</div>
			</div>
			{#if form?.errors.service}
				{#each form.errors.service as error}
					<small>{error}</small>
				{/each}
			{/if}
			<div class="flex flex-col xl:grid grid-cols-3 gap-5 xl:gap-x-20 xl:gap-y-5 mt-7 md:mt-10">
				{#if secondInputServices.nettoyageComplet}
					<div class="form__element">
						<label for="type-nettoyage">type de nettoyage *</label>
						<select
							id="type-nettoyage"
							name="type-nettoyage"
							required
							class="bg-black border-b py-2"
							value={form?.typeNettoyage ?? ''}
						>
							<option value="">-- Choisissez le type de nettoyage --</option>
							<option value="interieur">Intérieur</option>
							<option value="interieur-exterieur">Intérieur et extérieur</option>
						</select>
						{#if form?.errors.typeNettoyage}
							{#each form.errors.typeNettoyage as error}
								<small>{error}</small>
							{/each}
						{/if}
					</div>
				{/if}

				{#if secondInputServices.rectificationJantes}
					<div class="form__element">
						<label for="nombre-jantes">nombre de jantes à rectifier *</label>
						<input
							type="number"
							id="nombre-jantes"
							name="nombre-jantes"
							min="1"
							max="4"
							value={form?.nombreJantes ?? ''}
							required
						/>
						{#if form?.errors.nombreJantes}
							{#each form.errors.nombreJantes as error}
								<small>{error}</small>
							{/each}
						{/if}
					</div>
				{/if}

				{#if secondInputServices.correctionOptiques}
					<div class="form__element">
						<label for="nombre-optiques">nombre d'optiques à corriger *</label>
						<input
							type="number"
							id="nombre-optiques"
							name="nombre-optiques"
							min="1"
							max="2"
							value={form?.nombreOptiques ?? ''}
							required
						/>
						{#if form?.errors.nombreOptiques}
							{#each form.errors.nombreOptiques as error}
								<small>{error}</small>
							{/each}
						{/if}
					</div>
				{/if}

				{#if secondInputServices.changementPneus}
					<div class="form__element">
						<label for="nombre-pneus">nombre de pneus à changer *</label>
						<input
							type="number"
							id="nombre-pneus"
							name="nombre-pneus"
							min="1"
							max="4"
							value={form?.nombrePneus ?? ''}
							required
						/>
						{#if form?.errors.nombrePneus}
							{#each form.errors.nombrePneus as error}
								<small>{error}</small>
							{/each}
						{/if}
					</div>
				{/if}
			</div>
		</div>
		<div class="mt-10">
			{#if loading}
				<Moon color="#fff" size="30" />
			{:else}
				<SlideCta label="obtenir le devis" button={true} />
			{/if}
		</div>
		{#if form?.errorSendingMail}
			<small class="opacity-100">Une erreur est survenue lors de l'envoi du formulaire.</small>
		{/if}
	</form>
{:else}
	<h2 class="subtitle title-spacing">votre devis personnalisé</h2>
	{#if form?.data.hasPricePerHour}
		<p class="mb-10 opacity-100">
			Attention votre devis contient des tarifs horaires non prix en compte dans le prix final
		</p>
	{/if}
	<div>
		<div class="flex mb-5">
			<h3 class="w-64">service</h3>
			<h3>tarif (à partir de)</h3>
		</div>

		{#each form?.data.prices as service}
			{#if service && service.perHour}
				<div class="flex mb-2">
					<p class="w-64">{service.label}</p>
					<p>{service.price} euros TTC / heure</p>
				</div>
			{:else if service && !service.perHour}
				<div class="flex mb-2">
					<p class="w-64">{service.label}</p>
					<p>{service.price} euros TTC</p>
				</div>
			{/if}
		{/each}

		<div class="flex mt-5">
			<p class="w-64 opacity-100 font-semibold">Total</p>
			<p class="opacity-100 font-semibold">{form?.data.totalPrice} euros TTC</p>
		</div>
	</div>

	<div class="mt-10 lg:mt-20">
		<SlideCta label="nouvelle estimation" href="/contact" />
	</div>
{/if}

<div class="lg:flex text-links gap-10 justify-between lg:mt-28 mt-20">
	<div class="contact-card">
		<h2 class="mb-2">contact</h2>
		<a href="tel:+33771104470">07 71 10 44 70</a>
		<a href="mailto:contact@avenirdetailing.fr" class="mb-1">contact@avenirdetailing.fr</a>
		<a href="https://www.instagram.com/avenir.detailing/" target="_blank" class="flex items-center"
			><div class="w-5 mr-2"><FaInstagram /></div>
			avenir.detailing</a
		>
	</div>
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
		<h2 class="mb-2">horaires d'ouverture</h2>
		<p class="font-semibold">Illzach</p>
		<p>lundi à vendredi : 8h - 12h / 13h30 - 17h30</p>
		<p class="font-semibold">Colmar</p>
		<p>sur rendez-vous</p>
	</div>
</div>

<style lang="postcss">
	label {
		@apply font-medium opacity-70 duration-150;
	}

	select {
		@apply bg-black;
	}

	input, select {
		background-color: transparent;
		outline: none;
		border-radius: 0;
		@apply border-b opacity-80 focus:opacity-100 outline-none duration-150 py-1;
	}

	.form__element {
		@apply mb-3 md:mb-7 flex flex-col;
	}

	.ff_title {
		font-family: 'Monument Extended';
	}

	.checkbox label {
		font-family: 'Kumbh Sans', sans-serif;
		@apply ml-1;
	}

	small {
		@apply text-red opacity-100;
	}

	.contact-card {
		@apply flex flex-col mb-10 lg:mb-0;
	}
</style>
