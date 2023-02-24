import { addDoc, collection, doc, getDocs, query, where } from 'firebase/firestore';
import { BaseService } from './base-service';
import type { CreateRecordDto } from '../types/dto/create-record.dto';
import type { Record } from '../types/Record';

export class RecordService extends BaseService {
	private parentCollectionName = 'wallets';
	private collectionName = 'records';

	public async addRecord(dto: CreateRecordDto) {
		if (await this.isTokenValid()) {
			const docRef = doc(this.db, this.parentCollectionName, dto.walletId);
			const recordDocRef = collection(docRef, this.collectionName);
			await addDoc(recordDocRef, {
				...dto,
				createdAt: new Date(),
				updatedAt: new Date()
			});
			return true;
		} else {
			return false;
		}
	}

	public async getUserRecords(userId: string) {
		if (await this.isTokenValid()) {
			const result: Record[] = [];

			const q = query(
				collection(this.db, this.parentCollectionName),
				where('userId', '==', userId)
			);

			const querySnapshots = await getDocs(q);
			await new Promise((resolve) => {
				querySnapshots.docs.forEach(async (doc) => {
					const recordRef = collection(
						this.db,
						this.parentCollectionName,
						doc.id,
						this.collectionName
					);
					const recordSnapshot = await getDocs(recordRef);
					recordSnapshot.docs.forEach((recordDoc) => {
						const data = {
							...recordDoc.data(),
							id: recordDoc.id
						};
						result.push(data as Record);

						if (result.length === querySnapshots.docs.length) {
							resolve(true);
						}
					});
				});
			});

			return result;
		}

		return [];
	}
}
