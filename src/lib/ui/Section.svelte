<script lang="ts">
	let outsideClass = '';
	export { outsideClass as class };
	export let title: string = '';
</script>

<section class={`${outsideClass}`}>
	{#if title}
		<h3 class="title">{title}</h3>
	{/if}
	<slot />
</section>

<style lang="scss">
	section {
		display: flex;
		flex-flow: column;
		align-items: center;
		padding: var(--spacing-400) 0;
	}

	.title {
		margin-bottom: var(--spacing-600);
		text-transform: capitalize;
		position: relative;
		display: inline-block;

		&:after {
			content: '';
			position: absolute;
			bottom: 0;
			height: 0.25rem;
			left: 1.5em;
			right: 1.5em;
			border-radius: var(--border-radius);
			background-color: var(--color-primary-500);
		}
	}
</style>
