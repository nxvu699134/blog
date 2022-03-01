import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import Icons from 'unplugin-icons/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), preprocess()],
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: vercel(),
		vite: {
			plugins: [Icons({ compiler: 'svelte' })]
		}
	}
};

export default config;
