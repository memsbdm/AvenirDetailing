function calculate(data) {
	const prices = [
		{
			service: 'ceramique',
			label: 'Céramique',
			price: 480
		},
		{
			service: 'detailing',
			label: 'Detailing',
			price: 250
		},
		{
			service: 'nettoyage-complet',
			label: 'Nettoyage complet',
			price: data.typeNettoyage === 'interieur' ? 99 : 119
		},
		{
			service: 'traitement-odeurs',
			label: 'Traitement odeurs',
			price: 129
		},
		{
			service: 'rectification-jantes',
			label: 'Rectification jantes',
			price: 90 * data.nombreJantes ?? NaN
		},
		{
			service: 'correction-optiques',
			label: 'Correction optiques',
			price: 50 * data.nombreOptiques ?? NaN
		},
		{
			service: 'correction-carrosserie',
			label: 'Correction carrosserie',
			price: 70,
			perHour: true
		},
		{
			service: 'changement-pneus',
			label: 'Changement pneus',
			price: 18 * data.nombrePneus ?? NaN
		},
		{
			service: 'vitres-teintees',
			label: 'Vitres teintées',
			price: 250
		}
	];

	// iterate over data.service and if the service is not in data.service, remove it from prices
	for (const key in prices) {
		if (!data.service.includes(prices[key].service)) {
			delete prices[key];
		}
	}

	// iterate over prices and calculate the total price
	let totalPrice = 0;
	for (const key in prices) {
		// if the service is priced per hour, don't add it to the total price
		if (prices[key].perHour === true) {
			continue;
		}
		totalPrice += prices[key].price;
	}

	let hasPricePerHour = false;
	// iterate over prices and check if there are services that are priced per hour
	for (const key in prices) {
		if (prices[key].perHour === true) {
			hasPricePerHour = true;
		}
	}
	return { prices, totalPrice, hasPricePerHour };
}

export { calculate };
