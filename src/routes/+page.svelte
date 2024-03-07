<script>
	import SlideCta from '$lib/components/SlideCta.svelte';
	import ServicesList from '$lib/components/ServicesList.svelte';
	import MdLocalCarWash from 'svelte-icons/md/MdLocalCarWash.svelte';
	import FaCar from 'svelte-icons/fa/FaCar.svelte';
	import FaPaintBrush from 'svelte-icons/fa/FaPaintBrush.svelte';
	import { onMount } from 'svelte';

	let imgDiv;
	let nbImg = 12;
	onMount(() => {
		imgDiv.style.backgroundImage = `url('/images/car/${nbImg}.webp')`;
	});
	$: innerWidth = 1920;

	function handleMousemove(event) {
		if (window.innerWidth >= 768) {
			nbImg = Math.round(((event.clientX / window.innerWidth) * 100) / 2);
			if (nbImg === 0) nbImg = 1;
			imgDiv.style.backgroundImage = `url('/images/car/${nbImg}.webp')`;
		}
	}


	const services = [
		{
			icon: MdLocalCarWash,
			label: 'nettoyage approfondi',
			description:
				"Votre véhicule mérite l'excellence. C'est pourquoi nous offrons un nettoyage minutieux et intégral effectué à la main, afin d'éliminer efficacement saleté, poussière et les taches les plus persistantes. Optez pour le meilleur du nettoyage automobile.",
			href: '/prestations/nettoyage-approfondi'
		},
		{
			icon: FaPaintBrush,
			label: 'service de detailing',
			description:
				"Le detailing est l'art de rendre votre voiture aussi belle que le jour où vous l'avez achetée. Avec notre service de detailing professionnel, nous offrons une attention personnalisée à chaque détail de votre voiture pour offrir un résultat optimal.",
			href: '/prestations/detailing'
		},
		{
			icon: FaCar,
			label: 'protection céramique',
			description:
				"L'application de céramique sur la carrosserie est une excellente façon de protéger votre voiture tout en améliorant son apparence. Nous proposons un service de qualité supérieure pour une application et un résultat impeccable.",
			href: '/prestations/ceramique'
		}
	];

	const faq = [
		{
			question: "combien de temps dure l'effet de la céramique après application ?",
			answer:
				"Les résultats diffèrent selon la mise en situation du véhicule. Nous préconisons un lavage par mois sans produits chimiques afin d'obtenir une durée moyenne de 6 mois de résistance."
		},
		{
			question: 'vos produits ont-elles une garantie ?',
			answer:
				"Nous nous efforçons de prendre les meilleurs produits pour chaque service proposé. Nous sommes d'ailleurs agréé pour des produits comme la céramique avec la société MATRIXCERAMICS."
		},
		{
			question: 'comment puis-je obtenir un devis pour vos services ?',
			answer:
				'Vous pouvez obtenir un devis en ligne en remplissant notre formulaire de demande de devis ou en nous appelant directement pour discuter de vos besoins en matière de detailing automobile.'
		},
		{
			question:
				"quels sont les types de nettoyage que vous proposez pour l'intérieur de ma voiture ?",
			answer:
				"Nous proposons des services de nettoyage en profondeur pour l'intérieur de votre voiture, y compris le nettoyage des sièges, des tapis, des panneaux de porte et du tableau de bord."
		}
	];

	function handleQuestionClick(event) {
		const target = event.target;
		target.nextElementSibling?.classList.toggle('hidden');
		event.target.classList.toggle('opacity-70');
	}
</script>

<svelte:head>
	<title>Avenir Detailing | Colmar & Illzach</title>
</svelte:head>
<svelte:window bind:innerWidth />
<svelte:body on:mousemove={handleMousemove} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section id="mousemove" class="pb-20 xl:py-44 xl:mb-28">
	<div class="lg:flex">
		<div class="lg:w-1/2">
			<h1 class="text-2xl md:text-2xl lg:text-4xl xl:text-5xl text-center lg:text-left">
				centre esthétique & detailing
			</h1>
			<p class="mt-10 mb-8 xl:my-20">
				Situé à Colmar dans le Haut-Rhin, <strong>avenir detailing</strong> est un centre de detailing
				automobile qui place la satisfaction client au cœur de ses priorités. Nous offrons une gamme
				complète de services de nettoyage automobile, allant du nettoyage de base au traitement complet
				de la carrosserie, comme l'application de film PPF ou de céramique.
			</p>
			<SlideCta label="obtenir un devis en ligne" href="/contact" centered={true} />

		</div>

		<div class="lg:w-1/2 bg-contain bg-center bg-no-repeat h-64 lg:h-auto" bind:this={imgDiv}>
		</div>
	</div>
</section>

<section class="pb-20 xl:pb-44">
	<div class="flex justify-between items-center pb-4">
		<h2 class="title">
			{#if innerWidth >= 768}découvrez
			{/if}nos prestations
		</h2>
		<SlideCta label="voir plus" href="/prestations" />
	</div>

	<ServicesList {services} />
</section>

<section class="pb-20 xl:pb-44">
	<h2 class="title title-spacing">foire aux questions</h2>
	<div class="flex flex-col-reverse xl:flex-row">
		<div class="xl:w-1/3 flex flex-col gap-4 md:gap-2">
			<SlideCta label="nous appeler" href="tel:+33771104470" />
			<SlideCta label="nous envoyer un mail" href="mailto:contact@avenirdetailing.fr" />
		</div>
		<div class="xl:w-2/3">
			{#each faq as { question, answer }}
				<div class="mb-5 xl:mb-7">
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<h3
						class="pb-2 cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl opacity-70 hover:opacity-100 duration-150"
						on:click={handleQuestionClick}
						on:keydown={(event) => {
							handleQuestionClick(event);
						}}
					>
						{question}
					</h3>
					<p class="hidden mt-3 opacity-100">{answer}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
