import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
	const user = data.user;
	return {
		user
	};
};
