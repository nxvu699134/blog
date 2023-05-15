// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		type IPost = {
			title: string;
			desc: string;
			date: string;
			tags: Array<string>;
			href: string;
			id: string;
		};

		interface IPostMeta extends IPost {
			component: SvelteComponent;
		}
	}
}

export {};
