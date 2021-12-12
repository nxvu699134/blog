<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '$lib/css/global.css';
	import '$lib/css/fonts.css';
	import '$lib/css/theme.css';
</script>

<Header />
<main>
	<slot />
</main>

<style>
</style>
