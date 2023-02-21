import type { ApiResponse } from '../../types/Response';
import type { Wallet } from '../../types/Wallet';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data, fetch }) => {
	const userWalletsFetchResponse = await fetch('/api/wallets');
	const userWalletsResponse: ApiResponse<Wallet[]> = await userWalletsFetchResponse.json();
	const user = data.user;

	return {
		user,
		userWalletsResponse
	};
};
