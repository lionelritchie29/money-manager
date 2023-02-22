import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../wallets/[id]/$types';
import { KEY } from '../../../constants/key';
import type { CreateRecordDto } from '../../../types/dto/create-record.dto';
import { RecordService } from '../../../services/record-service';

export const POST: RequestHandler = async ({ cookies, request }) => {
	try {
		const token = cookies.get(KEY.CURRENT_USER_TOKEN);
		const dto: CreateRecordDto = await request.json();

		const recordService = new RecordService(token);
		const success = await recordService.addRecord(dto);
		if (!success) {
			return json({ success: false, message: 'Failed when adding new record' });
		}
		return json({ success: true });
	} catch (e: unknown) {
		console.error(e);
		return json({ success: false, message: 'An error occured.' });
	}
};
