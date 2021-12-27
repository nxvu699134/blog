<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import WaveBackground from '$lib/components/WaveBackground.svelte';
	import '$lib/css/global.scss';
</script>

<Header />
<WaveBackground />
<main>
	<slot />
</main>
