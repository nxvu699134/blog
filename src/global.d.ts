/// <reference types="@sveltejs/kit" />

interface IMetaPost {
	title: string;
	description: string;
	date: string;
	tags: Array<string>;
	link: string;
}
