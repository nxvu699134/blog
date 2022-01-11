<script lang="ts">
	import type { SvelteComponentDev } from 'svelte/internal';

	/* export let label: string = ''; */
	/* https://github.com/sveltejs/language-tools/issues/486 */
	export let preIcon: typeof SvelteComponentDev = null;
	export let postIcon: typeof SvelteComponentDev = null;
	export let value: string;
	let outsideClass: string = '';
	export { outsideClass as class };
</script>

<div class={`input-group ${outsideClass}`}>
	{#if preIcon}
		<span class="input-icon">
			<svelte:component this={preIcon} />
		</span>
	{/if}
	<input bind:value />
	{#if postIcon}
		<span class="input-icon">
			<svelte:component this={postIcon} />
		</span>
	{/if}
</div>

<style lang="scss">
	@use '../css/utils.scss' as *;

	.input-group {
		display: flex;
		border-radius: var(--border-radius);
		border: 1px solid var(--color-grey-200);
		overflow: hidden;
		box-shadow: 0 0 0 16px transparent;
		transition: box-shadow 0.2s ease-out;
		outline-offset: -2px;

		&:focus-within {
			box-shadow: 0 0 4px 2px var(--color-primary-200);
			outline: 2px solid var(--color-primary-300);
		}
	}

	.input-group input {
		border: 0;
		background-color: var(--color-main-bg);
		color: var(--color-text);
		font-size: var(--font-size-400);
		padding: var(--spacing-200) var(--spacing-300);
		line-height: 1.5;
		flex: 1;

		&:focus {
			outline: 0;
		}
	}

	.input-group .input-icon {
		padding: var(--spacing-200) var(--spacing-300);
		font-size: var(--font-size-400);
		background-color: var(--color-primary-400);
		color: var(--color-white);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@include for-dark-mode {
		.input-group {
			border-color: var(--color-grey-700);
			&:focus-within {
				box-shadow: 0 0 4px 2px var(--color-primary-900);
				outline: 2px solid var(--color-primary-600);
			}
		}

		.input-group .input-icon {
			background-color: var(--color-primary-600);
		}
	}
</style>
