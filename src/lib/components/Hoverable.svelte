<script context="module" lang="ts">
	type State = '' | 'up-100' | 'up-200' | 'down-100' | 'down-200';
	type Shape = 'square' | 'circle';
</script>

<script lang="ts">
	export let start: State = '';
	export let end: State = '';
	export let shape: Shape = 'square';
	let outsideClass = '';
	export { outsideClass as class };

	let hovering = false;

	const enter = () => {
		hovering = true;
	};

	const leave = () => {
		hovering = false;
	};

	let startClassName = '';
	let endClassName = '';
	if (start) {
		startClassName = `soft-${start}`;
	}
	if (end) {
		endClassName = `soft-${end}`;
	}
</script>

<div
	on:mouseenter={enter}
	on:mouseleave={leave}
	class={`soft-transition ${hovering ? endClassName : startClassName} ${shape} ${outsideClass}`}
>
	<slot />
</div>

<style>
	.square {
		border-radius: var(--border-radius);
	}

	.circle {
		border-radius: 50%;
	}
</style>
