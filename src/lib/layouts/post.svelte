<script lang="ts">
	import Card from '$lib/ui/Card.svelte';
	// TODO: This layout is used for SEO Tag
</script>

<Card class="mdsvex-layout">
	<slot />
</Card>

<style lang="scss">
	:global(.mdsvex-layout) {
		margin-top: var(--spacing-600);
	}
</style>
