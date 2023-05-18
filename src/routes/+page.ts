import type { PageLoad } from './$types';
import { postMetas } from '$lib/data/internalResource';

export const load = (() => {
	return {
		posts: postMetas
	};
}) satisfies PageLoad;
