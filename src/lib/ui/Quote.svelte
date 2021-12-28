<script lang="ts">
	let outsideClass = '';
	export { outsideClass as class };
	export let author: string = '';
</script>

<blockquote class={`${outsideClass}`}>
	<i class="fas fa-quote-left quotetick" />
	<slot />
	<i class="fas fa-quote-right quotetick" />
	<br />
	{#if author}
		<cite>{author}</cite>
	{/if}
</blockquote>

<style lang="scss">
	blockquote {
		font-family: var(--font-heading);
		font-size: var(--font-size-500);
		padding-left: var(--spacing-500);
		border-left: 6px solid var(--color-primary-400);
		font-style: italic;
		color: var(--color-grey-700);
		margin: var(--spacing-400) var(--spacing-600);

		i.quotetick {
			color: var(--color-grey-200);
		}
	}

	cite {
		font-family: var(--font-article);
		font-size: var(--font-size-300);
		font-style: normal;
		color: var(--color-grey-500);

		&:before {
			content: '\2015';
			margin-right: var(--spacing-200);
		}
	}
</style>
