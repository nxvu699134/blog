<script lang="ts">
	import type { SvelteComponentDev } from 'svelte/internal';

	let outsideClass = '';
	export { outsideClass as class };

	export let href: string = null;
	export let preIcon: typeof SvelteComponentDev = null;
	export let postIcon: typeof SvelteComponentDev = null;
	export let outline: boolean = false;

	const classNames = `${outsideClass}`;
</script>

<a {href} class={classNames} class:outline class:primary={!outline}>
	{#if preIcon}
		<svelte:component this={preIcon} class="pre-icon" />
	{/if}
	<slot />
	{#if postIcon}
		<svelte:component this={postIcon} class="pre-icon" />
	{/if}
</a>

<style lang="scss">
	@use 'sass:color';
	@use '../css/utils.scss' as *;

	a {
		--btn-bg-primary: var(--color-primary-600);
		--btn-highlight-primary: var(--color-primary-400);

		--btn-bg-primary-outline: var(--color-primary-000);
		--btn-highlight-primary-outline: var(--color-white);

		border-radius: 100px;
		width: 100%;
		max-width: 220px;
		min-width: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-200) 0;
		font-size: var(--font-size-600);
		border: 1px solid var(--color-text-primary);
		transition: background-color 0.2s ease-in-out;
	}

	@include for-dark-mode {
		a {
			--btn-bg-primary: var(--color-primary-600);
			--btn-highlight-primary: var(--color-primary-500);

			--btn-bg-primary-outline: var(--color-primary-1000);
			--btn-highlight-primary-outline: var(--color-primary-900);
		}
	}

	a.primary {
		color: var(--color-white);
		background-color: var(--btn-bg-primary);
		box-shadow: 0px 1px 2px var(--btn-bg-primary), inset 0 1px 0 0 var(--btn-highlight-primary);

		&:hover {
			background: var(--btn-highlight-primary);
		}
	}

	a.outline {
		color: var(--color-text-primary);
		background: var(--btn-bg-primary-outline);
		box-shadow: 0px 1px 2px var(--btn-bg-primary);

		&:hover {
			background: var(--btn-highlight-primary-outline);
		}
	}

	@include for-tablet-and-desktop {
		a {
			padding: var(--spacing-300) 0;
		}
	}
</style>
