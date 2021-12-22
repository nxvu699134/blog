import type { EndpointOutput, RequestHandler } from '@sveltejs/kit';
import { postMetas } from '$lib/data/internalResource';

const Header = {
	'content-type': 'application/json'
};

export const get: RequestHandler = ({ query }): EndpointOutput => {
	let posts: IPost[] = postMetas;

	const limit = parseInt(query.get('limit'));
	if (limit) {
		posts = posts.slice(-limit);
	}

	// if (!posts) {
	//   return {
	//     status: 500,
	//     headers: Header,
	//     body: 'Fetch posts failed successful!'
	//   };
	// }

	return { status: 200, headers: Header, body: posts };
};
