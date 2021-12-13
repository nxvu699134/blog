<script lang="ts">
	export let name = '';

	let outsideClass = '';
	export { outsideClass as class };

	const className = `${outsideClass}`;
</script>

<section title={name} class={className}>
	<h3>{name}</h3>
	<div class="content">
		<slot />
	</div>
</section>

<style>
	section {
		width: 100%;
		text-align: center;
		margin-top: var(--spacing-700);
	}

	.content {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: var(--spacing-400);
		row-gap: var(--spacing-500);
		margin-top: var(--spacing-500);
	}

	@media only screen and (min-width: 60em) {
		.content {
			grid-template-columns: 1fr 1fr;
			column-gap: var(--spacing-500);
			row-gap: var(--spacing-500);
		}
	}
</style>
