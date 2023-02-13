import { KEY } from './constants/key';
import jwt from 'jsonwebtoken';
import type { User } from './types/User';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const authToken = event.cookies.get(KEY.CURRENT_USER_TOKEN);

	if (authToken) {
		const user = (await jwt.decode(authToken)) as User;
		event.locals.user = user;
	}

	return await resolve(event);
};
