<script>
	import Service from '$lib/components/Service.svelte';

	const serviceDetails = {
		label: 'correction optiques',
		image: '/images/prestations/correction-optiques.jpg',
		description:
			"Notre service de correction d'optiques est la solution idéale pour améliorer l'apparence et la sécurité de votre voiture. Les phares opaques et rayés peuvent rendre votre voiture moins attrayante et moins sûre sur la route. Notre équipe de professionnels expérimentés peut remettre à neuf vos optiques en éliminant les rayures et les taches pour une apparence neuve. Nous utilisons des produits de qualité supérieure pour une protection durable et une finition lisse et uniforme. En plus d'améliorer l'apparence de votre voiture, la correction d'optiques peut également améliorer votre sécurité sur la route, en améliorant la visibilité nocturne.",
		services: [
			{
				label: 'correction',
				price: '50 euros TTC / optique'
			}
		]
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Correction optiques</title>
</svelte:head>

<Service {serviceDetails} />
