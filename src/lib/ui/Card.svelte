<script lang="ts">
	let outsideClass = '';
	export { outsideClass as class };
	export let hoverable = false;
	export let article = false;
</script>

{#if article}
	<article class={`card-container ${outsideClass}`} class:hoverable>
		<slot />
	</article>
{:else}
	<div class={`card-container ${outsideClass}`} class:hoverable>
		<slot />
	</div>
{/if}

<style lang="scss">
	@use '../css/utils.scss' as *;

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

	@include for-dark-mode {
		.card-container {
			--card-bg: var(--color-grey-900);
			--card-border-hl: var(--color-grey-700);
		}
	}
</style>
