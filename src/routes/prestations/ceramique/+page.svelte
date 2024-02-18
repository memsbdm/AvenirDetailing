<script>
	import Service from '$lib/components/Service.svelte';

	const serviceDetails = {
		label: 'ceramique',
		image: '/images/prestations/ceramique.jpg',
		description:
			"Notre service d'application de céramique sur la carrosserie est la solution idéale pour protéger votre voiture contre les éléments extérieurs. La céramique est un revêtement de protection transparent qui offre une protection durable contre les rayures, les impacts, les intempéries et les rayons UV nocifs. Il aide à prévenir la décoloration et la dégradation de la peinture, tout en offrant une résistance accrue aux contaminants de la route tels que la saleté et la poussière. En plus de fournir une protection supérieure, l'application de céramique peut également améliorer l'apparence de votre voiture, en donnant une finition lisse et brillante qui dure des années. Notre équipe de professionnels expérimentés utilise des produits de qualité supérieure pour garantir une application précise et un résultat impeccable.",
		services: [
			{
				label: 'application céramique',
				price: '480 euros TTC'
			}
		]
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Céramique</title>
</svelte:head>

<Service {serviceDetails} />
