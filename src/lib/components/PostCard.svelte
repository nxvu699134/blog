<script lang="ts">
	export let data: IPostCard = null;

	let outsideClass = '';
	export { outsideClass as class };

	const className = `${outsideClass}`;
</script>

<a href={data.link} class={`post-card ${className} soft-up-200 soft-transition`}>
	<h5 class="title">{data.title}</h5>
	<div class="date">
		<i class="far fa-calendar-minus" />
		<span> {data.date} </span>
	</div>
	<div class="description">{data.description}</div>
</a>

<style>
	.post-card {
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
		margin-right: var(--spacing-200);
	}

	.description {
		color: var(--color-text-alt);
	}

	.post-card:hover {
		box-shadow: var(--shadow-outset-100), var(--shadow-inset-000);
	}

	@media only screen and (min-width: 60em) {
		.post-card {
			padding: var(--spacing-500);
		}
	}
</style>
