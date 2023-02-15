export interface Wallet {
	userId: string;
	currency: 'IDR';
	color: string;
	excludeFromStatistic: boolean;
	name: string;
	initialBalance: number;
	type: 'Cash';
}
