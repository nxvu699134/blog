<script lang="ts">
	import type { PageData } from './$types';
	import Input from '$lib/ui/Input.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import CardsLayout from '$lib/components/CardsLayout.svelte';
	import Section from '$lib/ui/Section.svelte';
	import SeoTag from '$lib/components/SeoTag.svelte';
	import { debounce } from '$lib/utils/debounce';
	import IconSearch from '~icons/ri/search-line';

	export let data: PageData;
	let filteredPosts = data.posts;
	let searchText: string;
	const onSearch = debounce((query: string) => {
		if (query) {
			filteredPosts = data.posts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
		} else {
			filteredPosts = data.posts;
		}
	}, 500);

	$: onSearch(searchText);
</script>

<SeoTag title="Blog" />
<Section title="all posts">
	<div class="search-bar">
		<Input preIcon={IconSearch} bind:value={searchText} />
	</div>
	<CardsLayout>
		{#each filteredPosts as post}
			<PostCard data={post} />
		{/each}
	</CardsLayout>
</Section>

<style>
	.search-bar {
		width: 100%;
		margin-bottom: var(--spacing-500);
	}

	.search-bar :global(.search-input) {
		width: 100%;
	}
</style>
