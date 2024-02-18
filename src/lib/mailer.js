import { db } from '$lib/db/index';
import { v4 as uuidv4 } from 'uuid';
import { setDoc, doc } from 'firebase/firestore';

export async function sendMail(data, prices) {
	const services = prices.prices
		.map((service) => `<li>${service.label} : ${service.price}€</li>`)
		.join('');

	const emailToSend = {
		to: 'contact@avenirdetailing.fr',
		message: {
			subject: '[Site] Nouveau devis!',
			html: `
                Une nouvelle demande de devis a été faite sur le site. Voici les détails:
                <h2>Informations client</h2>
                <ul>
                    <li>Nom complet : ${data.fullname}</li>
                    <li>Numéro de téléphone : ${data.phone}</li>
                    <li>Email : ${data.email}</li>
                    <li>Type de voiture : ${data.carType}</li>
                    <li>Modèle de voiture : ${data.carModel}</li>
                    <li>Localisation : ${data.location}</li>
                </ul>

                <h2>Informations devis</h2>
                <ul>
                    ${services}
                    <li>Montant total : ${prices.totalPrice}€</li>
                </ul>
            `
		}
	};
	const userDocument = doc(db, 'mail', uuidv4());
	await setDoc(userDocument, emailToSend);
}
