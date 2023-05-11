<script lang="ts">
	import Blob1 from './_blobs/blob_1.svelte';
	import Blob2 from './_blobs/blob_2.svelte';
	import Blob3 from './_blobs/blob_3.svelte';
	import Blob4 from './_blobs/blob_4.svelte';
	import Blob5 from './_blobs/blob_5.svelte';

	let outsideClass = '';
	export { outsideClass as class };
	export let option: number = 0;
	export let opacity: number = 1;

	const blobs = [null, Blob1, Blob2, Blob3, Blob4, Blob5];
</script>

<svelte:component this={blobs[option]} class={outsideClass} {opacity} />
