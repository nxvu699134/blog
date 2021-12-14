<script lang="ts">
	import { formatDate } from '$lib/utils/time';
	import Hoverable from '$lib/components/Hoverable.svelte';

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
		margin-bottom: var(--spacing-500);
	}

	.date i {
		margin-right: var(--spacing-200);
	}

	.description {
		color: var(--color-text-alt);
	}

	@media only screen and (min-width: 60em) {
		.post-card {
			padding: var(--spacing-500);
		}
	}
</style>
