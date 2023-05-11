<script>
	import Card from '$lib/ui/Card.svelte';
	import SeoTag from '$lib/components/SeoTag.svelte';
	import IconCalendar from '~icons/ri/calendar-line';
	import { formatDate } from '$lib/utils/time';

	export let title;
	export let desc;
	export let tags;
	export let date;
</script>

<SeoTag {title} {desc} keywords={tags} />
<Card class="mdsvex-layout">
	<div class="mdsvex-content">
		<h1>{title}</h1>
		<div class="publish-date">
			<IconCalendar class="pre-icon" />
			<span>
				{formatDate(date)}
			</span>
		</div>
		<slot />
	</div>
</Card>

<style lang="scss">
	:global(.mdsvex-layout) {
		margin-top: var(--spacing-600);
	}

	.mdsvex-content {
		max-width: 600px;
		margin: 0 auto;
	}

	.publish-date {
		display: flex;
		color: var(--color-text-alt);
	}
</style>
