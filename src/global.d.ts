/// <reference types="@sveltejs/kit" />

interface IMetaPost {
	title: string;
	desc: string;
	date: string;
	tags: Array<string>;
	href: string;
}
