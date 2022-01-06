<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Size, Variant } from '$lib/ui/ui';

	let outsideClass = '';
	export { outsideClass as class };
	export let size: Size = 'md';
	export let href: string = null;
	export let leftIcon: string = null;
	export let rightIcon: string = null;
	export let variant: Variant = 'none';
	export let rounded: boolean = false;
	const dispatch = createEventDispatcher();
	const onClick = () => dispatch('click');
	const classNames = `${size} ${variant} ${rounded ? 'rounded' : ''} ${outsideClass}`;
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
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: baseline;
		border-radius: var(--border-radius);
		transition: background-color 0.2s ease-out;

		border: 1px solid var(--btn-border);
		background-color: var(--btn-bg);
		color: var(--btn-color);
		box-shadow: 0 1px 2px var(--color-shadow), 0 0.1em 0 var(--btn-shadow-inset) inset;

		&:not(:disabled):hover {
			background-color: var(--btn-bg-hl);
		}

		&:not(:disabled):active {
			box-shadow: 0 1px 2px var(--color-shadow);
			background-color: var(--btn-bg-active);
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

		&.none {
			--btn-bg: var(--color-grey-100);
			--btn-bg-hl: var(--color-grey-000);
			--btn-bg-active: var(--color-grey-200);
			--btn-color: var(--color-text);
			--btn-border: var(--color-grey-200);
			--btn-shadow-inset: var(--color-grey-000);
		}

		&.primary {
			--btn-bg: var(--color-primary-500);
			--btn-bg-hl: var(--color-primary-400);
			--btn-bg-active: var(--color-primary-600);
			--btn-color: var(--color-white);
			--btn-border: var(--color-primary-600);
			--btn-shadow-inset: var(--color-primary-400);
		}

		i.left-icon {
			margin-right: var(--spacing-200);
		}

		i.right-icon {
			margin-left: var(--spacing-200);
		}
	}

	@include for-dark-mode {
		a,
		button {
			&.none {
				--btn-bg: var(--color-grey-900);
				--btn-bg-hl: var(--color-grey-800);
				--btn-color: var(--color-text);
				--btn-border: var(--color-black);
				--btn-shadow-inset: var(--color-grey-800);
			}

			&.primary {
				--btn-color: var(--color-white);
				--btn-border: var(--color-black);
			}
		}
	}
</style>
