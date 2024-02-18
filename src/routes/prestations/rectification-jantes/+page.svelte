<script>
	import Service from '$lib/components/Service.svelte';

	const serviceDetails = {
		label: 'rectification jantes',
		image: '/images/prestations/rectification-jantes.jpg',
		description:
			"Notre service de rectification de jantes est la solution idéale pour ceux qui cherchent à restaurer l'apparence et la performance de leurs jantes. Les jantes abîmées peuvent affecter l'apparence et les performances de votre voiture, mais notre équipe de professionnels expérimentés peut les remettre à neuf pour un aspect neuf et une performance optimale. Nous utilisons des techniques avancées pour remettre les jantes en état, en éliminant les rayures, les bosses et les éraflures, pour une finition lisse et uniforme. Nous travaillons avec des produits de qualité supérieure pour une protection durable et une performance optimale de vos jantes.",
		services: [
			{
				label: 'rectification',
				price: '90 euros TTC / jante'
			}
		]
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Rectification de jantes</title>
</svelte:head>
<Service {serviceDetails} />
