<script>
	import Service from '$lib/components/Service.svelte';

	const serviceDetails = {
		label: 'nettoyage approfondi',
		image: '/images/prestations/nettoyage-approfondi.jpg',
		description:
			"Notre service de nettoyage approfondi est la solution idéale pour redonner à votre voiture son apparence neuve. Nous comprenons que la saleté et la poussière peuvent s'accumuler rapidement dans votre voiture, ce qui peut rendre l'intérieur de votre voiture inconfortable et peu attrayant. Notre équipe de professionnels expérimentés utilise des techniques avancées pour nettoyer en profondeur chaque recoin de votre voiture, y compris les tapis, les sièges, les panneaux de porte et le tableau de bord. Nous travaillons avec des produits de qualité supérieure pour éliminer la saleté, les taches et les odeurs, pour une finition impeccable.",
		services: [
			{
				label: 'nettoyage intérieur',
				price: '99 euros TTC'
			},
			{
				label: 'nettoyage intérieur extérieur',
				price: '119 euros TTC'
			},
			{
				label: 'supplément poils de chien',
				price: '15 euros TTC'
			},
			{
				label: 'supplément voiture non vidée',
				price: '10 euros TTC'
			},
			{
				label: 'nettoyage cuir',
				price: '30 euros TTC'
			}
		]
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Nettoyage approfondi</title>
</svelte:head>
<Service {serviceDetails} />
