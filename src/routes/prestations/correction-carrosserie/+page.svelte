<script>
	import Service from '$lib/components/Service.svelte';

	const serviceDetails = {
		label: 'correction carrosserie',
		image: '/images/prestations/correction-carrosserie.jpg',
		description:
			"Notre service de correction de carrosserie consiste en une réparation professionnelle des impacts légers et des rayures en surface sur votre voiture. Notre équipe de professionnels expérimentés utilisent des techniques avancées pour éliminer les défauts de surface et rendre à votre voiture son aspect d'origine. Nous travaillons avec précision pour un résultat sans défaut, utilisant des produits de qualité supérieure pour une finition lisse et impeccable. Nous sommes fiers de fournir un service de haute qualité pour rendre à votre voiture son apparence d'origine et préserver sa valeur pour les années à venir.",
		services: [
			{
				label: 'correction',
				price: '70 euros TTC / heure'
			},
			{
				label: 'lustrage',
				price: '45 euros TTC'
			}
		]
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Correction carrosserie</title>
</svelte:head>
<Service {serviceDetails} />
