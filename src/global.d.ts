/// <reference types="@sveltejs/kit" />

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
