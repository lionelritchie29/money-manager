import { json, type RequestHandler } from '@sveltejs/kit';
import { KEY } from '../../../constants/key';
import jwt from 'jsonwebtoken';
import type { User } from '../../../types/User';
import { PRIVATE_JWT_SECRET } from '$env/static/private';
import { dev } from '$app/environment';

export const POST: RequestHandler = async ({ request, cookies }) => {
	try {
		const user: User = await request.json();
		const ONE_DAY = 60 * 60 * 24;
		const token = jwt.sign(user, PRIVATE_JWT_SECRET, { expiresIn: ONE_DAY });
		cookies.set(KEY.CURRENT_USER_TOKEN, token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: !dev,
			maxAge: ONE_DAY
		});
		return json({ success: true });
	} catch (e: unknown) {
		console.error(e);
		return json({ success: false });
	}
};
