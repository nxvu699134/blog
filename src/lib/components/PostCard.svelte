<script lang="ts">
	import { formatDate } from '$lib/utils/time';
	import Tag from '$lib/ui/Tag.svelte';
	import { colorScheme } from '$lib/states/global';

	export let data: IPostMeta = null;

	let outsideClass = '';
	export { outsideClass as class };
</script>

<a href={data.href} class={`${outsideClass}`} class:dark={$colorScheme === 'dark'}>
	<h4 class="title">{data.title}</h4>
	<div class="date">
		<i class="far fa-calendar-minus" />
		<span> {formatDate(data.date)} </span>
	</div>
	<div class="description">{data.desc}</div>
	<div class="tags-container">
		{#each data.tags as tag}
			<Tag>{tag}</Tag>
		{/each}
	</div>
</a>

<style lang="scss">
	@use '../css/responsive.scss' as *;

	a {
		display: block;
		cursor: pointer;
		border-radius: var(--border-radius);
		text-align: left;
		padding: var(--spacing-400);
		box-shadow: var(--shadow);
		transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
		border: 1px solid transparent;
		background-color: var(--color-main-bg);

		&:hover {
			box-shadow: var(--shadow-hl);
		}
	}

	a.dark {
		background-color: var(--color-grey-900);

		&:hover {
			border-color: var(--color-grey-700);
		}
	}

	.title {
		margin-bottom: var(--spacing-200);
	}

	.date {
		display: flex;
		align-items: baseline;
		font-size: var(--font-size-300);
		margin-bottom: var(--spacing-400);

		i {
			margin-right: var(--spacing-100);
		}
	}

	.description {
		color: var(--color-text-alt);
		height: 3em;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: var(--spacing-400);
	}

	.tags-container {
		display: flex;
		@include tmp-flex-column-gap(var(--spacing-300));
	}
</style>
