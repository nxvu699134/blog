<script lang="ts">
	let outsideClass = '';
	export { outsideClass as class };
</script>

<span class={`tag ${outsideClass}`}>
	<slot />
</span>

<style lang="scss">
	@use '../css/utils.scss' as *;

	.tag {
		padding: var(--spacing-100) var(--spacing-200);
		border-radius: var(--border-radius);
		font-size: var(--font-size-300);
		/* font-family: var(--font-heading); */
		color: var(--color-text);
		background-color: var(--color-grey-100);
	}

	@include for-dark-mode {
		.tag {
			background-color: var(--color-grey-800);
		}
	}
</style>
