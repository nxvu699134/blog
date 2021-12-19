<script lang="ts">
	/* export let label: string = ''; */
	export let preIcon: string = '';
	export let postIcon: string = '';
	export let value: string;
	let outsideClass = '';
	export { outsideClass as class };
</script>

<div class={`input-group soft-transition ${outsideClass}`}>
	{#if preIcon}
		<span class="pre-icon">
			<i class={preIcon} />
		</span>
	{/if}
	<input
		bind:value
		class="soft-down-200"
		class:has-pre-icon={preIcon}
		class:has-post-icon={postIcon}
	/>
	{#if postIcon}
		<span class="post-icon">
			<i class={postIcon} />
		</span>
	{/if}
</div>

<style>
	.input-group {
		display: flex;
		align-items: stretch;
		border-radius: var(--border-radius);
		border: 1px solid var(--color-border);
	}

	.input-group:focus-within {
		box-shadow: var(--shadow-outset-200);
	}

	.input-group input {
		border: 0;
		background-color: var(--color-main-bg);
		color: var(--color-text);
		font-size: var(--font-size-400);
		padding: var(--spacing-200) var(--spacing-300);
		border-radius: var(--border-radius);
		line-height: 1.5;
		flex: 1;
	}

	.input-group input.has-pre-icon {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.input-group input.has-post-icon {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.input-group input:focus {
		outline: 0;
	}

	.input-group .pre-icon,
	.input-group .post-icon {
		padding: var(--spacing-200) var(--spacing-300);
		font-size: var(--font-size-400);
	}

	.input-group .pre-icon {
		border-right: 1px solid var(--color-border);
	}

	.input-group .post-icon {
		border-left: 1px solid var(--color-border);
	}
</style>
