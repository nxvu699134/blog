<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Size } from '$lib/ui/ui';

	let outsideClass = '';
	export { outsideClass as class };

	export let size: Size = 'md';
	export let href: string = null;

	const dispatch = createEventDispatcher();
	const onClick = () => dispatch('click');

	const classNames = `soft-transition soft-up-200 flex-center ${size} ${outsideClass}`;
</script>

{#if !href}
	<button class={classNames} on:click={onClick}>
		<slot />
	</button>
{:else}
	<a {href} class={classNames}>
		<slot />
	</a>
{/if}

<style>
	button,
	a {
		border-radius: var(--border-radius);
		width: fit-content;
	}

	button:not(:disabled):active,
	a:not(:disabled):active {
		box-shadow: var(--shadow-outset-000), var(--shadow-inset-200);
	}

	button:not(:disabled):hover,
	a:not(:disabled):hover {
		box-shadow: var(--shadow-outset-100), var(--shadow-inset-000);
	}

	button:focus {
		outline: 0;
	}

	button.md,
	a.md {
		padding: 0.375em 0.5em;
		font-size: var(--font-size-400);
	}

	button.lg,
	a.lg {
		padding: 0.5em 1em;
		font-size: var(--font-size-600);
	}
</style>
