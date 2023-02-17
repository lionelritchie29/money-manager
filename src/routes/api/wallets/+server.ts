import { json, type RequestHandler } from '@sveltejs/kit';
import { WalletService } from '../../../services/wallet-service';
import { KEY } from '../../../constants/key';
import type { ApiResponse } from '../../../types/Response';
import type { Wallet } from '../../../types/Wallet';

export const GET: RequestHandler = async ({ cookies, locals }) => {
	let response: ApiResponse<Wallet[] | null>;

	try {
		const token = cookies.get(KEY.CURRENT_USER_TOKEN);
		const user = locals.user;
		const walletService = new WalletService(token);
		const wallets = await walletService.getUserWallets(user.uid);

		response = {
			data: wallets,
			message: 'Get wallets for current user',
			success: true
		};
	} catch (e: unknown) {
		console.error(e);
		response = {
			data: null,
			message: 'Failed when getting wallets.',
			success: false
		};
	}

	return json(response);
};
