import type { Timestamp } from 'firebase/firestore';

export interface Record {
	amount: number;
	walletId: string;
	date: Date;
	description: string;
	currency: string;
	type: string;
	id: string;
	updatedAt: Timestamp;
	createdAt: Timestamp;
}
