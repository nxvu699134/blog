/// <reference types="@sveltejs/kit" />

type IPost = {
	title: string;
	desc: string;
	date: string;
	tags: Array<string>;
	href: string;
};

interface IPostMeta extends IPost {
	render: Function;
}
