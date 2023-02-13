import { json } from '@sveltejs/kit';
import { KEY } from '../../../constants/key';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
	try {
		cookies.delete(KEY.CURRENT_USER_TOKEN);
		return json({ success: true });
	} catch (e: unknown) {
		console.error(e);
		return json({ success: false });
	}
};
