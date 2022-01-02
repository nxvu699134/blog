<script lang="ts">
	import { colorScheme } from '$lib/states/global';
	let outsideClass = '';
	export { outsideClass as class };
</script>

<span class={`tag ${outsideClass}`} class:dark={$colorScheme === 'dark'}>
	<slot />
</span>

<style>
	.tag {
		padding: var(--spacing-100) var(--spacing-200);
		border-radius: var(--border-radius);
		font-size: var(--font-size-300);
		/* font-family: var(--font-heading); */
		color: var(--color-text);
		background-color: var(--color-grey-100);
	}

	.tag.dark {
		background-color: var(--color-grey-800);
	}
</style>
