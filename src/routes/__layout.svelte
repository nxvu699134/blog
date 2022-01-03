<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import WaveBackground from '$lib/components/WaveBackground.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { colorScheme } from '$lib/states/global';
	import type { ColorScheme } from '$lib/states/global';
	import '$lib/css/global.scss';
	import '$lib/css/font-awesome-icons/css/all.css';

	onMount(() => {
		$colorScheme = (localStorage.getItem('color-scheme') as ColorScheme) || 'light';
		colorScheme.subscribe((value) => {
			document.documentElement.setAttribute('color-scheme', value);
			localStorage.setItem('color-scheme', value);
		});
	});
</script>

<Header />
<WaveBackground />
<main>
	<slot />
</main>
<Footer />
