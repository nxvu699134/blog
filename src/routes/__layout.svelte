<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import WaveBackground from '$lib/components/WaveBackground.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/css/global.scss';
	import '$lib/css/font-awesome-icons/css/all.css';

	onMount(() => {
		const colorScheme = localStorage.getItem('color-scheme') || 'light';
		document.documentElement.setAttribute('color-scheme', colorScheme);
	});
</script>

<Header />
<WaveBackground />
<main>
	<slot />
</main>
<Footer />
