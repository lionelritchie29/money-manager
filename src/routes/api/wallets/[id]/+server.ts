import { json, type RequestHandler } from '@sveltejs/kit';
import { WalletService } from '../../../../services/wallet-service';
import { KEY } from '../../../../constants/key';
import type { ApiResponse } from '../../../../types/Response';
import type { Wallet } from '../../../../types/Wallet';

export const GET: RequestHandler = async ({ cookies, params }) => {
	let response: ApiResponse<Wallet | null>;
	const { id } = params;

	try {
		const token = cookies.get(KEY.CURRENT_USER_TOKEN);
		const walletService = new WalletService(token);
		const wallet = await walletService.getWallet(id ?? '');

		response = {
			data: wallet,
			message: 'Get wallet detail',
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

export const DELETE: RequestHandler = async ({ cookies, params }) => {
	let response: ApiResponse<null>;
	const { id } = params;

	try {
		const token = cookies.get(KEY.CURRENT_USER_TOKEN);
		const walletService = new WalletService(token);
		await walletService.deleteUserWallet(id ?? '');

		response = {
			data: null,
			message: 'Delete wallet success',
			success: true
		};
	} catch (e: unknown) {
		console.error(e);
		response = {
			data: null,
			message: 'Failed when deleting wallet.',
			success: false
		};
	}

	return json(response);
};
