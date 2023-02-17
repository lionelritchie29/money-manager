import type { ApiResponse } from '../../../../types/Response';
import type { Wallet } from '../../../../types/Wallet';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const { id } = params;
	const walletFetchResponse = await fetch(`/api/wallets/${id ?? ''}`);
	const walletResponse: ApiResponse<Wallet> = await walletFetchResponse.json();

	return { walletResponse };
};

export const ssr = false;
