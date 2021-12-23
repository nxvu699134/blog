<script lang="ts">
	import { page } from '$app/stores';
	import ButtonIcon from '$lib/ui/ButtonIcon.svelte';
	import meta from '$lib/meta/site_info';
	import Domino from '$lib/components/Domino.svelte';

	let isToggled = false;
	$: curPath = $page.path;

	const onToggle = () => {
		isToggled = !isToggled;
	};

	const items = [
		{ path: '/', label: 'Home' },
		{ path: '/posts', label: 'Posts' },
		{ path: '/about', label: 'About' }
	];

	const getRandom = (max: number) => {
		return Math.floor(Math.random() * (max - 1)) + 1;
	};
	let yPosition: number;
</script>

<svelte:window bind:scrollY={yPosition} />

<header>
	<a href={meta.siteUrl}>
		<Domino left={getRandom(6)} right={getRandom(6)} size={0.5} />
	</a>
	{#if !isToggled}
		<ButtonIcon class="toggle-btn soft-up-200" icon="fas fa-bars" on:click={onToggle} size="lg" />
	{:else}
		<ButtonIcon class="toggle-btn" icon="fas fa-times" on:click={onToggle} size="lg" />
	{/if}
	<nav>
		<ul id="navigation" class:stick={yPosition >= 16} class:hide={!isToggled}>
			{#each items as { path, label }}
				<a class="soft-transition" class:active={curPath == path} on:click={onToggle} href={path}>
					{label}
				</a>
			{/each}
		</ul>
	</nav>
</header>
<div class="backdrop" class:hide={!isToggled} on:click={onToggle} />

<style>
	header {
		--header-height: 4rem;
		--padding-x: var(--spacing-400);
		background-color: var(--color-main-bg);
		box-shadow: var(--shadow-outset-200);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--header-height);
		border-radius: var(--border-radius);
		padding: 0 var(--padding-x);
		margin-bottom: var(--spacing-500);
		position: sticky;
		top: 0;
		z-index: 9000;
	}

	header :global(.toggle-btn) {
		position: absolute;
		top: auto;
		bottom: auto;
		right: var(--padding-x);
		z-index: 9999;
	}

	#navigation {
		background-color: var(--color-main-bg);
		position: fixed;
		top: 0;
		right: 1rem;
		padding: min(10vh, 10rem) var(--spacing-400);
		font-size: 1.125rem;
		box-shadow: var(--shadow-outset-200);
		display: flex;
		flex-direction: column;
		gap: 0.75em;
		min-width: 10rem;
		width: min(48%, 12rem);
		z-index: 9000;
		opacity: 1;
		transition: opacity 0.3s linear, z-index 0.3s linear;
	}

	#navigation.stick {
		margin-top: 0;
	}

	#navigation.hide {
		opacity: 0;
		box-shadow: var(--shadow-inset-200);
		z-index: -1;
		visibility: hidden;
	}

	#navigation a {
		padding: 0.75rem 1.5rem;
		border-radius: var(--border-radius);
		font-size: var(--font-size-500);
	}

	#navigation a.active {
		box-shadow: var(--shadow-inset-200);
	}

	.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-main-bg);
		z-index: 2000;
		filter: blur(1rem);
		opacity: 0.8;
		transition: opacity 0.3s linear, z-index 0.3s linear;
	}

	.backdrop.hide {
		opacity: 0;
		z-index: -1;
	}

	@media only screen and (min-width: 40em) {
		header :global(.toggle-btn) {
			display: none;
		}

		#navigation,
		#navigation.hide {
			all: unset;
			display: flex;
		}

		.backdrop {
			display: none;
		}
	}
</style>
