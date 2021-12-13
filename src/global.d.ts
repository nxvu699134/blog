/// <reference types="@sveltejs/kit" />

interface IPostCard {
	title: string;
	description: string;
	date: string;
	tags: Array<string>;
	link: string;
}
