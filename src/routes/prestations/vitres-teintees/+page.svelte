<script>
	import Service from '$lib/components/Service.svelte';

	const serviceDetails = {
		label: 'vitres teintées',
		image: '/images/prestations/vitres-teintees.jpeg',
		description:
			"Nos vitres teintées professionnelles offrent de nombreux avantages pour votre voiture et pour vous-même. En plus de donner un nouveau look à votre voiture, elles offrent une protection solaire accrue pour vous et vos passagers, en bloquant jusqu'à 99% des rayons UV nocifs. Cela peut aider à réduire la chaleur à l'intérieur de votre voiture, améliorer le confort de conduite et prolonger la durée de vie de l'intérieur de votre voiture en empêchant la décoloration et la détérioration des matériaux. De plus, nos films de qualité supérieure offrent une intimité accrue, vous permettant de vous sentir plus en sécurité et plus à l'aise dans votre voiture. En choisissant notre service professionnel de vitres teintées, vous pouvez être sûr d'une installation précise et d'un travail de qualité supérieure pour un résultat impeccable.",
		services: [
			{
				label: 'pose de film',
				price: '250 euros TTC'
			}
		]
	};
</script>

<svelte:head>
	<title>Avenir Detailing | Vitres teintées</title>
</svelte:head>
<Service {serviceDetails} />
