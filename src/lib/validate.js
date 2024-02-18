export function validate(formData) {
	const data = {
		fullname: formData.get('fullname') ?? '',
		phone: formData.get('phone') ?? '',
		email: formData.get('email') ?? '',
		carType: formData.get('carType') ?? '',
		carModel: formData.get('carModel') ?? '',
		location: formData.get('location') ?? '',
		service: formData.getAll('service') ?? '',
		nombrePneus: Number(formData.get('nombre-pneus')) ?? '',
		nombreJantes: Number(formData.get('nombre-jantes')) ?? '',
		nombreOptiques: Number(formData.get('nombre-optiques')) ?? '',
		typeNettoyage: formData.get('type-nettoyage') ?? '',
		errors: {
			hasErrors: false,
			fullname: [],
			phone: [],
			email: [],
			carType: [],
			carModel: [],
			location: [],
			service: [],
			nombrePneus: [],
			nombreJantes: [],
			nombreOptiques: [],
			typeNettoyage: []
		}
	};

	for (const key in data) {
		if (!data[key] || data[key].length === 0) {
			if (
				key !== 'typeNettoyage' &&
				key !== 'nombrePneus' &&
				key !== 'nombreJantes' &&
				key !== 'nombreOptiques'
			)
				data.errors[key].push(`Le champ est obligatoire`);
		}
	}

	const phoneRegex = /^\d{10}$/;
	if (!phoneRegex.test(data.phone)) {
		data.errors.phone.push('Numéro de téléphone invalide');
	}

	const emailRegex = /^\S+@\S+\.\S+$/;
	if (!emailRegex.test(data.email)) {
		data.errors.email.push('Adresse email invalide');
	}

	if (data.location !== 'Illzach' && data.location !== 'Colmar') {
		data.errors.location.push('Localisation invalide');
	}

	const services = [
		'ceramique',
		'detailing',
		'nettoyage-complet',
		'traitement-odeurs',
		'rectification-jantes',
		'correction-optiques',
		'correction-carrosserie',
		'changement-pneus',
		'vitres-teintees'
	];
	let serviceError = false;
	data.service.forEach((service) => {
		if (!services.includes(service)) {
			serviceError = true;
		}
	});

	if (serviceError === true) {
		data.errors.service.push('Service(s) invalide(s)');
	}

	if (data.service.includes('nettoyage-complet')) {
		if (data.typeNettoyage !== 'interieur' && data.typeNettoyage !== 'interieur-exterieur') {
			data.errors.typeNettoyage.push('Type de nettoyage invalide');
		}
	}

	if (data.service.includes('changement-pneus')) {
		if (data.nombrePneus < 1 || data.nombrePneus > 4) {
			data.errors.nombrePneus.push('Nombre de pneus invalide');
		}
	}

	if (data.service.includes('rectification-jantes')) {
		if (data.nombreJantes < 1 || data.nombreJantes > 4) {
			data.errors.nombreJantes.push('Nombre de jantes invalide');
		}
	}

	if (data.service.includes('correction-optiques')) {
		if (data.nombreOptiques < 1 || data.nombreOptiques > 2) {
			data.errors.nombreOptiques.push("Nombre d'optiques invalide");
		}
	}

	const carTypes = ['Break', 'Berline', 'Cabriolet', 'Camionnette', 'Coupé', 'SUV'];
	let carTypeError = false;
	if (!carTypes.includes(data.carType)) {
		carTypeError = true;
	}

	if (carTypeError === true) {
		data.errors.carType.push('Type de véhicule invalide');
	}

	for (const key in data.errors) {
		if (data.errors[key].length > 0) {
			data.errors.hasErrors = true;
		} else data.date = new Date().toISOString();
	}

	return data;
}
