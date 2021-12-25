import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

const config = {
	preprocess: [mdsvex(mdsvexConfig), preprocess()],
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: vercel(),
		target: '#main-body'
	}
};

export default config;
