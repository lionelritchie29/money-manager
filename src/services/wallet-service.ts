import { collection, getDocs, query, where } from 'firebase/firestore';
import { BaseService } from './base-service';
import type { Wallet } from '../types/Wallet';

export class WalletService extends BaseService {
	public async getUserWallets(userId: string): Promise<Wallet[]> {
		const q = query(collection(this.db, 'wallets'), where('userId', '==', userId));
		const querySnapshots = await getDocs(q);
		return querySnapshots.docs.map((doc) => doc.data()) as Wallet[];
	}
}
