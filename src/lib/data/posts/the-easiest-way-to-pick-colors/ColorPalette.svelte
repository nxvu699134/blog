<script lang="ts">
	import type { HSL } from './hsl';
	import { hslToString } from './hsl';
	export let colors: HSL[];
	export let withLabel: boolean;
</script>

<div class="color-palette-container">
	{#each colors as c}
		<div class="color-item">
			{#if c !== null}
				<div style="background: {hslToString(c)}" class="color-sample" aria-label="color sample" />
				{#if withLabel}
					<div style="min-width: 48px">H {c.h}</div>
					<div style="min-width: 48px">S {c.s}%</div>
					<div style="min-width: 48px">L {c.l}%</div>
				{/if}
			{:else}
				<div class="color-sample" aria-label="color sample" />
				<div style="text-align: center;">?</div>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	@use '../../../css/utils.scss' as *;

	.color-palette-container {
		display: flex;
		margin: var(--spacing-200) 0;
		overflow: auto;
		@include tmp-flex-column-gap(var(--spacing-400));
	}

	.color-item {
		font-size: var(--font-size-300);

		.color-sample {
			width: 24px;
			height: 24px;
			border-radius: var(--border-radius);
			box-shadow: 0 0 1px 1px var(--color-shadow) inset;
			margin-bottom: var(--spacing-200);
			margin-left: auto;
			margin-right: auto;
			background: var(--color-white);
		}
	}
</style>
