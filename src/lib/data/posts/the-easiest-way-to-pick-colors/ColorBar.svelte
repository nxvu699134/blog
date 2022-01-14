<script lang="ts">
	import type { HSL } from './hsl';
	import { hslToString } from './hsl';
	export let colors: HSL[];
	export let whichChange: 'h' | 's' | 'l';
	const gradient = `linear-gradient(to right, ${colors.map((c: HSL, i: number) => {
		return `${hslToString(c)} ${Math.round((100 / (colors.length - 1)) * i)}%`;
	})})`;
</script>

<div class="color-bar-container">
	<div style="background: {gradient}" class="color-bar" />
	{#each colors as c, idx}
		<div class="color-item" style="left: calc(var(--width) / {colors.length - 1} * {idx})">
			<div class="color-sample" style="background: {hslToString(c)}" />
			<div class:make-bold={whichChange === 'h'}>H {c.h}</div>
			<div class:make-bold={whichChange === 's'}>S {c.s}%</div>
			<div class:make-bold={whichChange === 'l'}>L {c.l}%</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.color-bar-container {
		position: relative;
		height: 140px;
		overflow: auto;
		--width: 400px;
		--item-width: 48px;
	}

	.color-bar {
		width: var(--width);
		height: 24px;
		margin-left: calc(var(--item-width) / 2);
		border-radius: var(--border-radius);
		box-shadow: 0 0 1px 1px var(--color-shadow) inset;
	}

	.color-item {
		position: absolute;
		bottom: 0;
		font-size: var(--font-size-300);
		width: var(--item-width);

		.color-sample {
			width: 24px;
			height: 24px;
			border-radius: var(--border-radius);
			margin-bottom: var(--spacing-200);
			margin-left: auto;
			margin-right: auto;
			box-shadow: 0 0 1px 1px var(--color-shadow) inset;

			&::before {
				content: '';
				height: 30px;
				position: absolute;
				left: 50%;
				top: -30px;
				width: 1px;
				background-color: var(--color-red-500);
			}
		}

		.make-bold {
			font-weight: bold;
			text-decoration: underline;
		}
	}
</style>
