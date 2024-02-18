<script>
	import Service from '$lib/components/Service.svelte';

	const serviceDetails = {
		label: 'traitement odeurs',
		image: '/images/prestations/traitement-odeurs.jpeg',
		description:
			"Notre service de traitement d'odeurs est la solution idéale pour éliminer les odeurs désagréables de votre voiture. Nous comprenons que les odeurs persistantes peuvent rendre votre voiture moins confortable et moins agréable à conduire. Notre équipe de professionnels expérimentés utilise un kit spécialement conçu pour éliminer les odeurs les plus coriaces, y compris les odeurs de nourriture, de cigarette, de moisissure, de sueur et d'animaux. Nous travaillons avec des produits de qualité supérieure pour éliminer les odeurs à la source, plutôt que de simplement les masquer. Nous offrons également des conseils pour prévenir les odeurs à l'avenir et garder votre voiture propre et fraîche.",
		services: [
			{
				label: 'traitement odeurs',
				price: '129 euros TTC'
			}
		]
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Traitement odeurs</title>
</svelte:head>
<Service {serviceDetails} />
