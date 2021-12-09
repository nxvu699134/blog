<script lang="ts">
	export let size = 1;
	export let left = 6;
	export let right = 6;

	const makeLayer = (n: number) => {
		const top = n % 3 == 0 ? Math.floor(n / 3) : Math.floor(n / 2);
		const mid = n - 2 * top;
		return { top, mid };
	};

	const sides = [makeLayer(left), makeLayer(right)];
</script>

<div class="container" style="--base-size:{size}rem">
	{#each Array(2) as _, i}
		<div class="side">
			<div class="row" class:sketch={sides[i].top % 2 == 0}>
				{#each Array(sides[i].top) as _}
					<div class="dot" />
				{/each}
			</div>
			<div class="row" class:sketch={sides[i].mid % 2 == 0} class:mid={sides[i].mid % 2 != 0}>
				{#each Array(sides[i].mid) as _}
					<div class="dot" />
				{/each}
			</div>
			<div class="row reverse" class:sketch={sides[i].top % 2 == 0}>
				{#each Array(sides[i].top) as _}
					<div class="dot" />
				{/each}
			</div>
		</div>
		{#if i == 0}
			<div class="divider" />
		{/if}
	{/each}
</div>

<style>
	.container {
		font-size: var(--base-size, 1rem);
		display: flex;
		align-items: center;
		width: fit-content;
		height: fit-content;
		gap: calc(var(--dot-size) * 1.5);
		padding: var(--padding-s);
		--padding-s: calc(var(--gap) * 2);
		--dot-size: 1em;
		--gap: calc(var(--dot-size) / 3);
		box-shadow: var(--shadow-outset-200);
		border-radius: var(--border-radius);
	}

	.dot,
	.divider {
		box-shadow: var(--shadow-inset-200);
		border-radius: var(--border-radius);
	}

	.side {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		width: fit-content;
		height: fit-content;
	}

	.divider {
		width: var(--gap);
		height: calc(var(--dot-size) * 4);
	}

	.row {
		display: flex;
		width: calc(var(--dot-size) * 3 + var(--gap) * 2);
		height: var(--dot-size);
		justify-content: left;
	}

	.row.mid {
		justify-content: center;
	}

	.row.sketch {
		justify-content: space-between !important;
	}

	.row.reverse {
		justify-content: right;
	}

	.dot {
		width: var(--dot-size);
		height: var(--dot-size);
		border-radius: 50%;
	}

	@media only screen and (min-width: 60em) {
		.dot,
		.divider {
			box-shadow: var(--shadow-outset-100), var(--shadow-inset-000);
			transition: box-shadow 0.3s ease-in-out;
		}

		.container:hover .dot,
		.container:hover .divider {
			box-shadow: var(--shadow-outset-000), var(--shadow-inset-200);
		}
	}
</style>
