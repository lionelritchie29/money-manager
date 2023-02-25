import type { PageLoad } from './$types';
import type { ApiResponse } from '../../types/Response';
import type { Wallet } from '../../types/Wallet';
import type { Record } from '../../types/Record';

export const load: PageLoad = async ({ fetch }) => {
	const userWalletsFetchResponse = await fetch('/api/wallets');
	const userWalletsResponse: ApiResponse<Wallet[]> = await userWalletsFetchResponse.json();

	const recordFetchResponse = await fetch(`/api/records`);
	const recordResponse: ApiResponse<Record[]> = await recordFetchResponse.json();

	const incomeTotal = recordResponse.data.reduce((prev, curr) => {
		if (curr.type === 'Income') {
			return prev + curr.amount;
		}
		return prev;
	}, 0);

	const expenseTotal = recordResponse.data.reduce((prev, curr) => {
		if (curr.type === 'Expense') {
			return prev + curr.amount;
		}
		return prev;
	}, 0);

	const netTotal = incomeTotal - expenseTotal;

	return { userWalletsResponse, incomeTotal, expenseTotal, netTotal };
};

export const ssr = false;
