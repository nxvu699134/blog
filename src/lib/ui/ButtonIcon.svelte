<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Size } from '$lib/ui/ui';

	export let icon: string = ''; // based on class name of font-awesome
	export let href: string = null;
	export let size: Size = 'md';

	let outsideClass = '';
	export { outsideClass as class };

	const className = `flex-center ${size} ${outsideClass}`;

	const dispatch = createEventDispatcher();
	const onClick = () => dispatch('click');
</script>

{#if !href}
	<button class={className} on:click={onClick}>
		<i class={icon} />
	</button>
{:else}
	<a {href} class={className}>
		<i class={icon} />
	</a>
{/if}

<style lang="scss">
	button,
	a {
		width: 1.75em;
		height: 1.75em;
		border-radius: var(--border-radius);
		cursor: pointer;
		transition: color 0.2s ease-in-out;

		&.md {
			font-size: var(--font-size-400);
		}

		&.lg {
			font-size: var(--font-size-600);
		}

		&:hover {
			color: var(--color-primary-300);
		}
	}
</style>
