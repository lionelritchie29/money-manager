import type { PageServerLoad } from './$types';
import { WalletService } from '../../../services/wallet-service';
import { KEY } from '../../../constants/key';

export const load: PageServerLoad = async ({ locals, cookies }) => {
	const token = cookies.get(KEY.CURRENT_USER_TOKEN);
	const user = locals.user;
	const walletService = new WalletService(token);
	const wallets = await walletService.getUserWallets(user.uid);

	return { wallets };
};
