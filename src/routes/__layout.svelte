<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import WaveBackground from '$lib/components/WaveBackground.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/css/global.scss';
</script>

<svelte:head>
	<script>
		const colorScheme = localStorage.getItem('color-scheme') || 'dark';
		document.documentElement.setAttribute('color-scheme', colorScheme);
	</script>
</svelte:head>

<Header />
<WaveBackground />
<main>
	<slot />
</main>
<Footer />
