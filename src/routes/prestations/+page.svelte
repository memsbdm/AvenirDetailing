<script>
	import ServicesList from '$lib/components/ServicesList.svelte';
	import MdLocalCarWash from 'svelte-icons/md/MdLocalCarWash.svelte';
	import FaSprayCan from 'svelte-icons/fa/FaSprayCan.svelte';
	import FaCar from 'svelte-icons/fa/FaCar.svelte';
	import GiCartwheel from 'svelte-icons/gi/GiCartwheel.svelte';
	import GiCarWheel from 'svelte-icons/gi/GiCarWheel.svelte';
	import FaPaintBrush from 'svelte-icons/fa/FaPaintBrush.svelte';
	import FaCarCrash from 'svelte-icons/fa/FaCarCrash.svelte';
	import Optic from '$lib/components/svg/Optic.svelte';
	import Ppf from '$lib/components/svg/Ppf.svelte';
	import TintedWindow from '$lib/components/svg/TintedWindow.svelte';

	const services = [
		{
			icon: MdLocalCarWash,
			label: 'nettoyage approfondi',
			description:
				"Votre véhicule mérite l'excellence. C'est pourquoi nous offrons un nettoyage minutieux et intégral effectué à la main, afin d'éliminer efficacement saleté, poussière et les taches les plus persistantes. Optez pour le meilleur du nettoyage automobile.",
			href: '/prestations/nettoyage-approfondi'
		},
		{
			icon: FaPaintBrush,
			label: 'service de detailing',
			description:
				"Le detailing est l'art de rendre votre voiture aussi belle que le jour où vous l'avez achetée. Avec notre service de detailing professionnel, nous offrons une attention personnalisée à chaque détail de votre voiture pour offrir un résultat optimal.",
			href: '/prestations/detailing'
		},
		{
			icon: FaCar,
			label: 'protection céramique',
			description:
				"L'application de céramique sur la carrosserie est une excellente façon de protéger votre voiture tout en améliorant son apparence. Nous proposons un service de qualité supérieure pour une application et un résultat impeccable.",
			href: '/prestations/ceramique'
		},
		{
			icon: Optic,
			label: 'correction optiques',
			description:
				"Vos phares sont ternes et jaunis ? Notre service de correction d'optiques est là pour remédier à cela. Nous pouvons restaurer la clarté et la luminosité de vos phares pour une meilleure visibilité sur la route et une sécurité optimale.",
			href: '/prestations/correction-optiques'
		},
		{
			icon: FaCarCrash,
			label: 'correction carrosserie',
			description:
				"Donnez à votre voiture une apparence comme neuve avec notre service de correction de carrosserie. Nous pouvons éliminer les rayures, les impacts et autres défauts de surface pour redonner à votre voiture son éclat d'origine.",
			href: '/prestations/correction-carrosserie'
		},
		{
			icon: GiCartwheel,
			label: 'rectification de jantes',
			description:
				"Les jantes abîmées peuvent affecter l'apparence et les performances de votre voiture. Notre service de rectification de jantes peut remettre vos jantes à neuf pour une apparence et une conduite impeccables.",
			href: '/prestations/rectification-jantes'
		},
		{
			icon: GiCarWheel,
			label: 'changement de pneus',
			description:
				'Confiez-nous le changement de pneus de votre voiture et roulez en toute sécurité. Notre service de changement de pneus est conçu pour assurer une installation rapide et précise de vos nouveaux pneus.',
			href: '/prestations/changement-pneus'
		},
		{
			icon: Ppf,
			label: 'pose de film ppf',
			description:
				'Protégez votre voiture des impacts de la route avec notre service de pose de film PPF. Nous utilisons des films de qualité supérieure pour protéger votre carrosserie contre les rayures, les impacts et les débris.',
			href: '/prestations/film-ppf'
		},
		{
			icon: TintedWindow,
			label: 'vitres teintées',
			description:
				"Donnez un nouveau look à votre voiture avec notre installation de vitres teintées professionnelles. Protégez-vous des rayons UV nocifs et profitez d'une intimité accrue en toute sécurité et d'un confort de conduite idéal.",
			href: '/prestations/vitres-teintees'
		},
		{
			icon: FaSprayCan,
			label: 'traitement odeurs',
			description:
				"Oubliez les odeurs de cigarette, de nourriture ou d'animaux avec notre traitement d'odeurs de pointe. Nous utilisons des techniques avancées pour éliminer les odeurs en profondeur, laissant votre voiture avec une odeur propre et fraîche.",
			href: '/prestations/traitement-odeurs'
		}
	];
</script>

<svelte:head>
	<title>Avenir Detailing | Prestations</title>
</svelte:head>

<h1 class="title title-spacing">nos prestations</h1>

<ServicesList {services} />
