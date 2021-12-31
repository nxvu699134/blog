<script lang="ts">
	let outsideClass = '';
	export { outsideClass as class };
</script>

<div class={`content ${outsideClass}`}>
	<slot />
</div>

<style lang="scss">
	@use '../css/responsive.scss' as *;

	.content {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: var(--spacing-400);
		row-gap: var(--spacing-500);
	}

	@include for-desktop {
		.content {
			grid-template-columns: 1fr 1fr;
			column-gap: var(--spacing-500);
			row-gap: var(--spacing-500);
		}
	}
</style>
