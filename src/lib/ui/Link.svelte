<script lang="ts">
	export let href: string = undefined;
	export let download: string = '';
	let outsideClass = '';
	export { outsideClass as class };
</script>

<a {href} class={outsideClass} {download} target="_blank" rel="noopener">
	<slot />
</a>

<style lang="scss">
	a {
		color: var(--color-text-primary);
		/* border-bottom: 2px solid var(--color-text-primary); */
		box-shadow: inset 0 -3px 0 var(--color-text-primary-disable);
		transition: background-color 0.2s ease-in-out;

		&:hover {
			background-color: var(--color-text-primary-disable);
		}
	}
</style>
