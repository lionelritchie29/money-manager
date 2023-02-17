import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { BaseService } from './base-service';
import type { Wallet } from '../types/Wallet';

export class WalletService extends BaseService {
	private collectionName = 'wallets';

	public async getUserWallets(userId: string): Promise<Wallet[]> {
		if (await this.isTokenValid()) {
			const q = query(collection(this.db, this.collectionName), where('userId', '==', userId));
			const querySnapshots = await getDocs(q);
			return querySnapshots.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			}) as Wallet[];
		}
		return [];
	}

	public async getWallet(walletId: string): Promise<Wallet | null> {
		if (await this.isTokenValid()) {
			const docRef = doc(this.db, this.collectionName, walletId);
			const docSnap = await getDoc(docRef);

			if (!docSnap.exists()) return null;
			return { id: docSnap.id, ...docSnap.data() } as Wallet;
		}
		return null;
	}

	public async addUserWallets(wallet: Wallet): Promise<boolean> {
		const { id, ...payload } = wallet;
		if (await this.isTokenValid()) {
			await addDoc(collection(this.db, this.collectionName), payload);
			return true;
		}
		return false;
	}
}
