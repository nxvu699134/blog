<script lang="ts">
	import IconQuoteLeft from '~icons/ri/double-quotes-l';
	import IconQuoteRight from '~icons/ri/double-quotes-r';
	let outsideClass = '';
	export { outsideClass as class };
	export let author: string = '';
	export let accent: string = 'primary';
</script>

<blockquote class={`${outsideClass}`} class:primary={accent === 'primary'}>
	<span class="quotetick">
		<IconQuoteLeft />
	</span>
	<slot />
	<span class="quotetick">
		<IconQuoteRight />
	</span>
	<br />
	{#if author}
		<cite>{author}</cite>
	{/if}
</blockquote>

<style lang="scss">
	@use '../css/utils.scss' as *;

	blockquote {
		--quote-primary: var(--color-primary-400);

		font-family: var(--font-heading);
		font-size: var(--font-size-500);
		padding-left: var(--spacing-500);
		border-left: 6px solid transparent;
		font-style: italic;
		color: var(--color-text);
		margin: var(--spacing-400) var(--spacing-600);

		.quotetick {
			color: var(--color-text-disable);
			display: contents;
		}
	}

	blockquote.primary {
		border-left-color: var(--quote-primary);
	}

	cite {
		font-family: var(--font-article);
		font-size: var(--font-size-300);
		font-style: normal;
		color: var(--color-text-alt);

		&:before {
			content: '\2015';
			margin-right: var(--spacing-200);
		}
	}

	@include for-dark-mode {
		blockquote {
			--quote-primary: var(--color-primary-600);
		}
	}

	@include for-tablet-and-desktop {
		blockquote {
			max-width: 666px;
			font-size: var(--font-size-600);
		}

		cite {
			font-size: var(--font-size-400);
		}
	}
</style>
