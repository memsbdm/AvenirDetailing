<script>
	import Service from '$lib/components/Service.svelte';

	const serviceDetails = {
		label: 'film ppf',
		image: '/images/prestations/film-ppf.jpg',
		description:
			"Notre service de pose de film PPF est la solution idéale pour protéger votre voiture contre les dommages causés par les intempéries et les éléments extérieurs. Le film PPF est un revêtement transparent qui offre une protection durable contre les impacts, les rayures, les gravillons et autres débris de la route. Il est conçu pour absorber l'impact des pierres et des débris volants, évitant ainsi les dommages à la carrosserie de votre voiture. Notre équipe de professionnels expérimentés utilise des techniques avancées pour garantir une application précise et une protection optimale. Nous travaillons avec des produits de qualité supérieure pour assurer une finition lisse et uniforme qui dure des années. La pose de film PPF est une solution de protection de haute qualité qui peut aider à préserver la valeur de votre voiture pour les années à venir.",
		services: [
			{
				label: 'film ppf',
				price: 'bientôt disponible'
			}
		]
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Film PPF</title>
</svelte:head>
<Service {serviceDetails} />
