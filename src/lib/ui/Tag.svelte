<script lang="ts">
	let outsideClass = '';
	export { outsideClass as class };
</script>

<div class={`tag soft-down-200 ${outsideClass}`}>
	<slot />
</div>

<style>
	.tag {
		padding: var(--spacing-100) var(--spacing-200);
		border-radius: var(--border-radius);
		font-size: var(--font-size-300);
		font-family: var(--font-heading);
		color: var(--color-text-alt);
	}
</style>
