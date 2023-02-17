import type { PageServerLoad, Actions } from './$types';
import { WalletService } from '../../../services/wallet-service';
import { KEY } from '../../../constants/key';
import type { Wallet } from '../../../types/Wallet';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, cookies }) => {
	const token = cookies.get(KEY.CURRENT_USER_TOKEN);
	const user = locals.user;
	const walletService = new WalletService(token);
	const wallets = await walletService.getUserWallets(user.uid);

	return { wallets };
};

export const actions: Actions = {
	create: async ({ request, locals, cookies }) => {
		try {
			const token = cookies.get(KEY.CURRENT_USER_TOKEN);
			const user = locals.user;
			const data = await request.formData();

			const color = data.get('color') as string;
			const currency = data.get('currency') as string;
			const excludeFromStatistic = data.get('excludeStat') === '1';
			const initialBalance = parseInt(data.get('initialBalance') as string);
			const name = data.get('name') as string;
			const type = data.get('type') as string;

			const wallet: Wallet = {
				id: '',
				userId: user.uid,
				color,
				currency,
				excludeFromStatistic,
				initialBalance,
				name,
				type
			};

			const walletService = new WalletService(token);
			const success = await walletService.addUserWallets(wallet);
			if (!success) {
				return fail(500, { message: 'Failed when adding new wallet' });
			}
		} catch (e: unknown) {
			console.error(e);
			return fail(500, { message: 'An error occured' });
		}
	}
};
