<script lang="ts">
	import Card from '$lib/ui/Card.svelte';
	// TODO: This layout is used for SEO Tag
</script>

<Card class="mdsvex-layout">
	<div class="mdsvex-content">
		<slot />
	</div>
</Card>

<style lang="scss">
	:global(.mdsvex-layout) {
		margin-top: var(--spacing-600);
	}

	.mdsvex-content {
		max-width: 600px;
		margin: 0 auto;
	}
</style>
