import { addDoc, collection, getDocs, query, setDoc, where } from 'firebase/firestore';
import { BaseService } from './base-service';
import type { Wallet } from '../types/Wallet';

export class WalletService extends BaseService {
	private collectionName = 'wallets';

	public async getUserWallets(userId: string): Promise<Wallet[]> {
		if (await this.isTokenValid()) {
			const q = query(collection(this.db, this.collectionName), where('userId', '==', userId));
			const querySnapshots = await getDocs(q);
			return querySnapshots.docs.map((doc) => doc.data()) as Wallet[];
		}
		return [];
	}

	public async addUserWallets(wallet: Wallet): Promise<boolean> {
		if (await this.isTokenValid()) {
			await addDoc(collection(this.db, this.collectionName), wallet);
			return true;
		}
		return false;
	}
}
