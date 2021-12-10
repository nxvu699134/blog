<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	type Size = 'sm' | 'md' | 'lg' | 'xl';
	type Soft = 'up' | 'down' | 'flat';

	export let icon: string = ''; // based on class name of font-awesome
	export let href: string = null;
	export let size: Size = 'md';
	export let soft: Soft = 'flat';
	export let circle = false;

	const getClassNames = () => {
		let softClass = 'flat';
		if (soft != 'flat') {
			softClass = `soft-${soft}-200`;
		}
		const circleClass = circle ? 'circle' : '';
		return `${size} ${softClass} ${circleClass} flex-center soft-transition ${
			soft == 'up' ? 'soft-border' : ''
		}`;
	};

	let outsideClass = '';
	export { outsideClass as class };

	const className = `${getClassNames()} ${outsideClass}`;

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

<style>
	button,
	a {
		width: 1.75em;
		height: 1.75em;
		border-radius: var(--border-radius);
		cursor: pointer;
	}

	button.md,
	a.md {
		font-size: var(--font-size-400);
	}

	button.lg,
	a.lg {
		font-size: var(--font-size-600);
	}

	button.xl,
	a.xl {
		font-size: var(--font-size-800);
	}

	button.circle,
	a.circle {
		border-radius: 50%;
	}

	@media only screen and (min-width: 60em) {
		button.flat:hover,
		a.flat:hover {
			box-shadow: var(--shadow-inset-200);
		}
	}
</style>
