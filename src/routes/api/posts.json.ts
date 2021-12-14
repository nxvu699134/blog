import type { EndpointOutput, RequestHandler } from '@sveltejs/kit';
import { getAllPostNames, getMetaPosts } from '$lib/data/internalResource';

const Header = {
	'content-type': 'application/json'
};
export const get: RequestHandler = async ({ query }): Promise<EndpointOutput> => {
	// request.locals.userid comes from src/hooks.js
	let postNames = await getAllPostNames();

	const limit = parseInt(query.get('limit'));
	if (limit) {
		postNames = postNames.slice(-limit);
	}

	const metas = await getMetaPosts(postNames);

	if (!metas) {
		return {
			status: 500,
			headers: Header,
			body: 'Fetch posts failed successful!'
		};
	}

	return { status: 200, headers: Header, body: JSON.stringify(metas) };
};
