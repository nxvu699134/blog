<script context="module" lang="ts">
	export const load = ({ url }) => ({
		props: {
			key: url.pathname
		}
	});
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import WaveBackground from '$lib/components/WaveBackground.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/css/global.scss';
	export let key: string;
</script>

<svelte:head>
	<script>
		const colorScheme = localStorage.getItem('color-scheme') || 'dark';
		document.documentElement.setAttribute('color-scheme', colorScheme);
	</script>
</svelte:head>

<Header />
<WaveBackground />
{#key key}
	<main in:fly={{ x: -16, duration: 200, delay: 200 }} out:fly={{ x: 16, duration: 200 }}>
		<slot />
	</main>
{/key}
<Footer />
