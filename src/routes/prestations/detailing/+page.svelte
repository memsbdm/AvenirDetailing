<script>
	import Service from '$lib/components/Service.svelte';

	const serviceDetails = {
		label: 'detailing',
		image: '/images/prestations/detailing.jpg',
		description:
			"Notre service de detailing est la solution idéale pour ceux qui cherchent à améliorer l'apparence et la performance de leur voiture. Nous offrons une gamme complète de services de nettoyage, de réparation et de protection pour une expérience de conduite optimale. Notre équipe de professionnels expérimentés utilise des techniques avancées pour nettoyer en profondeur chaque recoin de votre voiture, en éliminant la saleté, la poussière et les taches pour une finition impeccable. Nous travaillons également pour restaurer les pièces intérieures de votre voiture, y compris les sièges, les tapis et les panneaux de porte, pour leur redonner une apparence neuve.",
		services: [
			{
				label: 'detailing',
				price: '249 euros TTC'
			}
		]
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Detailing</title>
</svelte:head>

<Service {serviceDetails} />
