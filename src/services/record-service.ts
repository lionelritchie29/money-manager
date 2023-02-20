import { addDoc, collection, doc } from 'firebase/firestore';
import { BaseService } from './base-service';
import type { CreateRecordDto } from '../types/dto/create-record.dto';

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
}
