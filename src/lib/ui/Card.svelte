<script lang="ts">
	import { colorScheme } from '$lib/states/global';

	let outsideClass = '';
	export { outsideClass as class };
	export let hoverable = false;
</script>

<div class={`card-container ${outsideClass}`} class:dark={$colorScheme === 'dark'} class:hoverable>
	<slot />
</div>

<style lang="scss">
	@use '../css/responsive.scss' as *;

	.card-container {
		--card-bg: var(--color-main-bg);
		--card-border-hl: var(--color-grey-200);
		display: block;
		border-radius: var(--border-radius);
		text-align: left;
		padding: var(--spacing-400);
		box-shadow: var(--shadow);
		transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
		border: 1px solid transparent;
		background-color: var(--card-bg);
	}

	.card-container.hoverable {
		cursor: pointer;
		&:hover {
			box-shadow: var(--shadow-hl);
			border-color: var(--card-border-hl);
		}
	}

	.card-container.dark {
		--card-bg: var(--color-grey-900);
		--card-border-hl: var(--color-grey-700);
	}
</style>
