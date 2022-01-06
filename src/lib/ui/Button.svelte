<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Size, Accent, Shape } from '$lib/ui/ui';

	let outsideClass = '';
	export { outsideClass as class };
	export let size: Size = 'md';
	export let href: string = null;
	export let leftIcon: string = null;
	export let rightIcon: string = null;
	export let variant: Accent = 'primary';
	export let shape: Shape = 'square';
	const dispatch = createEventDispatcher();
	const onClick = () => dispatch('click');
	const classNames = `${size} ${variant} ${shape} ${outsideClass}`;
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
	@use '../css/utils.scss' as *;

	button:focus {
		outline: 0;
	}

	button,
	a {
		--btn-border-color: var(--color-grey-700);
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: baseline;
		transition: box-shadow 0.2s ease-out;

		&.square {
			border-radius: var(--border-radius);
		}

		&.rounded {
			border-radius: 100px;
		}

		&.md {
			padding: 0.375em 0.5em;
			font-size: var(--font-size-400);
		}

		&.lg {
			padding: 0.5em 1em;
			font-size: var(--font-size-600);
		}

		&.xl {
			padding: 0.625em 2em;
			font-size: var(--font-size-800);
		}

		&.primary {
			--btn-bg: var(--color-primary-500);
			--btn-bg-1: var(--color-primary-400);
			--btn-border-color: var(--color-primary-700);
			--btn-shadow-outset-color: var(--color-primary-800);
			--btn-shadow-inset-color-1: var(--color-primary-300);
			--btn-shadow-inset-color-2: var(--color-primary-700);
			color: var(--color-white);
			background-color: var(--btn-bg);
			border: 1px solid var(--btn-border-color);
			box-shadow: 0 0 0.2em 0px var(--btn-shadow-outset-color),
				0 0.1em 0.1em 0px var(--btn-shadow-inset-color-1) inset,
				0 -0.1em 0.2em 0px var(--btn-shadow-inset-color-2) inset;
		}

		&:not(:disabled):hover {
			box-shadow: 0 0 2px 0px var(--btn-shadow-outset-color);
		}

		&:not(:disabled):active {
			background: linear-gradient(var(--btn-bg), var(--btn-bg-1));
		}

		& i.left-icon {
			margin-right: var(--spacing-200);
		}

		& i.right-icon {
			margin-left: var(--spacing-200);
		}
	}

	@include for-dark-mode {
		a,
		button {
			&.primary {
				--btn-border-color: var(--color-primary-900);
				--btn-shadow-outset-color: var(--color-grey-1100);
			}
		}
	}
</style>
