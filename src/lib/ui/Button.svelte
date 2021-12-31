<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Size, Accent } from '$lib/ui/ui';
	let outsideClass = '';
	export { outsideClass as class };
	export let size: Size = 'md';
	export let href: string = null;
	export let leftIcon: string = null;
	export let rightIcon: string = null;
	export let accent: Accent = 'primary';
	const dispatch = createEventDispatcher();
	const onClick = () => dispatch('click');
	const classNames = `${size} ${accent} ${outsideClass}`;
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

<style lang="scss">
	button:focus {
		outline: 0;
	}

	button,
	a {
		border-radius: var(--border-radius);
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: baseline;
		box-shadow: var(--shadow);

		&.md {
			padding: 0.375em 0.5em;
			font-size: var(--font-size-400);
		}

		&.lg {
			padding: 0.5em 1em;
			font-size: var(--font-size-600);
		}

		&.primary {
			color: white;
			background-color: var(--color-primary-500);
		}

		&:not(:disabled):hover {
			background-color: var(--color-primary-600);
		}

		& i.left-icon {
			margin-right: var(--spacing-200);
		}

		& i.right-icon {
			margin-left: var(--spacing-200);
		}
	}
</style>
