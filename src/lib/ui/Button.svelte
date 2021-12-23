<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Size } from '$lib/ui/ui';

	let outsideClass = '';
	export { outsideClass as class };

	export let size: Size = 'md';
	export let href: string = null;
	export let leftIcon: string = null;
	export let rightIcon: string = null;

	const dispatch = createEventDispatcher();
	const onClick = () => dispatch('click');

	const classNames = `soft-transition soft-up-200 flex-center ${size} ${outsideClass}`;
</script>

{#if !href}
	<button class={classNames} on:click={onClick}>
		{#if leftIcon}
			<i class={`left-icon ${leftIcon}`} />
		{/if}
		<slot />
		{#if rightIcon}
			<i class={`right-icon ${rightIcon}`} />
		{/if}
	</button>
{:else}
	<a {href} class={classNames}>
		{#if leftIcon}
			<i class={`left-icon ${leftIcon}`} />
		{/if}
		<slot />
		{#if rightIcon}
			<i class={`right-icon ${rightIcon}`} />
		{/if}
	</a>
{/if}

<style>
	button,
	a {
		border-radius: var(--border-radius);
		width: fit-content;
	}

	button:not(:disabled):hover,
	a:not(:disabled):hover {
		box-shadow: var(--shadow-outset-100), var(--shadow-inset-000);
	}

	button:not(:disabled):active,
	a:not(:disabled):active {
		box-shadow: var(--shadow-outset-000), var(--shadow-inset-200);
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

	button i.left-icon,
	a i.left-icon {
		margin-right: var(--spacing-200);
	}

	button i.right-icon,
	a i.right-icon {
		margin-left: var(--spacing-200);
	}
</style>
