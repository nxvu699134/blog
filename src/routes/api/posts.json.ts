import type { RequestHandler } from '@sveltejs/kit';
import { getAllPosts } from '$lib/data/internalResource';

export const get: RequestHandler<Array<string>> = async (request) => {
	// request.locals.userid comes from src/hooks.js
	const posts = await getAllPosts();
	console.log(posts);

	if (!posts) {
		return { body: [] };
	}

	return { body: posts };
};
