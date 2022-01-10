/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

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
