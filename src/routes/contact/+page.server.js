import { fail } from '@sveltejs/kit';

import { validate } from '$lib/validate';
import { calculate } from '$lib/calculate';
import { sendMail } from '$lib/mailer';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = validate(formData);

		if (data.errors.hasErrors) {
			return fail(400, data);
		}
		const prices = calculate(data);

		try {
			await sendMail(data, prices);
		} catch (error) {
			return fail(500, { errorSendingMail: true });
		}

		return { success: true, data: prices };
	}
};
