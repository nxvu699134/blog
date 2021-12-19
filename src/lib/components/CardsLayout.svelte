<script lang="ts">
	let outsideClass = '';
	export { outsideClass as class };
</script>

<div class={`content ${outsideClass}`}>
	<slot />
</div>

<style>
	.content {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: var(--spacing-400);
		row-gap: var(--spacing-500);
	}

	@media only screen and (min-width: 60em) {
		.content {
			grid-template-columns: 1fr 1fr;
			column-gap: var(--spacing-500);
			row-gap: var(--spacing-500);
		}
	}
</style>
