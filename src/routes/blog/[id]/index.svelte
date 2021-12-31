<script context="module">
	import { postMetas } from '$lib/data/internalResource';

	export function load({ page }) {
		const { id } = page.params;
		const post = postMetas.find((p) => p.id === id);
		if (post) {
			return {
				props: {
					component: post.component
				}
			};
		}
		return {
			props: {
				component: null
			}
		};
	}
</script>

<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let component: SvelteComponent;
</script>

<svelte:component this={component} />
