import jwt from 'jsonwebtoken';
import type { User } from '../types/User';
import type { Firestore } from 'firebase/firestore';
import { db } from '$lib/firebase';

export class BaseService {
	protected token = '';
	protected db: Firestore;

	constructor(accessToken?: string) {
		this.token = accessToken ?? '';
		this.db = db;
	}

	protected async isTokenValid() {
		if (!this.token) throw new Error('Authorization failed');
		const user = (await jwt.decode(this.token)) as User;
		if (!user) throw new Error('User not found');
		return true;
	}
}
