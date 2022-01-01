<script context="module">
	import { postMetas } from '$lib/data/internalResource';
	export function load() {
		return {
			props: {
				posts: postMetas
			}
		};
	}
</script>

<script lang="ts">
	import Input from '$lib/ui/Input.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import CardsLayout from '$lib/components/CardsLayout.svelte';
	import Section from '$lib/ui/Section.svelte';

	export let posts: IPostMeta[] = [];
	let searchText: string;
</script>

<Section title="all posts">
	<div class="search-bar">
		<Input preIcon="fas fa-search" value={searchText} />
	</div>
	<CardsLayout>
		{#each posts as post}
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
