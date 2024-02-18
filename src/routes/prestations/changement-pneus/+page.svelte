<script>
	import Service from '$lib/components/Service.svelte';

	const serviceDetails = {
		label: 'changement de pneus',
		image: '/images/prestations/changement-pneus.jpg',
		description:
			"Les pneus sont l'un des éléments les plus importants de votre voiture, car ils assurent la sécurité, la stabilité et les performances de votre véhicule. Les pneus usés, abîmés ou mal ajustés peuvent affecter votre capacité à contrôler votre voiture, réduire la traction sur la route et augmenter le risque d'accident. Il est donc essentiel de changer vos pneus régulièrement pour garantir une conduite en toute sécurité. En utilisant notre service professionnel de changement de pneus, vous pouvez vous assurer que vos pneus sont correctement installés, équilibrés et ajustés à la pression optimale pour une conduite sûre et confortable.",
		services: [
			{
				label: 'changement',
				price: '18 euros TTC / pneu'
			}
		]
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Changement de pneus</title>
</svelte:head>
<Service {serviceDetails} />
