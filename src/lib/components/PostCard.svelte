<script lang="ts">
	import IconCalendar from '~icons/ri/calendar-line';
	import { formatDate } from '$lib/utils/time';
	import Tag from '$lib/ui/Tag.svelte';
	import Card from '$lib/ui/Card.svelte';

	export let data: IPostMeta = null;

	let outsideClass = '';
	export { outsideClass as class };
</script>

<a href={data.href} class={`${outsideClass}`}>
	<Card hoverable>
		<h4 class="title">{data.title}</h4>
		<div class="date">
			<IconCalendar class="pre-icon" />
			<span> {formatDate(data.date)} </span>
		</div>
		<div class="description">{data.desc}</div>
		<div class="tags-container">
			{#each data.tags as tag}
				<Tag>{tag}</Tag>
			{/each}
		</div>
	</Card>
</a>

<style lang="scss">
	@use '../css/utils.scss' as *;

	.title {
		margin-bottom: var(--spacing-200);
	}

	.date {
		display: flex;
		align-items: center;
		font-size: var(--font-size-300);
		margin-bottom: var(--spacing-400);
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
