<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '$lib/css/global.css';
	import '$lib/css/fonts.css';
	import '$lib/css/theme.css';
</script>

<div class="page-wrapper">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.page-wrapper {
		max-width: 1080px;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		padding: var(--spacing-400);
	}
</style>
