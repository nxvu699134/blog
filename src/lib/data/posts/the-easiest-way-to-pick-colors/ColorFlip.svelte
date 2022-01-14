<script lang="ts">
	import type { HSL } from './hsl';
	let isReveal = false;
	export let color: HSL;

	const onToggle = () => {
		isReveal = !isReveal;
	};
</script>

<div on:click={onToggle} class="color-flip">
	{#if !isReveal}
		<center>
			HSL({color.h}, {color.s}%, {color.l}%)<br />
			<small> <i> (click to reveal color) </i> </small>
		</center>
	{:else}
		<div
			style="background: hsl({color.h}, {color.s}%, {color.l}%); width: 48px; height: 48px; margin: 0 auto;"
			aria-label="color sample"
		/>
	{/if}
</div>

<style lang="scss">
	.color-flip {
		height: 60px;
		cursor: pointer;
		width: fit-content;
		margin: 0 auto;
	}
	center {
		font-size: var(--font-size-600);
	}
</style>
