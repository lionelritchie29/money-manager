import { json, type RequestHandler } from '@sveltejs/kit';
import { KEY } from '../../../constants/key';
import jwt from 'jsonwebtoken';
import type { User } from '../../../types/User';
import { PRIVATE_JWT_SECRET } from '$env/static/private';

export const POST: RequestHandler = async ({ request, cookies }) => {
	try {
		const user: User = await request.json();
		const token = jwt.sign(user, PRIVATE_JWT_SECRET);
		cookies.set(KEY.CURRENT_USER_TOKEN, token);
		return json({ success: true });
	} catch (e: unknown) {
		console.error(e);
		return json({ success: false });
	}
};
