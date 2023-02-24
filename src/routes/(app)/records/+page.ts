import type { Record } from '../../../types/Record';
import type { ApiResponse } from '../../../types/Response';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const recordFetchResponse = await fetch(`/api/records`);
	const recordResponse: ApiResponse<Record[]> = await recordFetchResponse.json();

	return { recordResponse };
};
