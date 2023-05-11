<script lang="ts">
	import { page } from '$app/stores';
	import siteInfo from '$lib/meta/siteInfo';

	export let title: string;
	export let desc: string = '';
	export let keywords: string[] = [];
	export let isArticle = false;
</script>

<svelte:head>
	<title>{`${title} || ${siteInfo.siteName}`}</title>
	<meta name="description" content={desc || siteInfo.desc} />
	<meta
		name="keywords"
		content={keywords.join(',').toLowerCase() || siteInfo.keywords.join(',').toLowerCase()}
	/>
	<link rel="canonical" href="{siteInfo.siteUrl}{$page.url.pathname}" />

	<!-- Open Graph -->
	<meta property="og:type" content={isArticle ? 'article' : 'website'} />
	<meta property="og:url" content="{siteInfo.siteUrl}{$page.url.pathname}" />
	<meta property="og:title" content={title || siteInfo.siteName} />
	<meta property="og:description" content={desc || siteInfo.desc} />
</svelte:head>
