<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/posts.json');

		if (res.status == 200) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(await res.json())
		};
	}
</script>

<script lang="ts">
	import Input from '$lib/ui/Input.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import CardsLayout from '$lib/components/CardsLayout.svelte';

	export let posts: IMetaPost[] = [];
	let searchText: string;
</script>

<h2 class="page-title">All Posts</h2>
<div class="search-bar">
	<Input preIcon="fas fa-search" value={searchText} class="search-input" />
</div>
<CardsLayout>
	{#each posts as post}
		<PostCard data={post} />
	{/each}
</CardsLayout>

<style>
	.page-title {
		text-align: center;
		margin-bottom: var(--spacing-500);
	}

	.search-bar {
		width: 100%;
		margin-bottom: var(--spacing-500);
	}

	.search-bar :global(.search-input) {
		width: 100%;
	}
</style>
