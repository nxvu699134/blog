<script lang="ts">
	import { formatDate } from '$lib/utils/time';
	import Hoverable from '$lib/components/Hoverable.svelte';
	import Tag from '$lib/ui/Tag.svelte';

	export let data: IMetaPost = null;

	let outsideClass = '';
	export { outsideClass as class };

	const className = `${outsideClass}`;
</script>

<Hoverable start="up-200" end="up-100" shape="square">
	<a href={data.href} class={`post-card ${className}`}>
		<h5 class="title">{data.title}</h5>
		<div class="date">
			<i class="far fa-calendar-minus" />
			<span> {formatDate(data.date)} </span>
		</div>
		<div class="description">{data.desc}</div>
		<div class="tags">
			{#each data.tags as tag}
				<Tag>{tag}</Tag>
			{/each}
		</div>
	</a>
</Hoverable>

<style>
	.post-card {
		display: block;
		cursor: pointer;
		border-radius: var(--border-radius);
		text-align: left;
		padding: var(--spacing-400);
	}

	.title {
		margin-bottom: var(--spacing-200);
	}

	.date {
		display: flex;
		font-size: var(--font-size-300);
		margin-bottom: var(--spacing-400);
	}

	.date i {
		margin-right: var(--spacing-100);
	}

	.description {
		color: var(--color-text-alt);
		height: 3em;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: var(--spacing-400);
	}

	.tags {
		display: flex;
		column-gap: var(--spacing-300);
	}

	@media only screen and (min-width: 60em) {
		.post-card {
			padding: var(--spacing-400);
		}
	}
</style>
