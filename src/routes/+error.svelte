<script lang="ts">
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import Card from '$lib/ui/Card.svelte';
	import siteInfo from '$lib/meta/siteInfo';
	import Link from '$lib/ui/Link.svelte';
	let i = 0;
	const errorTxt = 'Sorry, something went wrong successfully. Wanna back';
	const speed = 72;
	let showHome = false;
	let timerId: ReturnType<typeof setTimeout>;
	const typeWriter = () => {
		if (i < errorTxt.length) {
			document.getElementById('errorTxt').innerHTML += errorTxt.charAt(i);
			i++;
		} else {
			showHome = true;
		}
	};

	onMount(() => {
		//Call this function here cuz document only ready in client's side
		timerId = setInterval(typeWriter, speed);
	});

	onDestroy(() => {
		clearInterval(timerId);
	});
</script>

<svelte:head>
	<title>{$page.status} | {siteInfo.siteName}</title>
</svelte:head>

<div class="error-container">
	<img src="/assets/imgs/megaman.gif" alt="Megaman said" />
	<Card class="error-message">
		<span id="errorTxt" />
		{#if showHome}
			<Link>Home?</Link>
		{/if}
	</Card>
</div>

<style lang="scss">
	@use '../lib/css/utils.scss' as *;

	.error-container {
		margin-top: var(--spacing-400);
		display: flex;
		flex-flow: column;
		width: 100%;
		align-items: center;

		img {
			width: 100%;
			max-width: 400px;
		}

		:global(.error-message) {
			margin-top: var(--spacing-400);
			border: 2px solid var(--color-black);
			font-size: var(--font-size-600);
			max-width: 600px;
			height: 7em;
			width: 100%;
			background: linear-gradient(
				180deg,
				var(--color-primary-000) 0%,
				var(--color-primary-100) 100%
			);
		}
	}

	@include for-tablet-and-desktop {
		.error-container {
			:global(.error-message) {
				height: auto;
			}
		}
	}
	@include for-dark-mode {
		.error-container {
			:global(.error-message) {
				border-color: var(--color-white);
				background: linear-gradient(
					180deg,
					var(--color-primary-800) 0%,
					var(--color-primary-1000) 100%
				);
			}
		}
	}
</style>
