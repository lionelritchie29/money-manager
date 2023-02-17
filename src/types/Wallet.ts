export interface Wallet {
	id: string;
	userId: string;
	currency: string;
	color: string;
	excludeFromStatistic: boolean;
	name: string;
	initialBalance: number;
	type: string;
}
