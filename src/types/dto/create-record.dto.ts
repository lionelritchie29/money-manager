export interface CreateRecordDto {
	type: string;
	walletId: string;
	amount: number;
	currency: string;
	date: Date;
	description: string;
}
