import type { PageLoad } from './$types';
import type { ApiResponse } from '../../types/Response';
import type { Wallet } from '../../types/Wallet';

export const load: PageLoad = async ({ fetch }) => {
	const userWalletsFetchResponse = await fetch('/api/wallets');
	const userWalletsResponse: ApiResponse<Wallet[]> = await userWalletsFetchResponse.json();

	return { userWalletsResponse };
};

export const ssr = false;
